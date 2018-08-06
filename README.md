# App React Native + NFC + Firebase w/Auth

App que utiliza el NFC de dispositivo Android.
Funciona como lector de tags, tras la interacción con el tag, se comunica en tiempo real con Firebase enviando la lectura.

## Tabla de contenidos
- [App React Native + NFC + Firebase w/Auth](#app-react-native--nfc--firebase-wauth)
  - [Tabla de contenidos](#tabla-de-contenidos)
  - [Pendientes del proyecto](#pendientes-del-proyecto)
    - [Completar Git](#completar-git)
    - [Ordenar arquitectura de componentes](#ordenar-arquitectura-de-componentes)
    - [Persistencia offline](#persistencia-offline)
    - [Desarrollar observaciones](#desarrollar-observaciones)
    - [Desarrollo IOs](#desarrollo-ios)
  - [Bugs](#bugs)

## Pendientes del proyecto

### Completar Git

Esto es para tener lo antes posible el proyecto respaldado, pero la intención es tener el repositorio completo y abierto.
Se debe subir build de Android.
Para importar proyecto se debe reconstruir el build de android, implementando lo necesario para el nfc manager y firebase.

### Ordenar arquitectura de componentes

### Persistencia offline

Desarrollar persistencia de datos cuando no hay conexión. Se almacenan en Redux Persist de manera local y se envian al retorno de conexión, posteriormente al envio se limpian.

### Desarrollar observaciones

Incluir capacidad de junto al leer tag, enviar observaciones asociadas a la lectura del tag.

### Desarrollo IOs

Por ahora el proyecto no requiere desarrollo IOs, pero se debe contemplar para futuro.

## Bugs
