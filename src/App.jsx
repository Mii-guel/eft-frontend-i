// App.jsx
// Componente raíz de ByteVault (EFT — Semana 9).
// Aquí vive el estado principal de la aplicación: la lista de
// videojuegos (con capacidad de agregar/eliminar vía state) y la
// categoría activa del filtro. Los demás componentes reciben estos
// datos por props, y avisan de vuelta a través de funciones también
// pasadas por props (patrón "estado arriba, acciones abajo").

import { useState } from 'react';
import Navbar from './components/Navbar';
import CategoryFilter from './components/CategoryFilter';
import GameList from './components/GameList';
import AddGameForm from './components/AddGameForm';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import gamesIniciales from './data/games';
import './App.css';

function App() {
  // Estado: lista de videojuegos. Se inicializa con el objeto de
  // datos de data/games.js, y se puede modificar (agregar/eliminar)
  // sin tocar ese archivo original.
  const [games, setGames] = useState(gamesIniciales);

  // Estado: categoría actualmente seleccionada en el filtro.
  const [categoriaActiva, setCategoriaActiva] = useState('Todas');

  // Estado: controla qué sección se resalta en el navbar (solo visual).
  const [seccionActiva, setSeccionActiva] = useState('inicio');

  // Lista de categorías únicas, calculada a partir de los juegos
  // actuales (si se agrega un juego de una categoría nueva, aparece
  // automáticamente en el filtro).
  const categorias = [...new Set(games.map((g) => g.categoria))];

  // Filtra los juegos según la categoría activa. Si es "Todas", se
  // muestran todos sin filtrar.
  const gamesFiltrados = categoriaActiva === 'Todas'
    ? games
    : games.filter((g) => g.categoria === categoriaActiva);

  function agregarGame(nuevoGame) {
    setGames([...games, nuevoGame]);
  }

  function eliminarGame(id) {
    setGames(games.filter((g) => g.id !== id));
  }

  function navegarA(idSeccion) {
    setSeccionActiva(idSeccion);
    const el = document.getElementById(idSeccion);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  }

  return (
    <>
      <Navbar seccionActiva={seccionActiva} onNavegar={navegarA} />

      <header id="inicio" className="bv-hero text-center">
        <div className="container py-5">
          <p className="eyebrow">Tienda de videojuegos online</p>
          <h1 className="display-6 fw-bold mb-3">Inserta el cartucho. Empieza la partida.</h1>
          <p className="lead text-muted-light mx-auto" style={{ maxWidth: '560px' }}>
            Explora el catálogo, filtra por categoría y contáctanos si tienes dudas.
          </p>
        </div>
      </header>

      <main>
        <section id="catalogo" className="container py-5">
          <div className="d-flex flex-wrap justify-content-between align-items-end gap-3 mb-3">
            <h2 className="h4 fw-bold mb-0">Catálogo</h2>
            <p className="text-muted-light small mb-0">
              {gamesFiltrados.length} juego(s) encontrados
            </p>
          </div>

          <CategoryFilter
            categorias={categorias}
            categoriaActiva={categoriaActiva}
            onCambiarCategoria={setCategoriaActiva}
          />

          <GameList games={gamesFiltrados} onEliminar={eliminarGame} />

          <div className="mt-5 pt-4 border-top border-secondary">
            <AddGameForm onAgregar={agregarGame} />
          </div>
        </section>

        <section id="contacto" className="container py-5">
          <h2 className="h4 fw-bold mb-4">Contacto</h2>
          <div className="row">
            <div className="col-12 col-lg-7">
              <ContactForm />
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

export default App;
