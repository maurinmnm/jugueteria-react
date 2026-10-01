# Juguetería - Proyecto React

Este proyecto consiste en la migración de un sitio web de juguetería realizado originalmente con HTML y CSS hacia una aplicación desarrollada con React.

El objetivo fue mantener el diseño y la estructura visual del proyecto original, pero reorganizando el contenido mediante componentes reutilizables y utilizando herramientas propias de React.

# Tecnologías utilizadas

* React
* Vite
* JavaScript
* HTML
* CSS
* React Router
* Bootstrap
* PropTypes

# Características del proyecto

El sitio cuenta con diferentes secciones y rutas de navegación:

* Inicio: presentación de la juguetería y acceso a los productos.
* Productos: muestra diferentes productos utilizando componentes reutilizables.
* Galería: muestra imágenes de diferentes productos.
* Contacto: formulario para ingresar datos y realizar consultas.

El formulario de contacto utiliza useState mediante un Custom Hook para controlar los datos ingresados. También cuenta con las funciones de envío y limpieza del formulario, mostrando los datos ingresados en la consola del navegador.

Se utilizó React Router para realizar la navegación entre las diferentes páginas de la aplicación.

También se utilizaron Props y PropTypes para manejar y validar la información recibida por algunos componentes.

# Estructura del proyecto

src/
assets/
components/
css/
hooks/
pages/
App.jsx
main.jsx

Los principales componentes utilizados son:

* Navbar.jsx: barra de navegación.
* Layout.jsx: estructura general de la aplicación.
* Cards.jsx: listado de productos.
* Card.jsx: tarjeta individual de producto.
* Gallery.jsx: galería de imágenes.
* GalleryItem.jsx: imagen individual de la galería.
* Contact.jsx: formulario de contacto.
* Footer.jsx: pie de página.

El Custom Hook utilizado es:

useContactForm.js: contiene la lógica y el estado utilizados por el formulario de contacto.

# Cómo ejecutar el proyecto

Para ejecutar el proyecto localmente es necesario tener Node.js instalado.

Abrir una terminal dentro de la carpeta del proyecto y ejecutar:

npm install

Luego iniciar el servidor de desarrollo con:

npm run dev

Vite mostrará en la terminal la dirección local donde se puede acceder al proyecto desde el navegador.

# Enlace de Producción

Podés acceder al proyecto funcionando en línea desde el siguiente enlace:

https://jugueteria-react-silk.vercel.app