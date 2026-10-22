# Erkennungs-Modelle

| Datei | Zweck | Quelle | Lizenz |
| --- | --- | --- | --- |
| `hand_landmarker.task` | Handerkennung (Modus „Hände“) | Google MediaPipe, `hand_landmarker/float16/1` | Apache-2.0 |
| `selfie_segmenter.tflite` | Virtueller Hintergrund | Google MediaPipe, `selfie_segmenter/float16` | Apache-2.0 |
| `face_landmarker.task` | Kopfhaltung und Gesichtszüge | Google MediaPipe, `face_landmarker/float16/1` | Apache-2.0 |
| `pose_landmarker_lite.task` | Schultern, Arme, ganzer Körper | Google MediaPipe, `pose_landmarker_lite/float16/1` | Apache-2.0 |

Alle Modelle liegen im Looper selbst, damit nichts von fremden Servern geladen wird und der Offline-Modus funktioniert.
Lizenztext: `../licenses/Apache-2.0.txt`.
