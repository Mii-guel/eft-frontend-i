// AddGameForm.jsx
// Formulario para agregar un nuevo videojuego al catálogo. Usa su
// propio useState para los campos del formulario (estado local) y
// llama a onAgregar (recibido por props) para actualizar la lista
// de videojuegos que vive en el componente padre (App.jsx).
// Incluye validación básica antes de agregar.

import { useState } from 'react';

const CATEGORIAS = ['Acción', 'RPG', 'Deportes', 'Retro', 'Indie'];

function AddGameForm({ onAgregar }) {
  const [form, setForm] = useState({
    nombre: '',
    categoria: CATEGORIAS[0],
    precio: '',
    descripcion: '',
  });
  const [error, setError] = useState('');
  const [exito, setExito] = useState(false);

  function manejarCambio(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function manejarEnvio(e) {
    e.preventDefault();

    // Validación básica antes de agregar el videojuego
    if (!form.nombre.trim() || !form.precio) {
      setError('Completa al menos el nombre y el precio.');
      setExito(false);
      return;
    }
    if (Number(form.precio) <= 0) {
      setError('El precio debe ser un número mayor a 0.');
      setExito(false);
      return;
    }

    const nuevoJuego = {
      id: Date.now(), // id simple único basado en la hora actual
      nombre: form.nombre.trim(),
      categoria: form.categoria,
      plataforma: 'PC',
      precio: Number(form.precio),
      imagen: 'img/nebula-drift.svg', // imagen genérica para juegos nuevos
      descripcion: form.descripcion.trim() || 'Sin descripción.',
    };

    onAgregar(nuevoJuego);
    setForm({ nombre: '', categoria: CATEGORIAS[0], precio: '', descripcion: '' });
    setError('');
    setExito(true);
    setTimeout(() => setExito(false), 2500);
  }

  return (
    <form className="add-game-form" onSubmit={manejarEnvio}>
      <h3 className="h6 text-accent-2 text-uppercase mb-3">Agregar nuevo videojuego</h3>

      <div className="row g-2">
        <div className="col-12 col-md-4">
          <input
            type="text"
            name="nombre"
            className="form-control form-control-sm"
            placeholder="Nombre del juego"
            value={form.nombre}
            onChange={manejarCambio}
          />
        </div>
        <div className="col-6 col-md-3">
          <select
            name="categoria"
            className="form-select form-select-sm"
            value={form.categoria}
            onChange={manejarCambio}
          >
            {CATEGORIAS.map((cat) => <option key={cat} value={cat}>{cat}</option>)}
          </select>
        </div>
        <div className="col-6 col-md-2">
          <input
            type="number"
            name="precio"
            className="form-control form-control-sm"
            placeholder="Precio"
            value={form.precio}
            onChange={manejarCambio}
          />
        </div>
        <div className="col-12 col-md-3">
          <button type="submit" className="btn btn-sm btn-accent w-100">
            + Agregar
          </button>
        </div>
      </div>

      {/* Renderizado condicional: mensaje de error o de éxito */}
      {error && <p className="form-feedback form-error mt-2">{error}</p>}
      {exito && <p className="form-feedback form-success mt-2">✓ Videojuego agregado al catálogo.</p>}
    </form>
  );
}

export default AddGameForm;
