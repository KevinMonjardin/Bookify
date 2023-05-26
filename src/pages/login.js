import React from "react";
import "../styles/login.css";
import imagen from "../img/login.svg";
import { Link } from "react-router-dom";
import pb from "../lib/pocketbase";
import { set, useForm } from "react-hook-form";
import { useState } from "react";

const Login = () => {
  const { register, handleSubmit } = useForm();
  const [isLoading, setIsLoading] = useState(false);

  async function entrar(data) {
    setIsLoading(true);
    try {
      const authData = await pb
        .collection("users")
        .authWithPassword(data.email, data.password);
    } catch (error) {
      alert("Alguno de los campos es incorrecto");
    }
    setIsLoading(false);
  }

  if (pb.authStore.isValid) {
    window.location.href = "/home";
  }

  return (
    <>
      <div className="contcont">
        <div className="container">
          <img src={imagen} alt="logo" className="logo" />
          <form onSubmit={handleSubmit(entrar)}>
            <h2>Iniciar sesión</h2>
            <label htmlFor="username">Email </label>
            <input
              type="email"
              id="username"
              name="username"
              placeholder="Correo electrónico"
              required
              {...register("email")}
            />
            <label htmlFor="password">Contraseña </label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Contraseña"
              required
              {...register("password")}
            />
            <br />
            <br />
            <button type="submit">Iniciar sesión</button>
            <Link to="/register">Registrarse</Link>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
