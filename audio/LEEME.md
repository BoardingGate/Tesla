# audio/ — locuciones pregrabadas del Navegador de rutas

Clips que usa `tesla.html` cuando el navegador no puede sintetizar voz (navegador del Tesla).
En PC y móvil se usa la voz sintetizada del navegador y estos archivos no se descargan.

- 79 clips en MP3 (mono, 24 kHz, 48 kbps) y en OGG/Opus (mono, 32 kbps). El código elige el formato con `canPlayType`.
- `manifest.json`: lista de clips (texto, duración, bytes). El código lo usa para precargarlos.
- URL pública: `https://boardinggate.github.io/Tesla/audio/<clave>.mp3`
- Si se regeneran los audios, subir `VOICE_CLIPS_VERSION` en `tesla.html` para evitar la caché vieja.

Generados en local y gratis con Piper TTS (https://github.com/rhasspy/piper), voz `es_ES-sharvard-medium`.
Atribución de la voz: modelo entrenado con el corpus «Sharvard» (University of Edinburgh,
https://datashare.ed.ac.uk/handle/10283/574), licencia Creative Commons Atribución 3.0
(http://creativecommons.org/licenses/by/3.0/).
