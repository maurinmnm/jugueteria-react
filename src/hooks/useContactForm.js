import { useState } from "react";

function useContactForm() {
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    telefono: "",
    motivo: "",
    contacto: "",
    mensaje: ""
  });

  function handleChange(event) {
    const { name, value } = event.target;

    setFormData({
      ...formData,
      [name]: value
    });

    console.log("Campo modificado:", name, value);
  }

  function handleSubmit(event) {
    event.preventDefault();

    console.log("Formulario enviado:", formData);

    handleReset();
  }

  function handleReset() {
    setFormData({
      nombre: "",
      email: "",
      telefono: "",
      motivo: "",
      contacto: "",
      mensaje: ""
    });

    console.log("Formulario reiniciado");
  }

  return {
    formData,
    handleChange,
    handleSubmit,
    handleReset
  };
}

export default useContactForm;