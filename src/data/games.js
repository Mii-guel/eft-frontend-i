// games.js
// Objeto (array de objetos) en JavaScript con la información de los
// videojuegos disponibles en la tienda: nombre, categoría, precio,
// descripción e imagen. Esta es la "fuente de datos" que los
// componentes React recorren para generar las tarjetas dinámicamente.

const games = [
  {
    id: 1,
    nombre: 'Nebula Drift',
    categoria: 'Acción',
    plataforma: 'PC · PS5',
    precio: 34990,
    imagen: 'img/nebula-drift.svg',
    descripcion: 'Carreras espaciales de alta velocidad con física orbital realista.',
  },
  {
    id: 2,
    nombre: 'Reino de Hollow',
    categoria: 'RPG',
    plataforma: 'Switch',
    precio: 27990,
    imagen: 'img/reino-hollow.svg',
    descripcion: 'RPG de fantasía oscura con un mundo abierto no lineal.',
  },
  {
    id: 3,
    nombre: 'Bastión de Acero',
    categoria: 'Acción',
    plataforma: 'PC · Xbox',
    precio: 29990,
    imagen: 'img/bastion-acero.svg',
    descripcion: 'Estrategia táctica por turnos con mechas modulares.',
  },
  {
    id: 4,
    nombre: 'Pixel Runner Collection',
    categoria: 'Retro',
    plataforma: 'Consola clásica',
    precio: 19990,
    imagen: 'img/pixel-runner.svg',
    descripcion: 'Antología de 12 plataformeros de los 90 remasterizados.',
  },
  {
    id: 5,
    nombre: 'Marea Carmesí',
    categoria: 'RPG',
    plataforma: 'PS5',
    precio: 32990,
    imagen: 'img/marea-carmesi.svg',
    descripcion: 'Aventura narrativa submarina con exploración libre.',
  },
  {
    id: 6,
    nombre: 'Circuito Fantasma',
    categoria: 'Acción',
    plataforma: 'PC',
    precio: 24990,
    imagen: 'img/circuito-fantasma.svg',
    descripcion: 'Hackea, corre y escapa en una metrópolis cyberpunk.',
  },
  {
    id: 7,
    nombre: 'Liga Estelar',
    categoria: 'Deportes',
    plataforma: 'PS5 · Xbox',
    precio: 22990,
    imagen: 'img/liga-estelar.svg',
    descripcion: 'Torneo intergaláctico de fútbol de gravedad cero, 4 jugadores.',
  },
  {
    id: 8,
    nombre: 'Jardín Eterno',
    categoria: 'Indie',
    plataforma: 'Switch · PC',
    precio: 14990,
    imagen: 'img/jardin-eterno.svg',
    descripcion: 'Simulador cooperativo de granja mágica, hecho por un estudio de 3 personas.',
  },
];

export default games;
