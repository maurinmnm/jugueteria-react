import { useState } from "react";

function useContactForm() {
  //estado que almacena todos los datos ingresados en el formulario//
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    telefono: "",
    motivo: "",
    contacto: "",
    mensaje: ""
  });

  //actualiza el estado cada vez que el usuario modifica un campo//
  function handleChange(event) {
    const { name, value } = event.target;

    setFormData({
      ...formData,
      [name]: value
    });

    console.log("Campo modificado:", name, value);
  }

  //procesamiento del envío sin recargar la página//
  function handleSubmit(event) {
    event.preventDefault();

    console.log("Formulario enviado:", formData);

    handleReset();
  }

  //restablece todos los campos del formulario//
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

  //devuelve el estado y las funciones para utilizarlas en el componente//
  return {
    formData,
    handleChange,
    handleSubmit,
    handleReset
  };
}

export default useContactForm;