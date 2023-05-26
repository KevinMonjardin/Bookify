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
        <div className="search-container">
          <form action="#" method="get">
            <input type="text" name="search" placeholder="Buscar..." />
            <button type="submit">
              <i className="fa fa-search"></i>
            </button>
          </form>
        </div>
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
            <Link to="/aventura">Matematicas</Link>
          </li>
          <li>
            <a href="login.html">Ciencia Ficción</a>
          </li>
          <li>
            <a href="login.html">Cuentos de Hadas</a>
          </li>
          <li>
            <a href="login.html">Triller</a>
          </li>
          <div className="adshow">
            <h1>Admin</h1>
            <ul>
              <li>
                <Add />
              </li>
              <li>
                <Delete />
              </li>
            </ul>
          </div>
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
