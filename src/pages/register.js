import "../styles/login.css";
import React from "react";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <>
      <div className="contcont">
        <div className="container">
          <img
            src="https://cdn-icons-png.flaticon.com/512/3200/3200751.png"
            alt="Logo"
          />
          <form>
            <h2>Registro</h2>
            <label htmlFor="email">Correo electrónico:</label>
            <input type="email" id="email" name="email" required /> <br />
            <label htmlFor="username">Usuario:</label>
            <input type="text" id="username" name="username" required />
            <br />
            <label htmlFor="password">Contraseña:</label>
            <input type="password" id="password" name="password" required />
            <br />
            <button type="submit">Registrar</button>
            <Link to="/login">Volver al inicio de sesión</Link>
          </form>
        </div>
      </div>
    </>
  );
};

export default Register;
