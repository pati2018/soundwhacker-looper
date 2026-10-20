# Erkennungs-Modelle

| Datei | Zweck | Quelle | Lizenz |
| --- | --- | --- | --- |
| `face_landmarker.task` | Kopfhaltung und Gesichtszüge (Modus „Kopf, Gesicht & Arme“) | Google MediaPipe, `face_landmarker/float16/1` | Apache-2.0 |
| `pose_landmarker_lite.task` | Schultern und Arme (Modus „Kopf, Gesicht & Arme“) | Google MediaPipe, `pose_landmarker_lite/float16/1` | Apache-2.0 |

Die Modelle liegen hier, damit der Looper sie von derselben Adresse lädt und nichts bei Google nachgeladen wird.
Lizenztext: `../licenses/Apache-2.0.txt`.

Handerkennung, Hintergrund-Erkennung und die MediaPipe-Bibliothek (Tasks Vision 0.10.14) werden von der handklang-Seite geladen: https://pati2018.github.io/handklang/
