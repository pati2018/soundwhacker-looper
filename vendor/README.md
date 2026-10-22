# Mitgelieferte Bibliotheken

| Ordner | Bibliothek | Version | Lizenz |
| --- | --- | --- | --- |
| `mediapipe/` | Google MediaPipe Tasks Vision (`vision_bundle.mjs`, `wasm/`) | 0.10.14 | Apache-2.0 |
| `spessasynth/spessasynth_core.mjs` | spessasynth_core (SoundFont-Wiedergabe), ESM-Bündel von jsDelivr | 4.3.22 | Apache-2.0 |
| `spessasynth/spessasynth_lib.mjs` | spessasynth_lib (Echtzeit-Synth für „Akkord/Ton“), ESM-Bündel von jsDelivr | 4.3.14 | Apache-2.0 |
| `spessasynth/spessasynth_processor.min.js` | AudioWorklet-Prozessor von spessasynth_lib (eigenständig) | 4.3.14 | Apache-2.0 |
| `spessasynth/stb-vorbis.mjs` | stb-vorbis (Abhängigkeit von spessasynth_core), ESM-Bündel von jsDelivr | 0.0.6 | Apache-2.0 |

In `spessasynth_core.mjs` und `spessasynth_lib.mjs` sind nur die Importpfade auf die lokalen Dateien umgestellt.
Lizenztext: `../licenses/Apache-2.0.txt`. Die Dateien sind lokal, damit der Looper offline funktioniert (siehe `../sw.js`).
