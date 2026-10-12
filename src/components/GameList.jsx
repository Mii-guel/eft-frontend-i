// GameList.jsx
// Genera dinámicamente las tarjetas de videojuegos a partir del
// arreglo recibido por props (ya filtrado por categoría en App.jsx).
// Incluye renderizado condicional: mensaje cuando no hay resultados.

import GameCard from './GameCard';

function GameList({ games, onEliminar }) {
  if (games.length === 0) {
    return (
      <p className="text-center text-muted-light py-5">
        No hay videojuegos en esta categoría (o ya los eliminaste todos).
      </p>
    );
  }

  return (
    <div className="row g-4">
      {games.map((game) => (
        <GameCard key={game.id} game={game} onEliminar={onEliminar} />
      ))}
    </div>
  );
}

export default GameList;
