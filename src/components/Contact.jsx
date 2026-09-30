import useContactForm from "../hooks/useContactForm";

function Contact() {
  //Custom Hook para manejar el estado y las funciones del formulario//
  const {
    formData,
    handleChange,
    handleSubmit,
    handleReset
  } = useContactForm();

  return (
    <section id="contacto">
      <h2>Contacto</h2>

      <form onSubmit={handleSubmit}>
        <label htmlFor="nombre">Nombre</label>

        <input
          type="text"
          id="nombre"
          name="nombre"
          value={formData.nombre}
          onChange={handleChange}
          required
        />

        <label htmlFor="email">Email</label>

        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <label htmlFor="telefono">Teléfono</label>

        <input
          type="tel"
          id="telefono"
          name="telefono"
          value={formData.telefono}
          onChange={handleChange}
          required
        />

        <label htmlFor="motivo">Motivo de contacto</label>

        <select
          id="motivo"
          name="motivo"
          value={formData.motivo}
          onChange={handleChange}
        >
          <option value="">Seleccione una opción</option>
          <option value="Consulta">Consulta</option>
          <option value="Compra">Compra</option>
          <option value="Reclamo">Reclamo</option>
        </select>

        <p>¿Cómo desea ser contactado?</p>

        <input
          type="radio"
          id="correo"
          name="contacto"
          value="Correo electrónico"
          checked={formData.contacto === "Correo electrónico"}
          onChange={handleChange}
        />

        <label htmlFor="correo">Correo electrónico</label>

        <input
          type="radio"
          id="telefono-radio"
          name="contacto"
          value="Teléfono"
          checked={formData.contacto === "Teléfono"}
          onChange={handleChange}
        />

        <label htmlFor="telefono-radio">Teléfono</label>

        <label htmlFor="mensaje">Comentarios</label>

        <textarea
          id="mensaje"
          name="mensaje"
          value={formData.mensaje}
          onChange={handleChange}
          required
        ></textarea>

        <div className="botones-formulario">
          <button type="submit">Enviar</button>

          <button type="button" onClick={handleReset}>
            Limpiar
          </button>
        </div>
      </form>
    </section>
  );
}

export default Contact;