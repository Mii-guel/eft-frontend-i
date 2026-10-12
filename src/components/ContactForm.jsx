// ContactForm.jsx
// Formulario de contacto con nombre, email y mensaje. Usa useState
// para los valores y para los errores de validación. Valida los
// datos ANTES de "enviar" (en este proyecto educativo no hay backend,
// así que el envío se simula) y muestra mensajes de error claros,
// campo por campo, usando renderizado condicional.

import { useState } from 'react';

function ContactForm() {
  const [datos, setDatos] = useState({ nombre: '', email: '', mensaje: '' });
  const [errores, setErrores] = useState({});
  const [enviado, setEnviado] = useState(false);

  function manejarCambio(e) {
    setDatos({ ...datos, [e.target.name]: e.target.value });
  }

  // Valida el formulario completo y devuelve un objeto con los
  // errores encontrados (vacío si todo está correcto).
  function validar(datos) {
    const nuevosErrores = {};

    if (!datos.nombre.trim()) {
      nuevosErrores.nombre = 'Ingresa tu nombre.';
    }

    const emailValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(datos.email);
    if (!datos.email.trim()) {
      nuevosErrores.email = 'Ingresa tu correo electrónico.';
    } else if (!emailValido) {
      nuevosErrores.email = 'Ese correo no parece válido (ej: nombre@dominio.com).';
    }

    if (!datos.mensaje.trim()) {
      nuevosErrores.mensaje = 'Escribe tu mensaje.';
    } else if (datos.mensaje.trim().length < 10) {
      nuevosErrores.mensaje = 'El mensaje debe tener al menos 10 caracteres.';
    }

    return nuevosErrores;
  }

  function manejarEnvio(e) {
    e.preventDefault();
    const nuevosErrores = validar(datos);
    setErrores(nuevosErrores);

    if (Object.keys(nuevosErrores).length === 0) {
      // No hay backend real: simulamos el envío exitoso.
      setEnviado(true);
      setDatos({ nombre: '', email: '', mensaje: '' });
      setTimeout(() => setEnviado(false), 4000);
    } else {
      setEnviado(false);
    }
  }

  return (
    <form className="contact-form" onSubmit={manejarEnvio} noValidate>
      <div className="mb-3">
        <label htmlFor="nombre" className="form-label">Nombre</label>
        <input
          type="text"
          id="nombre"
          name="nombre"
          className={`form-control ${errores.nombre ? 'is-invalid' : ''}`}
          value={datos.nombre}
          onChange={manejarCambio}
        />
        {/* Renderizado condicional: solo aparece si hay error en este campo */}
        {errores.nombre && <div className="invalid-feedback">{errores.nombre}</div>}
      </div>

      <div className="mb-3">
        <label htmlFor="email" className="form-label">Correo electrónico</label>
        <input
          type="email"
          id="email"
          name="email"
          className={`form-control ${errores.email ? 'is-invalid' : ''}`}
          value={datos.email}
          onChange={manejarCambio}
        />
        {errores.email && <div className="invalid-feedback">{errores.email}</div>}
      </div>

      <div className="mb-3">
        <label htmlFor="mensaje" className="form-label">Mensaje</label>
        <textarea
          id="mensaje"
          name="mensaje"
          rows="4"
          className={`form-control ${errores.mensaje ? 'is-invalid' : ''}`}
          value={datos.mensaje}
          onChange={manejarCambio}
        />
        {errores.mensaje && <div className="invalid-feedback">{errores.mensaje}</div>}
      </div>

      <button type="submit" className="btn btn-accent">Enviar mensaje</button>

      {/* Renderizado condicional: mensaje de confirmación tras un envío válido */}
      {enviado && (
        <p className="form-feedback form-success mt-3">
          ✓ ¡Gracias! Tu mensaje fue enviado correctamente.
        </p>
      )}
    </form>
  );
}

export default ContactForm;
