import PropTypes from "prop-types";
import Navbar from "./Navbar";
import Footer from "./Footer";

function Layout({ children }) {
  return (
    <>
      {/*estructura general que se mantiene en todas las páginas*/}
      <Navbar />

      <main>{children}</main>

      <Footer />
    </>
  );
}

//validamos que Layout reciba contenido como prop//
Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout;