/* SoundWhacker Smart Control – English (Sprachschalter „🌐 English“ / „🌐 Deutsch“).
   Wird im <head> geladen. Bei Englisch übersetzt ein MutationObserver alle Texte, Titel und Meldungen,
   auch die, die das Programm später erzeugt. Neuer deutscher Text in der App → hier die englische Fassung ergänzen.
   Lange Hilfetexte mit Fettdruck werden als ganze Blöcke ersetzt (BLOECKE). */
(function () {
  'use strict';
  var KEY = 'swspielen.sprache';
  var EN = false; try { EN = localStorage.getItem(KEY) === 'en'; } catch (e) {}
  window.SW_SPRACHE = EN ? 'en' : 'de';

  // ---------- Sprachknopf auf der Startseite ----------
  function knopf() {
    var h = document.getElementById('hilfeopen'); if (!h || document.getElementById('spracheopen')) return;
    var b = document.createElement('button');
    b.id = 'spracheopen'; b.className = 'btn'; b.style.cssText = h.style.cssText;
    b.textContent = EN ? '🌐 Deutsch' : '🌐 English';
    b.lang = EN ? 'de' : 'en';
    b.title = EN ? 'App auf Deutsch umstellen' : 'Switch the app to English';
    b.addEventListener('click', function () { try { localStorage.setItem(KEY, EN ? 'de' : 'en'); } catch (e) {} location.reload(); });
    h.after(b);
  }
  document.addEventListener('DOMContentLoaded', knopf);
  if (!EN) return;

  document.documentElement.lang = 'en';

  // ---------- genaue Texte ----------
  var UE = {
    '🔊 Zum Starten des Klangs einmal tippen oder einen SW drücken': '🔊 Tap once or press a SW to start the sound',
    'Gemeinsame Melodie läuft': 'Shared Melody is running', 'Öffnen': 'Open', '⏹ Beenden': '⏹ Stop', 'Beenden': 'Stop',
    '♪ Soundwhackers einstellen': '♪ Set up SoundWhackers', 'Unterstützt Spielen': 'Assisted Play', '🎶 Gemeinsame Melodie': '🎶 Shared Melody',
    '🎹 Arpeggio-Maker': '🎹 Arpeggio Maker', '⚙ Einstellungen': '⚙ Settings', '❓ Hilfe': '❓ Help', 'Hall': 'Reverb',
    '▼ Melodie- und SW-Knöpfe einblenden': '▼ Show melody and SW buttons', '▲ Melodie- und SW-Knöpfe ausblenden': '▲ Hide melody and SW buttons',
    '▶ Alle': '▶ All', '⏹ Alle': '⏹ All', '▶ Alle Melodien starten': '▶ Start all melodies', '⏹ Alle Melodien stoppen': '⏹ Stop all melodies',
    '↔ Gleiten': '↔ Glide', '👃 Kopf': '👃 Head', '✎ Positionieren': '✎ Position', '⊕ Mitte': '⊕ Center', 'Verweilen': 'Dwell', 'sofort': 'instant',
    'Bewegung': 'Movement', 'groß': 'large', 'mittel': 'medium', 'klein': 'small', '♫ Akkord-Pad': '♫ Chord pad', 'Akkord-Slots': 'Chord slots',
    '– nicht gesetzt –': '– not set –', 'Slot-Presets': 'Slot presets', 'Speichern': 'Save', 'Laden': 'Load',
    '🎻 Instrument:': '🎻 Instrument:', '♪ Melodie ▼': '♪ Melody ▼', '♫ Akkord ▼': '♫ Chord ▼', '♩ Ton ▼': '♩ Note ▼',
    'Oktave': 'Octave', 'Oktave:': 'Octave:', 'Breite:': 'Width:', 'Dauer:': 'Duration:', '▬ Pause': '▬ Rest', 'Aktuell:': 'Current:',
    '✓ Schritt +': '✓ Step +', 'Auto: EIN': 'Auto: ON', 'Auto: AUS': 'Auto: OFF', '⌫ Letzten löschen': '⌫ Delete last', '✕ Alles löschen': '✕ Delete all',
    'Akkord:': 'Chord:', '▶ Akkord vorhören': '▶ Preview chord', 'Akkord vorhören': 'Preview chord',
    '▶ tippen → ausgewählten Akkord hören': 'tap ▶ → hear the selected chord', '► tippen → ausgewählten Akkord hören': 'tap ► → hear the selected chord',
    'Ton:': 'Note:', '▶ Ton vorhören': '▶ Preview note', 'Tonart:': 'Key:', 'Skala:': 'Scale:', 'Dur-Tonleiter': 'Major scale', 'Pentatonik': 'Pentatonic',
    'Moll-Pentatonik': 'Minor pentatonic', 'Phrygisch-Dur': 'Phrygian dominant', '⏱ im Takt: aus': '⏱ On the beat: off', '⏱ im Takt: an': '⏱ On the beat: on',
    '▶ Impro spielen': '▶ Play impro', 'Sensor oder ▶ tippen → zufälliger Ton der Skala': 'Sensor or tap ▶ → random note of the scale',
    'Sensor oder ► tippen → zufälliger Ton der Skala': 'Sensor or tap ► → random note of the scale',
    'Kanal:': 'Channel:', 'Kanal 10 (Schlagzeug)': 'Channel 10 (drums)', '👌 halten': '👌 hold', '🔁 an / aus': '🔁 on / off', '🔁 Zum Looper': '🔁 To the looper',
    '🎹 Instrumente': '🎹 Instruments', '🎻 Instrumente': '🎻 Instruments',
    'Name eingeben und Programm (1–128), MSB, LSB festlegen. Speichern → erscheint als Dropdown auf der Hauptseite.': 'Enter a name and set program (1–128), MSB, LSB. Save → appears as a dropdown on the main page.',
    'eingebaute Auswahl (45 Instrumente + 3 Schlagzeuge)': 'built-in selection (45 instruments + 3 drum kits)', 'eigene SoundFont': 'own SoundFont',
    '📁 Eigene SoundFont laden (.sf2)': '📁 Load your own SoundFont (.sf2)', 'Eingebaute verwenden': 'Use built-in', '💾 Speichern': '💾 Save',
    '↺ Liste aus SoundFont laden': '↺ Load list from SoundFont', '🎹 Klaviatur': '🎹 Keyboard', '⌨ Notennamen': '⌨ Note names',
    'Notennamen auf den Klaviertasten ein-/ausblenden': 'Show or hide note names on the piano keys', '🎛 Steuerung': '🎛 Control',
    'Wie die SoundWhackers diese App steuern. Der Klang kommt immer aus diesem Gerät.': 'How the SoundWhackers control this app. The sound always comes from this device.',
    'Steuerung über die Tasten 1–5.': 'Controlled with the keys 1–5.', '🎚 MIDI-Kanäle': '🎚 MIDI channels',
    '📋 Melodie kopieren': '📋 Copy melody',
    'Melodie eines SoundWhackers auf einen oder mehrere andere SWs übertragen. Die Ziel-SWs übernehmen alle Schritte, Dauer und Modus.': 'Copy the melody of one SoundWhacker to one or more other SWs. The target SWs take over all steps, the duration and the mode.',
    'Quelle:': 'Source:', 'Ziel:': 'Target:',
    'Löscht alle in diesem Browser gespeicherten Einstellungen (Noten, Akkorde, Melodien, Presets, Lautstärke, Instrumente). Die App startet danach mit den Standardwerten neu.': 'Deletes all settings saved in this browser (notes, chords, melodies, presets, volume, instruments). The app then restarts with the default values.',
    '🗑 Alle Einstellungen löschen': '🗑 Delete all settings', '⏮ Von vorne': '⏮ From the start',
    '🔁 SW spielt Melodie': '🔁 Any SW plays the melody', '🔢 Feste SW-Reihenfolge': '🔢 Fixed SW order', '🎯 Feste SW-Töne': '🎯 Fixed SW notes',
    'SW spielt Melodie': 'Any SW plays the melody', 'Feste SW-Reihenfolge': 'Fixed SW order', 'Feste SW-Töne': 'Fixed SW notes',
    'Mitspieler:': 'Players:', '🎉 Geschafft!': '🎉 Well done!', '▶ Nächster Ton': '▶ Next note',
    'Instrument pro SW wählen. Instrument-Liste unter ⚙ Einstellungen definieren.': 'Choose an instrument per SW. Define the instrument list under ⚙ Settings.',
    'Wenn aktiv: Berühren des SW spielt zufällige Töne aus der eingestellten Skala. Bleibt auch auf der Hauptseite aktiv.': 'When active: touching the SW plays random notes from the chosen scale. Stays active on the main page too.',
    'Aus': 'Off', 'Berühren = zufälliger Ton': 'Touch = random note', '💾 Geräte-Presets': '💾 Device presets', '(speichert alle Einstellungen für SW 1–5)': '(saves all settings for SW 1–5)',
    '🗑 Alle löschen': '🗑 Delete all', '♫ Ton / Akkord': '♫ Note / chord',
    'Ton (60–71), Akkord (Dur/Moll), Transponieren (−2…+2) pro SW einstellen und senden.': 'Set note (60–71), chord (major/minor) and transpose (−2…+2) per SW and send.',
    'Aus (kein Akkord)': 'Off (no chord)',
    'Die 5 Loop-Kanäle. Sie starten von selbst, sobald ein SW einen Kanal auslöst.': 'The 5 loop channels. They start by themselves as soon as a SW triggers a channel.',
    'Loop-Generator': 'Loop generator', 'Stil': 'Style', 'Tonart': 'Key', 'Moll': 'Minor', 'Dur': 'Major', 'dunkel': 'dark', 'hell': 'bright', 'sanft': 'soft', 'druckvoll': 'punchy',
    '🎲 Neu erzeugen': '🎲 Generate new', '💾 WAV-Dateien als ZIP speichern': '💾 Save WAV files as ZIP', '– kein Preset –': '– no preset –',
    'Speichern …': 'Save …', 'Löschen': 'Delete', 'Alle Presets sichern': 'Back up all presets', 'Presets einspielen': 'Restore presets', 'Datei jetzt teilen': 'Share file now',
    '■ Stopp': '■ Stop', '⏹ Stopp': '⏹ Stop', '🔊 Alle vorhören': '🔊 Preview all', '🔇 Vorhören aus': '🔇 Preview off', 'Projekt-Tempo': 'Project tempo',
    'Alle anpassen': 'Match all', 'gestoppt': 'stopped', 'läuft': 'running', 'Gesamtlautstärke': 'Master volume', 'Alle Kanäle leeren': 'Clear all channels', 'Loop-Kanäle': 'Loop channels',
    'WAV laden': 'Load WAV', '🗑 Entfernen': '🗑 Remove', 'keine Datei – hierher ziehen': 'no file – drag it here', 'Taste anlernen': 'Learn key',
    'SW mit „Looper EIN“ (Kanal dort wählbar)': 'SW with “Looper ON” (channel selectable there)', 'Hörbar solange berührt': 'Audible while touched',
    'Umschalten bei Berührung': 'Toggle on touch', 'Lautstärke': 'Volume', '🔊 Vorhören': '🔊 Preview', 'SoundFont-Arpeggio': 'SoundFont arpeggio',
    '– fünf Loops: dasselbe Arpeggio über fünf Akkorde, zum Begleiten': '– five loops: the same arpeggio over five chords, for accompaniment',
    'keine geladen': 'none loaded', '– erst SoundFont laden –': '– load a SoundFont first –', 'Hall: trocken': 'Reverb: dry', 'viel': 'a lot', 'Muster': 'Pattern',
    'aufwärts': 'up', 'abwärts': 'down', 'auf und ab': 'up and down', 'ab und auf': 'down and up', 'außen nach innen': 'outside in', 'Ballade': 'Ballad', 'Walzer ¾': 'Waltz ¾',
    'Harfe': 'Harp', 'Notenwert': 'Note value', 'Achtel': 'Eighths', 'Sechzehntel': 'Sixteenths', 'Oktaven': 'Octaves', 'Lage': 'Register', 'tief': 'low', 'hoch': 'high',
    'Akkorde': 'Chords', 'Dur7': '7th', '🎹 5 Arpeggio-Loops erzeugen': '🎹 Create 5 arpeggio loops', '⇧ Groß': '⇧ Shift', 'Leerzeichen': 'Space', 'Alles löschen': 'Clear all',
    'Abbrechen': 'Cancel', 'Melodien und Loops starten': 'Start melodies and loops', 'Melodien und Loops stoppen': 'Stop melodies and loops',
    'Von vorne: alle Melodien (Ton für Ton) beginnen wieder beim ersten Ton, laufende Arpeggios auf Schritt 1': 'From the start: all melodies (note by note) begin again at the first note, running arpeggios at step 1',
    'Preset-Name': 'Preset name', 'Impro-Töne kommen auf dem nächsten Achtel der laufenden Loops bzw. Melodien': 'Impro notes come on the next eighth of the running loops or melodies',
    'Welchen Loop-Kanal dieser SW schaltet': 'Which loop channel this SW switches', 'Wie der SW den Loop schaltet': 'How the SW switches the loop', 'Lied': 'Song', 'Modus': 'Mode',
    'Jeder Schlag (egal welcher SW) spielt den nächsten Ton': 'Every hit (any SW) plays the next note', 'SW1 → SW2 → SW3 … – wer nicht dran ist, bleibt stumm': 'SW1 → SW2 → SW3 … – whoever is not next stays silent',
    'SW1 = tiefster … SW5 = höchster Ton (nur ⭐-Lieder)': 'SW1 = lowest … SW5 = highest note (⭐ songs only)', 'Dateiname…': 'File name…',
    'Beschreibung, z. B. dunkler Techno, 135 bpm, E-Moll': 'Description, e.g. dark techno, 135 bpm, E minor', 'Alle Kanäle als ZIP speichern': 'Save all channels as ZIP',
    'Alle Presets als eine Datei sichern (Backup, Umzug zwischen PC und iPad)': 'Back up all presets as one file (backup, moving between PC and iPad)',
    'Eine gesicherte Preset-Datei wieder einspielen': 'Restore a saved preset file', 'Alle Kanäle gleichzeitig hörbar schalten (Taste 0)': 'Make all channels audible at once (key 0)',
    'Alle Kanäle auf das Projekt-Tempo bringen (Tonhöhe bleibt)': 'Bring all channels to the project tempo (pitch stays)',
    'Alle WAV-Dateien aus den Kanälen entfernen (Presets bleiben erhalten)': 'Remove all WAV files from the channels (presets are kept)',
    'Tasten auf der PC-Tastatur': 'Keys on the PC keyboard', 'Datei aus diesem Kanal entfernen': 'Remove the file from this channel', 'Datei dieses Kanals speichern': 'Save this channel’s file',
    'Eine Taste der PC-Tastatur für diesen Kanal festlegen (gilt zusätzlich zur Ziffer)': 'Set a PC keyboard key for this channel (in addition to the number)',
    'Angelernte Taste entfernen': 'Remove learned key', 'Die mitgelieferte Instrumenten-Auswahl verwenden': 'Use the included instrument selection',
    'Anschlagen (Gitarre)': 'Strumming (guitar)', 'Zupfen (Gitarre)': 'Picking (guitar)', 'Erzeugten Loop vorhören': 'Preview the generated loop',
    // Meldungen
    'Klang wird geladen …': 'Loading sound …', 'SoundFont lädt nicht (zu groß oder beschädigt?)': 'The SoundFont does not load (too large or damaged?)',
    'Klangerzeugung startet nicht': 'The sound engine does not start', 'Zu wenig Speicher – bitte andere Tabs schließen und neu laden.': 'Not enough memory – please close other tabs and reload.',
    'Das ist keine SoundFont (.sf2) – bitte eine andere Datei wählen': 'This is not a SoundFont (.sf2) – please choose another file',
    'Speichern im Browser fehlgeschlagen (Speicher voll?)': 'Saving in the browser failed (storage full?)', '🔊 Klang wird geladen – gleich nochmal': '🔊 The sound is loading – try again in a moment',
    'Dieser Browser kann kein MIDI (Safari auf dem iPad nicht) – bitte Chrome/Edge am PC oder die App „Web MIDI Browser“ verwenden.': 'This browser cannot do MIDI (Safari on the iPad cannot) – please use Chrome/Edge on the PC or the app “Web MIDI Browser”.',
    'Kein MIDI-Gerät gefunden – ist der HUB per Bluetooth verbunden?': 'No MIDI device found – is the HUB connected via Bluetooth?', 'MIDI-Zugriff wurde nicht erlaubt.': 'MIDI access was not allowed.',
    'Ton → sende…': 'Note → sending…', 'Akkord aus…': 'Chord off…', 'Akkord → sende…': 'Chord → sending…', 'Bitte mindestens ein Ziel wählen': 'Please choose at least one target',
    'Alle Einstellungen wirklich löschen?\nDie App startet danach mit Standardwerten neu.': 'Really delete all settings?\nThe app then restarts with the default values.',
    'Zurücksetzen…': 'Resetting…', 'Melodien der Soundwhacker': 'Melodies of the SoundWhackers', 'Kein Lied gewählt': 'No song selected',
    'Jeder SoundWhacker spielt immer seinen Ton': 'Every SoundWhacker always plays its note', 'Los geht’s – irgendeinen SoundWhacker drücken!': 'Let’s go – press any SoundWhacker!',
    'Lied zu Ende – weiter geht’s von vorn': 'Song finished – starting again from the top',
    'Instrumenten-Liste durch die Instrumente der SoundFont ersetzen?': 'Replace the instrument list with the instruments of the SoundFont?',
    'Erst Preset wählen': 'Choose a preset first', 'Export Fehler': 'Export error', 'Alle 8 Geräte-Presets und alle Melodien (SW1–5) wirklich löschen?': 'Really delete all 8 device presets and all melodies (SW1–5)?',
    'Alle Presets gelöscht': 'All presets deleted', 'Ungültige Datei': 'Invalid file', 'Importiere (mit Loops)…': 'Importing (with loops)…', '— leer —': '— empty —', '(leer)': '(empty)',
    '✏ Überschreiben': '✏ Overwrite', 'Noch keine Melodie eingegeben.': 'No melody entered yet.', 'Melodie wirklich löschen?': 'Really delete the melody?',
    'Ton wieder an': 'Sound back on', 'Versuch: Ton beim Kamerastart angehalten': 'Attempt: sound paused while the camera starts', 'Dieser Browser gibt die Kamera nicht frei': 'This browser does not allow the camera',
    'Kamera wird gestartet …': 'Starting the camera …', 'Kamera antwortet nicht – in den iPad-Einstellungen (Safari → Kamera) erlauben und neu laden': 'The camera does not respond – allow it in the iPad settings (Safari → Camera) and reload',
    'Kamera an – Bild wird empfangen …': 'Camera on – receiving the picture …', 'Einmal auf den Bildschirm tippen, um die Kamera zu starten': 'Tap the screen once to start the camera',
    'Gesichtserkennung wird geladen …': 'Loading face detection …', 'Gerade auf den Bildschirm schauen …': 'Look straight at the screen …', 'Kamera nicht erlaubt': 'Camera not allowed',
    'Kamera wird von einer anderen App benutzt': 'The camera is being used by another app', 'Kein Akkord gewählt': 'No chord selected',
    'Erst mindestens eine WAV-Datei laden.': 'Load at least one WAV file first.', 'unbekannter Fehler': 'unknown error', 'Preset nicht gefunden.': 'Preset not found.',
    'Laden fehlgeschlagen.': 'Loading failed.', 'Lesen der Presets fehlgeschlagen.': 'Reading the presets failed.', 'Teilen-Menü geöffnet – „In Dateien sichern“ wählen.': 'Share menu opened – choose “Save to Files”.',
    'Das ist keine Preset-Datei von diesem Looper.': 'This is not a preset file from this looper.', 'Preset-Datei ist beschädigt (unvollständig).': 'The preset file is damaged (incomplete).',
    'Datei abgeschnitten': 'File truncated', 'Die Datei enthält keine Presets.': 'The file contains no presets.', 'Taste drücken … (Esc = Abbruch)': 'Press a key … (Esc = cancel)',
    'Die Tasten 1–5 sind die SWs – bitte eine andere Taste wählen.': 'Keys 1–5 are the SWs – please choose another key.', 'Die Taste 0 ist für „Alle vorhören“ reserviert.': 'Key 0 is reserved for “Preview all”.',
    'Alle Kanäle sind schon leer.': 'All channels are already empty.', 'Alle Dateien aus den Kanälen entfernen? (Gespeicherte Presets bleiben erhalten.)': 'Remove all files from the channels? (Saved presets are kept.)',
    'Alle Kanäle geleert.': 'All channels cleared.', 'SoundFont geladen und gespeichert.': 'SoundFont loaded and saved.',
    'SoundFont geladen, aber nicht dauerhaft gespeichert (Browser-Speicher voll oder gesperrt).': 'SoundFont loaded, but not saved permanently (browser storage full or blocked).',
    'Das Instrument hat keinen Ton erzeugt. Bitte ein anderes wählen.': 'The instrument made no sound. Please choose another one.',
    'SoundFont geladen – gilt auch für die SWs (Einstellungen → Instrumente).': 'SoundFont loaded – it also applies to the SWs (Settings → Instruments).',
    'Aus der Länge geschätzt – klicken, um das richtige Tempo einzugeben': 'Estimated from the length – click to enter the correct tempo', 'Klicken, um das Tempo zu ändern': 'Click to change the tempo',
    'Erst oben ein Projekt-Tempo eintragen.': 'First enter a project tempo above.', 'Presets sind in diesem Browser nicht verfügbar.': 'Presets are not available in this browser.',
    'gedrückt halten': 'hold', 'Noch keine Schritte …': 'No steps yet …',
    'Keine Slots belegt. Erst Akkorde in den Slots speichern.': 'No slots filled yet. Save chords in the slots first.'
  };
  var LIEDER = [['Übung: Tonleiter auf und ab', 'Exercise: scale up and down'], ['Alle meine Entchen', 'All My Little Ducklings'], ['Hänschen klein', 'Little Hans'],
    ['Bruder Jakob', 'Are You Sleeping, Brother John?'], ['Morgen kommt der Weihnachtsmann', 'Twinkle, Twinkle, Little Star'], ['Stille Nacht', 'Silent Night'],
    ['Zum Geburtstag viel Glück', 'Happy Birthday'], ['Ode an die Freude', 'Ode to Joy'], ['Für Elise (Thema)', 'Für Elise (theme)']];
  var WORT = { Melodie: 'Melody', Akkord: 'Chord', Ton: 'Note', Impro: 'Impro', Looper: 'Looper', 'Arpeggio:': 'Arpeggio:' };
  // ---------- zusammengesetzte Texte ----------
  var UE_RE = [
    [/^(♪|♫|♩|♬|↻|🎵) (Melodie|Akkord|Ton|Impro|Looper|Arpeggio:) (EIN ●|EIN|AUS)$/, function (x, a, w, s) { return a + ' ' + WORT[w] + ' ' + (s === 'AUS' ? 'OFF' : s.replace('EIN', 'ON')); }],
    [/^(♪|♫|♩) (Melodie|Akkord|Ton) $/, function (x, a, w) { return a + ' ' + WORT[w] + ' '; }],
    [/^([A-G]#?\d)-Dur7$/, '$1 7th'], [/^([A-G]#?\d)-Dur$/, '$1 major'], [/^([A-G]#?\d)-Moll$/, '$1 minor'],
    [/^Programm (\d+)$/, 'Program $1'], [/^▷ Melodie (\d)$/, '▷ Melody $1'], [/^▶ SW(\d) Vorhören$/, '▶ Preview SW$1'], [/^▶ Melodie SW(\d)$/, '▶ Melody SW$1'],
    [/^Kanal (\d+)$/, 'Channel $1'], [/^Taste (\d)$/, 'Key $1'], [/^Gerät (\d+)/, 'Device $1'], [/^Schritt (\d+)/, 'Step $1'],
    [/^👀 Zeigen, wer dran ist: (AUS|EIN|AN)$/, function (x, s) { return '👀 Show whose turn it is: ' + (s === 'AUS' ? 'OFF' : 'ON'); }],
    [/^gedrückt halten = SW(\d) berühren$/, 'hold = touch SW$1'], [/Loop-Kanal (\d)/g, 'Loop channel $1'],
    [/^Melodie von SW(\d)/, 'Melody of SW$1'], [/ \(leer\)/g, ' (empty)'],
    [/Dieses Lied hat (\d+) verschiedene Töne – „Feste SW-Töne“ geht nur mit höchstens 5 \(⭐\)\. Bitte ein ⭐-Lied wählen oder „SW spielt Melodie“ spielen\./, 'This song has $1 different notes – “Fixed SW notes” only works with at most 5 (⭐). Please choose a ⭐ song or play “Any SW plays the melody”.'],
    [/ verschiedene Töne: /g, ' different notes: '], [/ Töne gespielt/g, ' notes played'], [/(\d+) Töne\b/g, '$1 notes'],
    [/ ist noch nicht dran – erst SW/g, ' is not next yet – first SW'], [/^Nächster Ton: /, 'Next note: '], [/ · die SoundWhacker spielen das Lied/, ' · the SoundWhackers play the song'],
    [/ Instrumente geladen – jetzt unter „Soundwhackers einstellen“ den SWs zuordnen\./, ' instruments loaded – now assign them to the SWs under “Set up SoundWhackers”.'],
    [/^Fehler: /, 'Error: '], [/^Fehler /, 'Error '], [/, Fehler /g, ', error '], [/^Klang konnte nicht starten: /, 'The sound could not start: '],
    [/Die Kamera wird vom iPad immer wieder beendet \[/, 'The iPad keeps stopping the camera ['], [/\] – andere Apps mit Kamera schließen/, '] – close other apps that use the camera'],
    [/\] – Kopf aus und wieder an tippen/, '] – tap Head off and on again'], [/^Kopfsteuerung startet nicht: /, 'Head control does not start: '],
    [/^Stopp: /, 'Stop: '], [/ \(Kamera wird ausgeschaltet\)/, ' (the camera is turned off)'], [/, Ton /g, ', note '],
    [/ ist stumm/g, ' is muted'], [/ schaltet diesen Kanal immer direkt/, ' always switches this channel directly'],
    [/" konnte nicht gelesen werden \(nur Audiodateien wie WAV, MP3, OGG\)\./, '" could not be read (audio files only, such as WAV, MP3, OGG).'],
    [/" überschreiben\?/, '" – overwrite?'], [/" löschen\?/, '" – delete?'], [/^Speichern fehlgeschlagen: /, 'Saving failed: '], [/^Gelöscht: /, 'Deleted: '],
    [/: Teilen-Menü geöffnet – „In Dateien sichern“ wählen\./, ': share menu opened – choose “Save to Files”.'], [/ sind bereit – bitte „Datei jetzt teilen“ tippen\./, ' are ready – please tap “Share file now”.'],
    [/^Teilen nicht möglich: /, 'Sharing not possible: '], [/\)\. Überschreiben\?/, '). Overwrite?'], [/ übersprungen\)/, ' skipped)'],
    [/ gehörte zu Kanal (\d+) und ist jetzt bei Kanal (\d+)/, ' belonged to channel $1 and is now on channel $2'], [/ hat noch keine Datei\./, ' has no file yet.'],
    [/ Dateien als ZIP heruntergeladen \(siehe Downloads-Ordner; Rechtsklick → Alle extrahieren\)\./, ' files downloaded as ZIP (see the Downloads folder; right-click → Extract all).'],
    [/^Nichts erkannt, nehme die Einstellungen – /, 'Nothing detected, using the settings – '], [/\. Die Loops sind in den Kanälen\./, '. The loops are in the channels.'],
    [/^SoundFont konnte nicht geladen werden: /, 'The SoundFont could not be loaded: '], [/\. Ist das eine \.sf2-Datei, und besteht eine Internetverbindung\?/, '. Is it an .sf2 file, and is there an internet connection?'],
    [/ – besteht eine Internetverbindung\?/, ' – is there an internet connection?'], [/^Eingebaute SoundFont konnte nicht geladen werden: /, 'The built-in SoundFont could not be loaded: '],
    [/ BPM\. Die 5 Loops sind jetzt im Looper \(Kanal 1–5\) – die SWs mit „Looper EIN“ schalten sie\./, ' BPM. The 5 loops are now in the looper (channels 1–5) – the SWs with “Looper ON” switch them.'],
    [/Tempo unbekannt bei Kanal /g, 'Tempo unknown for channel '], [/ – dort auf „Tempo \?“ klicken und eingeben\./, ' – click “Tempo ?” there and enter it.'],
    [/^Alle Kanäle haben schon /, 'All channels already have '], [/^Passe Kanal /, 'Adjusting channel '], [/ Kanal\/Kanäle auf /, ' channel(s) to '], [/^läuft /, 'running '],
    [/ Melodie (\d)/g, ' melody $1'],
    [/^▶ Melodie SW(\d) vorhören$/, '▶ Preview melody SW$1'],
    [/ · (SW spielt Melodie|Feste SW-Töne|Feste SW-Reihenfolge)( · |$)/, function (x, m, e) { return ' · ' + UE[m] + e; }],
    [/SoundWhacker-Auswahl \(eingebaut\)/, 'SoundWhacker selection (built-in)'], [/(\d+) Instrumente\)/, '$1 instruments)']
  ];
  function ue(s) {
    if (!s) return s;
    var k = s.replace(/\s+/g, ' ').trim(); if (!k) return s;
    if (Object.prototype.hasOwnProperty.call(UE, k)) return s.replace(s.trim(), UE[k]);
    var x = s;
    for (var i = 0; i < UE_RE.length; i++) x = x.replace(UE_RE[i][0], UE_RE[i][1]);
    for (var j = 0; j < LIEDER.length; j++) if (x.indexOf(LIEDER[j][0]) >= 0) x = x.split(LIEDER[j][0]).join(LIEDER[j][1]);
    return x;
  }
  window.SW_UE = ue;
  var ATTR = ['title', 'aria-label', 'placeholder', 'label', 'alt'];
  function attr(n, a) { if (!n.hasAttribute || !n.hasAttribute(a)) return; var v = n.getAttribute(a), t = ue(v); if (t !== v) n.setAttribute(a, t); }
  function knoten(n) {
    if (n.nodeType === 3) { var p = n.parentNode; if (!p || p.nodeName === 'SCRIPT' || p.nodeName === 'STYLE') return; var t = ue(n.data); if (t !== n.data) n.data = t; }
    else if (n.nodeType === 1 && n.nodeName !== 'SCRIPT' && n.nodeName !== 'STYLE') { if (n.id === 'spracheopen') return; ATTR.forEach(function (a) { attr(n, a); }); for (var c = n.firstChild; c; c = c.nextSibling) knoten(c); }
  }
  new MutationObserver(function (ms) {
    ms.forEach(function (m) {
      if (m.type === 'childList') m.addedNodes.forEach(knoten);
      else if (m.type === 'characterData') knoten(m.target);
      else if (m.target.id !== 'spracheopen') attr(m.target, m.attributeName);
    });
  }).observe(document.documentElement, { subtree: true, childList: true, characterData: true, attributes: true, attributeFilter: ATTR });

  // Meldungsfenster ebenfalls übersetzen
  var A = window.alert, C = window.confirm, P = window.prompt;
  window.alert = function (m) { return A.call(window, ue(String(m))); };
  window.confirm = function (m) { return C.call(window, ue(String(m))); };
  window.prompt = function (m, d) { return P.call(window, ue(String(m)), d); };

  // ---------- lange Texte mit Fettdruck: als ganze Blöcke ----------
  var HILFE = '<div style="font-weight:600;font-size:18px;margin-bottom:16px">❓ Help &amp; guides</div>' +
    '<div style="font-weight:600;font-size:15px;margin-bottom:10px;color:var(--acc)">🆕 Setup (once)</div><ol style="margin:0 0 20px 18px;line-height:2">' +
    '<li>Switch on the SW-HUB – it starts automatically as a Bluetooth <b>keyboard</b></li>' +
    '<li>iPad: Settings → Bluetooth → pair the HUB whose name ends in <b>-KEY</b></li>' +
    '<li>Open this page in Safari, “Share” → “Add to Home Screen”</li>' +
    '<li>Tap once so the sound starts – the instruments are loaded the first time (about 21&nbsp;MB, then also offline)</li></ol>' +
    '<div style="font-weight:600;font-size:15px;margin-bottom:10px;color:var(--acc)">✅ Playing</div><ul style="margin:0 0 20px 18px;line-height:2">' +
    '<li>Depending on the settings, every SW (key 1–5) plays a <b>chord/note</b>, a <b>melody</b> (step by step or as an arpeggio) or <b>improvises</b></li>' +
    '<li>Set everything up under <b>♪ Set up SoundWhackers</b>; volume with the faders on the start page</li>' +
    '<li><b>Assisted Play</b>: chord slots for SW1 and the chord pad to tap</li>' +
    '<li><b>🎶 Shared Melody</b>: all SWs play one song together – no matter which SW is pressed, it is always the <b>next note</b>. Songs from the Tischharfe (also your own songs recorded there) or the melody of a SW; every SW sounds with its own instrument. It keeps running on the start page until you tap <b>Stop</b> in the yellow notice</li>' +
    '<li><b>🎹 Arpeggio Maker</b>: creates an arpeggio or a guitar style (strumming: Folk, Pop, Rock, Reggae … · picking: Travis, Country, Ballad, Waltz …) over 5 chords with an instrument of the SoundFont and loads it as 5 loops into the looper</li>' +
    '<li><b>🔁 Looper</b>: 5 loop channels with a loop generator. If a SW is set to <b>Looper ON</b>, SW&nbsp;1 controls channel&nbsp;1, SW&nbsp;2 channel&nbsp;2 …</li>' +
    '<li>On the PC you can try the SWs with the keys 1–5</li>' +
    '<li>Your own sounds: Settings → Instruments → <b>Load your own SoundFont (.sf2)</b> (on the iPad preferably under 30–40&nbsp;MB)</li></ul>' +
    '<div style="background:#1a2a1a;border-left:3px solid #4a8;padding:10px 14px;border-radius:6px;font-size:13px;line-height:1.7"><b>⚠ Note:</b><br>' +
    'Control via <b>BLE-MIDI</b> (Settings → Control) does not work in Safari on the iPad – use the keyboard mode there.<br>' +
    'Settings and presets stay saved in this browser; with export/import (Presets) you can back them up or move them to another device – also preset files from the SW-HUB.</div>';
  var BLOECKE = [
    ['#hilfearea .card', HILFE],
    ['input[name=ctlMode][value=keys] + span', '<b>Keys 1–5</b> – the SW-HUB is paired in Bluetooth <b>keyboard</b> mode and sends the keys 1 to 5 as long as a SW is touched. Also works in Safari on the iPad.'],
    ['input[name=ctlMode][value=midi] + span', '<b>BLE-MIDI</b> – the SW-HUB is paired in <b>MIDI</b> mode. Every MIDI channel counts as “SW pressed” (assignment under MIDI channels). <b>Not in Safari on the iPad</b> – only Chrome/Edge on the PC or the app “Web MIDI Browser”.'],
    ['#sec-midich > .mut.small', 'Which channel each SoundWhacker sounds on – in BLE-MIDI mode also: which channel the SW-HUB sends this SW on. <b>Channel 10 = drums</b> (General MIDI): then every note triggers a different drum instrument. Saved in the preset.'],
    [function () { return [].slice.call(document.querySelectorAll('#gemarea div.mut')).filter(function (d) { return d.innerHTML.indexOf('Feste SW-Reihenfolge:') >= 0 || d.textContent.indexOf('Fixed SW order:') >= 0; })[0]; },
      '<b>Any SW plays the melody:</b> no matter which SoundWhacker (or key 1–5 or the button ▶ Next note) – <b>every hit plays the next note</b>. <b>Fixed SW order:</b> like without an order, but always SW1 → SW2 → … – whoever is not next stays silent. Every SW sounds with its own instrument (set it under ♪ Set up SoundWhackers).<br>' +
      'With 🏠 Home the Shared Melody keeps running (e.g. to adjust the volume on the main page) – only with ⏹ <b>Stop</b> in the yellow notice do the SWs play as set up again.<br><b>Fixed SW notes</b> (⭐ songs only): the notes of the song are shared out – SW1 the lowest, SW5 the highest; every SW always plays its note. With <b>👀 Show whose turn it is</b> the SW that is next lights up – the song continues with the right SW.<br>Song and mode are saved in the 💾 preset (also with export/import).']
  ];
  function bloecke() {
    BLOECKE.forEach(function (b) { var el = typeof b[0] === 'function' ? b[0]() : document.querySelector(b[0]); if (el && !el.dataset.en) { el.innerHTML = b[1]; el.dataset.en = '1'; } });
    knoten(document.body);
  }
  document.addEventListener('DOMContentLoaded', bloecke);
  window.addEventListener('load', function () { knoten(document.body); });
})();
