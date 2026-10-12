# ByteVault — Tienda de Videojuegos Online

Evaluación Final Transversal — Desarrollo Frontend I (PFY2201), Semana 9.

Sitio web de una tienda de videojuegos online, construido con **React +
Bootstrap 5**, que integra HTML semántico, CSS personalizado, JavaScript
(objeto de datos, generación dinámica del DOM, filtrado y validación de
formularios) y componentes React con `state` y `props`.

## Caso que resuelve

Una tienda de videojuegos necesita un sitio con:
- Página de inicio con los videojuegos disponibles.
- Filtro de videojuegos por categoría.
- Formulario de contacto validado.

## Funcionalidades

- **Catálogo dinámico**: las tarjetas de cada videojuego (imagen, nombre,
  precio, descripción) se generan recorriendo un arreglo de objetos en
  JavaScript (`src/data/games.js`).
- **Filtro por categoría**: botones que muestran solo los juegos de la
  categoría elegida (Acción, RPG, Retro, Deportes, Indie, o todas).
- **Agregar / eliminar videojuegos**: un formulario permite agregar un
  juego nuevo al catálogo, y cada tarjeta tiene un botón para eliminarlo.
  Ambas acciones actualizan el `state` de React en tiempo real.
- **Formulario de contacto**: campos de nombre, correo y mensaje, con
  validación antes de "enviar" (campos vacíos, formato de correo,
  longitud mínima del mensaje), mostrando errores claros por campo.
- **Totalmente responsivo**: navbar colapsable, catálogo en grid que se
  reorganiza en móvil/tablet/escritorio (Bootstrap 5 + Flexbox).

## Estructura del proyecto

```
bytevault-eft/
├─ public/
│  └─ img/                  # Imágenes de los videojuegos
├─ src/
│  ├─ data/
│  │  └─ games.js           # Objeto (array) de JavaScript con los videojuegos
│  ├─ components/
│  │  ├─ Navbar.jsx
│  │  ├─ CategoryFilter.jsx
│  │  ├─ GameList.jsx       # Genera dinámicamente las tarjetas
│  │  ├─ GameCard.jsx
│  │  ├─ AddGameForm.jsx    # Agrega videojuegos (useState local)
│  │  ├─ ContactForm.jsx    # Formulario con validación
│  │  └─ Footer.jsx
│  ├─ App.jsx               # Estado principal: lista de juegos y filtro activo
│  ├─ App.css
│  ├─ main.jsx
│  └─ index.css
├─ .github/workflows/deploy.yml   # Publica automáticamente en gh-pages
└─ vite.config.js
```

## Instalación y uso (en tu computador)

Requisitos: tener [Node.js](https://nodejs.org/) instalado (versión 18 o superior).

1. Descarga o clona este repositorio.
2. Abre una terminal dentro de la carpeta del proyecto.
3. Instala las dependencias:
   ```bash
   npm install
   ```
4. Levanta el servidor de desarrollo:
   ```bash
   npm run dev
   ```
5. Abre en tu navegador la dirección que indique la terminal (normalmente
   `http://localhost:5173`).

Para generar la versión de producción (los archivos finales, optimizados):
```bash
npm run build
```
Esto crea una carpeta `dist/` con el sitio listo para publicar en
cualquier hosting estático.

## Despliegue

Este proyecto se publica automáticamente en la rama `gh-pages` cada vez
que se suben cambios a la rama `main`, gracias al workflow en
`.github/workflows/deploy.yml` (GitHub Actions). No es necesario instalar
Node.js ni ejecutar ningún comando de build a mano para publicarlo:
GitHub lo hace solo.

## Tecnologías utilizadas

- **HTML5** semántico (`header`, `nav`, `main`, `section`, `footer`)
- **CSS3** personalizado + **Bootstrap 5** (grid, navbar, cards, formularios)
- **JavaScript** (objeto de datos, manipulación del DOM vía React, validación)
- **React 19** (componentes, `useState`, `props`)
- **Vite** como herramienta de build
- **GitHub Actions** para el despliegue automático en GitHub Pages
