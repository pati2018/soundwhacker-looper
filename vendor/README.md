# Mitgelieferte Bibliotheken

| Ordner | Bibliothek | Version | Lizenz |
| --- | --- | --- | --- |
| `mediapipe/` | Google MediaPipe Tasks Vision (`vision_bundle.mjs`, `wasm/`) | 0.10.14 | Apache-2.0 |
| `spessasynth/spessasynth_core.mjs` | spessasynth_core (SoundFont-Wiedergabe), ESM-Bündel von jsDelivr | 4.3.22 | Apache-2.0 |
| `spessasynth/stb-vorbis.mjs` | stb-vorbis (Abhängigkeit von spessasynth_core), ESM-Bündel von jsDelivr | 0.0.6 | Apache-2.0 |

In `spessasynth_core.mjs` ist nur der Importpfad von stb-vorbis auf die lokale Datei umgestellt.
Lizenztext: `../licenses/Apache-2.0.txt`. Die Dateien sind lokal, damit der Looper offline funktioniert (siehe `../sw.js`).
