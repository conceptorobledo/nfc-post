# App React Native + NFC + Firebase w/Auth

App que utiliza el NFC de dispositivo Android.
Funciona como lector de tags, tras la interacción con el tag, se comunica en tiempo real con Firebase enviando la lectura.

## Tabla de contenidos

* [Pendientes del proyecto](#pendientes-del-proyecto)
  * [Completar Git](#completar-git)
  * [Queue Firebase offline](#queue-firebase-offline)
  * [Desarrollar autentificación completa](#desarrollar-autentificacion-completo)
  * [Desarrollo de observaciones](#desarrollo-de-observaciones)
  * [Desarrollo IOs](#desarrollo-IOs)
* [Bugs](#bugs)
  * [Lectura de tag vacío](#lectura-de-tag-vacio)

## Pendientes del proyecto

### Completar Git

Esto es para tener lo antes posible el proyecto respaldado, pero la intención es tener el repositorio completo y abierto.
Se debe subir build de Android.
Para importar proyecto se debe reconstruir el build de android, implementando lo necesario para el nfc manager y firebase.

### Ordenar arquitectura de componentes

### Queue Firebase offline

Desarrollar funcionalidad para que en caso de no haber conexión a internet cuando se deba producir el envio del tag, dejarlo pendiente hasta tener conexión.

### Desarrollar autentificación completa

Crear flujo para login y logout.

### Desarrollar observaciones

Incluir capacidad de junto al leer tag, enviar observaciones asociadas a la lectura del tag.

### Desarrollo IOs

Por ahora el proyecto no requiere desarrollo IOs, pero se debe contemplar para futuro.

## Bugs

### Lectura de tag vacío

Hay ocasiones que el lector lee como tag vacío. Temporalmente al leerse el tag como vacío, aplicación solicita volver a leer el tag.
