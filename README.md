# 📱 Public App Template

Este es un ejemplo de los manejadores de una aplicación de Discord utilizando `discord.js`, `dotenv`, `mongodb` y `mongoose`.

## 📖 Descripción

Este proyecto es un punto de partida para crear una aplicación de Discord. Incluye la configuración básica para manejar comandos, componentes (`botones`, `modales` y `selectores de menus`) y eventos de Discord, así como la conexión a una base de datos MongoDB.

## 📶 Instalación

Para instalar las dependencias del proyecto, ejecuta:

```
npm install

bun install 
```

## 🔩 Scripts
En el archivo `package.json` se definen los siguientes scripts:

· `start`: Ejecuta el archivo compilado index.js desde la carpeta dist.
· `build`: Instala las dependencias y compila el código TypeScript a JavaScript.
· `dev`: Ejecuta el servidor en modo desarrollo utilizando ts-node-dev.

Para ejecutar estos scripts, utiliza los siguientes comandos:
· Para iniciar la aplicación en producción:
   `npm run start || bun run start`
· Para compilar el proyecto:
   `npm run build || bun run build`
· Para iniciar la aplicación en modo desarrollo:
   `npm run dev || bun run dev`

## ⚙️ Configuración
Asegúrate de tener un archivo `.env` en la raíz del proyecto con las siguientes variables de entorno:

`DISCORD_TOKEN=tu_token_de_discord`
`MONGODB_URI=tu_uri_de_mongodb`

## 📡 Dependencias
Las principales dependencias de este proyecto son: 
· `discord.js`: ^14.15.3\n
· `dotenv`: ^16.4.5
· `mongodb`: ^6.7.0
· `mongoose`: ^8.4.1

Las dependencias de desarrollo incluyen:
· `ts-node-dev`: ^2.0.0

## 🤝 Contribución
Si deseas contribuir a este proyecto, por favor sigue los siguientes pasos:

1. Haz un fork del repositorio.
2. Crea una nueva rama (`git checkout -b feature/nueva-funcionalidad`).
3. Realiza tus cambios y haz commit (`git commit -m 'Añadir nueva funcionalidad'`).
4. Sube tus cambios (`git push origin feature/nueva-funcionalidad`).
5. Abre un Pull Request.

## ©️ Licencia
Este proyecto está bajo la Licencia ISC.

· Este `README.md` proporciona una guía completa sobre cómo instalar, configurar y ejecutar el proyecto, así como detalles sobre la estructura del proyecto y cómo contribuir.

