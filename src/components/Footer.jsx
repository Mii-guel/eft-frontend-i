// Footer.jsx
// Pie de página simple con información de contacto y redes sociales.
// Componente de presentación puro, sin props ni estado.

function Footer() {
  return (
    <footer className="bv-footer pt-5 pb-4">
      <div className="container">
        <div className="row gy-4">
          <div className="col-12 col-md-4">
            <p className="navbar-brand fw-bold">Byte<span className="text-accent">Vault</span></p>
            <p className="text-muted-light small mb-0">
              Tienda de videojuegos online. Proyecto educativo — Evaluación Final Transversal, Desarrollo Frontend I.
            </p>
          </div>
          <div className="col-6 col-md-4">
            <h3 className="h6 text-accent-2 text-uppercase">Contacto</h3>
            <ul className="list-unstyled small text-muted-light">
              <li>contacto@bytevault.cl</li>
              <li>+56 9 1234 5678</li>
              <li>Santiago, Chile</li>
            </ul>
          </div>
          <div className="col-6 col-md-4">
            <h3 className="h6 text-accent-2 text-uppercase">Síguenos</h3>
            <ul className="list-unstyled small">
              <li><a href="#" className="footer-link">Instagram</a></li>
              <li><a href="#" className="footer-link">X / Twitter</a></li>
              <li><a href="#" className="footer-link">Discord</a></li>
            </ul>
          </div>
        </div>
        <hr className="border-secondary mt-4" />
        <p className="text-center text-muted-light small mb-0">
          &copy; 2026 ByteVault. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
