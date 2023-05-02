import { useState } from "react";
import imagen from "../img/barra-de-menus (1).png";
import imagen2 from "../img/borrar.png";
import React from 'react';
import "../styles/sidebar.css"
import { Add } from "./add";
import { Delete } from "./delete";


export const Sidebar = () => {
  const [isOpensidebar, setIsOpensidebar] = useState(false);
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

      <div className={`sidebar ${isOpensidebar ? "sidebar-open":''}`}>
        <ul>
          <h1>Bookify</h1>
          <li>
            <a href="#">Inicio</a>
          </li>
          </ul>
          <h1>Categorías</h1>
          <ul>
          <li>
            <a href="login.html">Aventura</a>
          </li>
          <li>
            <a href="login.html">Ciencia Ficción</a>
          </li>
          <li>
            <a href="login.html">Cuentos de Hadas</a>
          </li>
          <li>
            <a href="login.html">Cyberpunk</a>
          </li>
          <li>
            <a href="login.html">Políaca</a>
          </li>
          <li>
            <a href="login.html">Triller</a>
          </li>
          <h1>Admin</h1>
          <ul>
          <li>
            <Add />
          </li>
          <li>
            <Delete />
          </li>
          </ul>
        </ul>
            <a href="login.html" id="sign-out">Cerrar Sesión</a>
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
