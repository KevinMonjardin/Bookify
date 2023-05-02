import React from "react";
import "./styles.css";
import { Login } from "./components/login";
import { Register } from "./components/register";
import { Sidebar } from "./components/sidebar";
import { Footer } from "./components/footer";
import { LCarousel } from "./components/carousel";
import {result} from "./lib/pocketbase";
import {Add} from "./components/add";
import { Delete } from "./components/delete";

function mostrarFormulario() {
  // Obtener el contenedor modal
  var modal = document.getElementById("formulario-modal");

  // Mostrar el contenedor modal
  modal.style.display = "block";
}
function App() {
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
}

export default App;
