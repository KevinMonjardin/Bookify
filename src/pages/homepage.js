import React from "react";
import "../styles.css";
import { Sidebar } from "../components/sidebar";
import { Footer } from "../components/footer";
import { LCarousel } from "../components/carousel";
import { result } from "../lib/pocketbase";

function mostrarFormulario() {
  // Obtener el contenedor modal
  var modal = document.getElementById("formulario-modal");
  var libro = document.getElementById("libro-modal");
  // Mostrar el contenedor modal
  modal.style.display = "block";
  libro.style.display = "block";
}

const Homepage = () => {
  return (
    <div>
      <Sidebar />
      <div className="main">
        <div className="main sidebar-closed">
          <h2 className="lib-des">Libros destacados</h2>
          <LCarousel />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Homepage;
