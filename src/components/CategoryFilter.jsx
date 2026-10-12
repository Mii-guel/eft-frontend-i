// CategoryFilter.jsx
// Botones de filtro por categoría (Bootstrap 5: btn-group responsivo).
// Componente controlado: recibe la categoría activa y la lista de
// categorías disponibles por props, y avisa al padre (App.jsx) cuando
// cambia la selección. No tiene estado propio.

function CategoryFilter({ categorias, categoriaActiva, onCambiarCategoria }) {
  return (
    <div className="category-filter mb-4" role="group" aria-label="Filtrar por categoría">
      <button
        className={`btn btn-filter ${categoriaActiva === 'Todas' ? 'active' : ''}`}
        onClick={() => onCambiarCategoria('Todas')}
      >
        Todas
      </button>
      {categorias.map((categoria) => (
        <button
          key={categoria}
          className={`btn btn-filter ${categoriaActiva === categoria ? 'active' : ''}`}
          onClick={() => onCambiarCategoria(categoria)}
        >
          {categoria}
        </button>
      ))}
    </div>
  );
}

export default CategoryFilter;
