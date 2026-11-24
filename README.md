# ⚡ BoardingGate — Lanzador & Navegador 3D Avanzado para Tesla

<p align="center">
  <img src="https://img.shields.io/badge/Tesla-MCU%20Optimized-E82127?style=for-the-badge&logo=tesla&logoColor=white" alt="Tesla MCU Ready" />
  <img src="https://img.shields.io/badge/Mapbox_GL_JS-v3.26-000000?style=for-the-badge&logo=mapbox&logoColor=white" alt="Mapbox GL JS" />
  <img src="https://img.shields.io/badge/3D_Terrain-DEM%20Relief-4CAF50?style=for-the-badge" alt="3D Terrain Relief" />
  <img src="https://img.shields.io/badge/Firebase-Realtime%20Sync-FFCA28?style=for-the-badge&logo=firebase&logoColor=black" alt="Firebase" />
  <img src="https://img.shields.io/badge/Google_Gemini-AI%20Copilot-8E75B2?style=for-the-badge&logo=google&logoColor=white" alt="Gemini AI" />
  <img src="https://img.shields.io/badge/OpenChargeMap-EV%20Chargers-0070F3?style=for-the-badge" alt="OpenChargeMap" />
</p>

<p align="center">
  <b>BoardingGate</b> es un dashboard de inicio, lanzador de aplicaciones y <b>sistema de navegación GPS 3D avanzado</b> diseñado y optimizado específicamente para la pantalla táctil y el navegador integrado de los vehículos <b>Tesla (Model 3, Model Y, Model S y Model X)</b>.
</p>

<p align="center">
  <a href="#-características-principales">Características</a> •
  <a href="#-navegación-3d-y-motor-cartográfico">Navegador 3D</a> •
  <a href="#-radares-y-alertas-en-tiempo-real">Radares y Tráfico</a> •
  <a href="#-autonomía-y-puntos-de-recarga">Autonomía VE</a> •
  <a href="#-asistente-de-rutas-ia">Asistente IA</a> •
  <a href="#-optimizaciones-para-el-navegador-tesla">Optimizaciones MCU</a> •
  <a href="#-despliegue-y-configuración">Instalación</a>
</p>

---

## 🚀 Características Principales

├── 📱 Grid Lanzador Personalizable (96 accesos directos configurables) ├── 🗺️
Navegación 3D en Relieve Real (Mapbox GL JS + DEM + OSRM) ├── 🚨 Detector de
Radares y Alertas Comunitarias (Fijos, móviles, tramo y accidentes) ├── 🔋
Calculador de Radio de Acción VE (Física de desnivel, temperatura y viento) ├──
🔌 Buscador de Puntos de Recarga (OpenChargeMap con potencias y tarifas) ├── 🤖
Copiloto de Rutas por Voz con IA (Google Gemini + Places API) ├── ⏰
Recordatorios por Geolocalización (Avisos al entrar en radios de interés) ├── 💬
Chat Comunitario en Vivo (Mensajería instantánea y encuestas entre propietarios)
└── 🔄 Sincronización Móvil ↔ Coche (Modo Compañero vía Firebase)


---

## 🗺️ Navegación 3D y Motor Cartográfico

Un motor de navegación completo que rivaliza con aplicaciones nativas:

* **Modos de Vista de Cámara:**
  * **3D RELIEVE (Recomendado):** Malla de elevación digital del terreno (DEM) con sombreado y ángulo polar solar dinámico.
  * **3D Perspectiva:** Inclinación configurable (*pitch* hasta 85°) con renderizado de edificios 3D extruidos.
  * **AVANCE / HEADING:** Orientación cenital en el sentido de la marcha.
  * **NORTE:** Orientación cartográfica fija tradicional.
* **Algoritmos de Zoom Inteligente:**
  * **Modo AUTO:** Zoom adaptativo según la velocidad actual del vehículo.
  * **Modo ECO:** Vista amplia en autopista (>70 km/h y maniobras lejanas) y zoom de precisión en ciudad.
  * **Modo RUTA:** Vista panorámica global de todo el trazado.
* **Indicaciones Paso a Paso (Turn-by-Turn):**
  * Flechas de maniobra dinámicas, cajetines de salida de rotondas numeradas y nombres de vías en formato señal de tráfico.
  * **Guiado por voz TTS** configurable (anuncio anticipado a 2 km, 500 m y en la maniobra).
  * Minimapa de previsualización de intersecciones complejas.
* **Modo Free Drive (HUD):** Si conduces sin ruta fijada, el sistema entra en modo crucero mostrando brújula digital, altímetro, velocímetro, velocidad media/máxima y gráfica de desnivel en tiempo real.
* **Detección y Recálculo de Desvíos:** Detección de abandono de ruta mediante *point-to-line distance* (Turf.js) con ventana deslizante y recálculo automático o selección de saltos de etapa.

---

## 🚨 Radares y Alertas en Tiempo Real

* **Base de Datos de Radares:** Integración de base de datos completa de radares (fijos, semáforo, tramo y puntos de control) clasificados en un índice espacial por cuadrículas (*Spatial Indexing*).
* **Radares en Ruta:** Filtrado selectivo que solo activa avisos acústicos/visuales para radares que coincidan con la trayectoria de tu viaje.
* **Aviso de Velocidad:** Comparativa instantánea entre la velocidad real del coche y el límite del radar detectado (aviso en rojo/verde).
* **Alertas de Incidencias Comunitarias:** Notificación y reporte de accidentes, atascos, obras, vehículos averiados o controles en tiempo real compartidos con otros usuarios de la comunidad.
* **Creación Rápida:** Botón dedicado para registrar un nuevo radar o incidencia en las coordenadas exactas del coche en un clic.

