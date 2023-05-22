import React from "react";
import "../styles/login.css";
import { Link } from "react-router-dom";

const Login = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    // Aquí puedes agregar el código para enviar los datos del formulario a tu backend o hacer cualquier otra acción necesaria
    console.log("Datos de inicio de sesión enviados");
  };

  return (
    <>
      <div className="contcont">
        <div className="container">
          <img
            src="https://i.imgur.com/7I9Was5.png"
            alt="logo"
            className="logo"
          />
          <form onSubmit={handleSubmit}>
            <h2>Iniciar sesión</h2>
            <label htmlFor="username">Usuario </label>
            <input
              type="text"
              id="username"
              name="username"
              placeholder="Usuario"
              required
            />
            <label htmlFor="password">Contraseña </label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Contraseña"
              required
            />
            <button type="submit">Iniciar sesión</button>
            <Link to="/register">Registrarse</Link>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
