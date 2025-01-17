<p align="center">
  <img src="public/logo.png" alt="Carnetlify Logo" width="200"/>
</p>

<h1 align="center">Carnetlify</h1>

<p align="center">
  El chat de Carnelify, desarrollada con React Native y NextJS.
</p>

## 🚀 Acerca del Proyecto

Carnetlify es una innovadora aplicación que permite a los usuarios crear, almacenar y compartir carnets digitales de manera segura y eficiente. Utilizando la potencia de React Native y Expo, ofrecemos una experiencia fluida en dispositivos iOS y Android. 

## ❓ ¿Porqué está separado de Carnetlify?

Esta parte es separada de la app de Carnetlify porque es un proyecto hecho sin Expo, falta trasladar la tecnologia y asegurarse de que no surgirán errores al pasarlo, por lo tanto se ha separado del proyecto hasta que se pueda integrar correctamente, hemos valorado que funcionen las dos partes para después juntarlas.

## ❓ ¿Porqué no hay commits?

Este repositorio está creado exclusivamente para que los profesores vean que el chat funciona verdaderamente, los commits se pueden encontrar en el repositorio oficial de Carnetlify, en la rama de Chat.
(https://github.com/idsib/carnetlify/tree/Chat)

## 🛠️ Tecnologías Utilizadas

- [React Native](https://reactnative.dev/)
- [NextJS](https://nextjs.org)
- [React Navigation](https://reactnavigation.org/)
- [Convex](https://convex.dev)
- [Clerk](https://clerk.com)
- [UploadThing](https://uploadthing.com/)
- [LiveKit (no funciona todavía)](https://cloud.livekit.io)

## 🏁 Comenzando

Para iniciar el desarrollo del chat de Carnetlify, sigue estos pasos:

1. Clona el repositorio:
   ```bash
   git clone https://github.com/jarasw/Carnetlify-Chat.git
   cd Carnetlify-Chat
   ```

2. Instala las dependencias:b
   ```bash
   npm install
   ```

3. Crea el archivo ".env.local"
   Por motivos de seguridad, GitHub no me deja subir el archivo para probar en local que la app funciona, sin él la app no funcionará, el código és el siguiente:

CONVEX_DEPLOYMENT=dev:proper-raccoon-902

EXPO_PUBLIC_CONVEX_URL=https://proper-raccoon-902.convex.cloud

NEXT_PUBLIC_CONVEX_URL=https://proper-raccoon-902.convex.cloud

NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_test_aW1tdW5lLWNvdy00My5jbGVyay5hY2NvdW50cy5kZXYk

CLERK_SECRET_KEY=sk_test_UmfDLwyv4YCEFHJjFUmH6sm7D1YAWT3tZtRhh0Zx6f

CLERK_WEBHOOK_SECRET=whsec_1f7iyDV6TJSS/9Raxb0XOk4/NDNB+K1D

UPLOADTHING_SECRET='sk_live_f9505812106c8289e9e8c6b699550613a4f71bc2f41d1a8bc2770d0b061b032d'

UPLOADTHING_APP_ID='9wu3lhv2vg'

# Live Kit
LIVEKIT_API_KEY=APIVex4p2X3e8jV
LIVEKIT_API_SECRET=5EjmJb6FHSnsetaJBwhCCFZ3b1iEoipsNBmfxjScYm1
LIVEKIT_URL=wss://carnetlify-bjuz08qo.livekit.cloud

5. Inicia la aplicación:
   ```bash
   npm run dev
   ```

## 📱 Características Principales

- Creación de carnets digitales personalizados
- Almacenamiento seguro de información
- Compartir carnets fácilmente
- Interfaz de usuario intuitiva y moderna

## 🤝 Contribuir

¡Las contribuciones son bienvenidas! Si tienes ideas para mejorar Carnetlify, no dudes en abrir un issue o enviar un pull request.

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Consulta el archivo `LICENSE` para más detalles.

## 📞 Contacto

¿Tienes preguntas? Contáctanos en [support@carnetlify.com](mailto:support@carnetlify.com)

## 🗒 Documetación

Ofrecemos la documentación principal de proyecto en este documento: 
https://docs.google.com/document/d/14onGZoTLqk29jLqCjAEOhDMk9z_AiKVfJG-uDpLeZwA/edit?usp=sharing

---

<p align="center">
  Desarrollado con ❤️ por el equipo de Carnetlify
</p>
