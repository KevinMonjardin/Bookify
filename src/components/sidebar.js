import { useState } from "react";
import imagen from "../img/barra-de-menus (1).png";
import imagen2 from "../img/borrar.png";
import React from "react";
import "../styles/sidebar.css";
import { Add } from "./add";
import { Delete } from "./delete";
import { Link } from "react-router-dom";
import pb from "../lib/pocketbase";

export const Sidebar = () => {
  const [isOpensidebar, setIsOpensidebar] = useState(false);

  function salir() {
    pb.authStore.clear();
  }

  if (pb.authStore.isValid === false) {
    window.location.href = "/error404";
  }

  return (
    <body className="page-body">
      <div className="header">
        <img
          id="open-sidebar"
          src={imagen}
          alt="Abrir sidebar"
          onClick={() => {
            setIsOpensidebar(true);
          }}
        />
        <h1>Bookify</h1>
      </div>

      <div className={`sidebar ${isOpensidebar ? "sidebar-open" : ""}`}>
        <ul>
          <h1>Hola {pb.authStore.model.name}!</h1>
          <li>
            <a href="/home">Inicio</a>
          </li>
        </ul>
        <h1>Categorías</h1>
        <ul>
          <li>
            <a href="/matematicas">Matemáticas</a>
          </li>
          <li>
            <a href="/programacion">Programación</a>
          </li>
          <li>
            <a href="/fisica">Física</a>
          </li>
          <li>
            <a href="/electronica">Electrónica</a>
          </li>
        </ul>
        <br />
        <Link onClick={salir} to="/">
          Cerrar sesion
        </Link>
        <img
          id="close-sidebar"
          src={imagen2}
          alt="Cerrar sidebar"
          onClick={() => {
            setIsOpensidebar(false);
          }}
        />
      </div>
    </body>
  );
};
