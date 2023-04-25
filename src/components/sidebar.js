import { useState } from "react";
import imagen from "../img/iconomenu.png";
import imagen2 from "../img/cerrarmenu.png";

export const Sidebar = () => {
  const [isOpensidebar, setIsOpensidebar] = useState(false);
  return (
    <>
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

      <div className={`sidebar ${isOpensidebar ? "sidebar-open":''}`}>
        <ul>
          <h1>Bookify</h1>
          <li>
            <a href="#">Inicio</a>
          </li>
          <li>
            <a href="categories.html">Categorías</a>
          </li>
          <li>
            <a href="login.html">Cerrar sesión</a>
          </li>
          <li>
            <form action="#" method="get">
              <input type="text" name="search" placeholder="Buscar..." />
              <button type="submit">
                <i className="fa fa-search"></i>
              </button>
            </form>
          </li>
        </ul>
        <img
          id="close-sidebar"
          src={imagen2}
          alt="Cerrar sidebar"
          onClick={() => {
            setIsOpensidebar(false);
          }}
        />
      </div>
    </>
  );
};