---

## 🔋 Autonomía y Puntos de Recarga (VE)

* **Calculador de Radio de Acción Físico:**
  Genera un polígono isócrono de autonomía real teniendo en cuenta:
  * Capacidad neta de la batería (kWh), SoC (%) actual y reserva deseada.
  * Coeficiente de consumo medio ($Wh/km$) y factor de tortuosidad de las carreteras.
  * **Impacto del relieve:** Penalización energética por desnivel positivo y ganancia por frenada regenerativa.
  * **Impacto meteorológico en vivo (`wttr.in`):** Penalización térmica por frío/calor extremo, precipitación y resistencia del viento relativo (componente de viento en contra/favor).
* **Integración OpenChargeMap (PDRs):**
  * Búsqueda en ruta, en radio circular o en la vista actual del mapa.
  * Filtro por rango de potencia (kW), red/operador (Iberdrola, Tesla Superchargers, Ionity, Zunder, etc.) y disponibilidad.
  * Detección automática del cargador más económico por tramo de potencia.
  * Inserción inteligente del punto de recarga como etapa intermedia en la ruta activa.

---

## 🤖 Asistente de Rutas IA

Impulsado por **Google Gemini** con llamadas a funciones nativas (*Tool Calling / Function Calling*):

* **Planificador Conversacional:** Pide rutas mediante lenguaje natural o comandos de voz (ej. *"Llévame a los 3 mejores miradores de la sierra y busca un sitio para comer cerca"*).
* **Búsqueda e Inserción:** El asistente consulta Google Places API para extraer coordenadas precisas, horarios y valoraciones, estructurando un archivo JSON que se carga directamente en el mapa.
* **Consultas de Clima y Negocios:** Capacidad para resolver dudas sobre el tiempo en destino o información de servicios sobre la marcha.

---

## 🖥️ Optimizaciones para el Navegador Tesla (MCU)

El navegador integrado de Tesla presenta limitaciones de memoria y cambios de resolución que han sido resueltos a nivel de arquitectura:

* **Corrección de Escala:** Zoom inverso automático (`0.6536`) para compensar la resolución nativa de `1254x784` / `1918x1200` en la pantalla principal de botones, y conmutación a escala `1.0` nativa al abrir el mapa a pantalla completa.
* **Gestor de Memoria Watchdog:** Monitoreo constante del *JS Heap*. Cuando el uso de memoria excede el umbral seguro, el sistema realiza una **recarga controlada sin parpadeo**:
  1. Captura una instantánea del mapa con `html2canvas`.
  2. Guarda el progreso milimétrico del viaje, gráficas, velocidad y waypoints en `localStorage`.
  3. Muestra la captura estática de fondo mientras el navegador reinicia el hilo JS en 50 ms.
  4. Restaura la navegación exactamente en el mismo metro y segundo sin que el conductor perciba la recarga.
* **Planificador de Tareas por Prioridad:** Las tareas críticas (actualización del marcador del coche y cálculo de maniobra) operan a alta frecuencia, mientras que el monitoreo de alertas o gráficas se espacian temporalmente para ahorrar CPU.

---

## 📱 Modo Compañero (Sincronización Móvil ↔ Coche)

* Configura tu usuario principal en el coche (ej. `JUAN`).
* Abre la web en tu teléfono móvil e inicia sesión como `JUAN@MOVIL`.
* Planifica rutas, guarda ubicaciones o añade recordatorios cómodamente desde el sofá; se guardarán en Firebase y se sincronizarán automáticamente en el coche al iniciar sesión.

---

## 🛠️ Tecnologías Utilizadas

* **Frontend:** HTML5, CSS3 Avanzado, JavaScript Moderno (Vanilla JS ES6+).
* **Motor Cartográfico:** [Mapbox GL JS v3.26.0](https://www.mapbox.com/).
* **Cálculo Geoespacial:** [Turf.js v6.5.0](https://turfjs.org/).
* **Gráficas & Telemetría:** [Chart.js v3.9.1](https://www.chartjs.org/).
* **Base de Datos & Backend:** [Firebase Firestore v11.9.1](https://firebase.google.com/).
* **Motor de IA:** [Google Gemini API](https://ai.google.dev/).
* **Servicios de Rutas:** OSRM (Open Source Routing Machine) y Mapbox Directions API con conmutación por fallo (*fallback*).
* **Información Meteorológica:** [wttr.in](https://wttr.in/) y [Ventusky](https://www.ventusky.com/).
* **Guía Interactiva:** [Driver.js v1.0.1](https://driverjs.com/).

---

⚠️ Descargo de Responsabilidad

Esta aplicación es una herramienta de apoyo a la planificación y entretenimiento
y no sustituye la atención del conductor ni los sistemas oficiales de navegación
y seguridad del vehículo. El usuario asume toda la responsabilidad durante la
conducción. Respeta siempre las normas de tráfico y no manipules la pantalla
mientras el vehículo esté en movimiento.
