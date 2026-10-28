// Offline-Speicher (Service Worker) für SoundWhacker Looper, Kamera und Spielen (gleiche Adresse, gemeinsamer Speicher).
// Seite: erst aus dem Netz (immer die neueste Version), ohne Netz aus dem Speicher.
// Bibliotheken und Modelle: aus dem Speicher, sonst aus dem Netz – und dann merken.
// Die SoundFont speichert die Seite selbst (IndexedDB), deshalb hier nicht doppelt.
// Bei geänderten Dateien in vendor/ oder models/ die Versionsnummer erhöhen.
const CACHE = 'swlooper-v1';

self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(['./', './index.html', './SoundWhacker_Looper.html', './SoundWhacker_Kamera.html', './SoundWhacker_Spielen.html'])).then(() => self.skipWaiting()));
});

self.addEventListener('activate', e => {
  e.waitUntil(caches.keys()
    .then(keys => Promise.all(keys.filter(k => k.startsWith('swlooper-') && k !== CACHE).map(k => caches.delete(k))))
    .then(() => self.clients.claim()));
});

const remember = (req, res) => {
  if (res && res.ok && res.type === 'basic') { const copy = res.clone(); caches.open(CACHE).then(c => c.put(req, copy)); }
  return res;
};

self.addEventListener('fetch', e => {
  const req = e.request;
  if (req.method !== 'GET') return;
  const url = new URL(req.url);
  if (url.origin !== self.location.origin) return;
  if (url.pathname.endsWith('.sf2')) return;
  const isPage = req.mode === 'navigate' || url.pathname.endsWith('/') || url.pathname.endsWith('.html');
  if (isPage) {
    // no-cache: beim Server nachfragen, ob es eine neue Version gibt (sonst liefert der Browser-Zwischenspeicher bis zu 10 Min. die alte Seite)
    e.respondWith(fetch(req, { cache: 'no-cache' }).then(res => remember(req, res))
      .catch(() => caches.match(req, { ignoreSearch: true })
        .then(hit => hit || caches.match(/Kamera/i.test(url.pathname) ? './SoundWhacker_Kamera.html' : /Spielen/i.test(url.pathname) ? './SoundWhacker_Spielen.html' : './SoundWhacker_Looper.html'))));
    return;
  }
  e.respondWith(caches.match(req).then(hit => hit || fetch(req).then(res => remember(req, res))));
});
