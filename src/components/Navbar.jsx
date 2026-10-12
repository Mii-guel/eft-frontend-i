// Navbar.jsx
// Barra de navegación con Bootstrap 5. Es un componente "tonto"
// (no maneja estado propio): solo recibe por props el nombre de la
// sección activa y una función para cambiarla, para que un clic en
// "Inicio" o "Contacto" mueva a la persona entre secciones de la
// página sin recargarla.

function Navbar({ seccionActiva, onNavegar }) {
  const enlaces = [
    { id: 'inicio', texto: 'Inicio' },
    { id: 'catalogo', texto: 'Catálogo' },
    { id: 'contacto', texto: 'Contacto' },
  ];

  return (
    <nav className="navbar navbar-expand-lg navbar-dark sticky-top bv-navbar">
      <div className="container">
        <a
          className="navbar-brand fw-bold"
          href="#inicio"
          onClick={(e) => { e.preventDefault(); onNavegar('inicio'); }}
        >
          Byte<span className="text-accent">Vault</span>
        </a>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navMenu"
          aria-label="Abrir menú"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navMenu">
          <ul className="navbar-nav ms-auto">
            {enlaces.map((enlace) => (
              <li className="nav-item" key={enlace.id}>
                <a
                  href={`#${enlace.id}`}
                  className={`nav-link ${seccionActiva === enlace.id ? 'active' : ''}`}
                  onClick={(e) => { e.preventDefault(); onNavegar(enlace.id); }}
                >
                  {enlace.texto}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
