// GameCard.jsx
// Tarjeta individual de un videojuego (Bootstrap 5 "card"). Recibe el
// videojuego completo por props y una función para eliminarlo del
// catálogo (manejo de estado vía props, sin estado propio aquí).

function GameCard({ game, onEliminar }) {
  return (
    <div className="col-12 col-sm-6 col-lg-4 col-xl-3">
      <article className="card h-100 bv-card">
        <img src={game.imagen} className="card-img-top" alt={game.nombre} />
        <div className="card-body d-flex flex-column">
          <span className="badge bv-badge mb-2 align-self-start">{game.categoria}</span>
          <h3 className="h6 card-title">{game.nombre}</h3>
          <p className="card-text small text-muted-light flex-grow-1">{game.descripcion}</p>
          <p className="small text-accent-2 mb-2">{game.plataforma}</p>
          <div className="d-flex justify-content-between align-items-center">
            <span className="fw-bold text-accent-3">
              ${game.precio.toLocaleString('es-CL')}
            </span>
            <button
              className="btn btn-sm btn-outline-danger"
              onClick={() => onEliminar(game.id)}
              aria-label={`Eliminar ${game.nombre} del catálogo`}
            >
              Eliminar
            </button>
          </div>
        </div>
      </article>
    </div>
  );
}

export default GameCard;
