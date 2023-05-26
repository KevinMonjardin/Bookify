import "../styles/login.css";
import imagen from "../img/reg.svg";
import React from "react";
import { Link } from "react-router-dom";
import pb from "../lib/pocketbase";
import { set, useForm } from "react-hook-form";
import { useState } from "react";

const Register = () => {
  const { register, handleSubmit } = useForm();
  const [isLoading, setIsLoading] = useState(false);

  async function reg(data) {
    setIsLoading(true);

    if (data.password !== data.repassword) {
      alert("Las contraseñas no coinciden");
      setIsLoading(false);
      return;
    }
    const llenado = {
      email: data.email,
      emailVisibility: true,
      password: data.password,
      passwordConfirm: data.repassword,
      name: data.name,
    };

    try {
      const record = await pb.collection("users").create(llenado);
    } catch (error) {
      alert("El correo ya está registrado o no es válido");
    }
    setIsLoading(false);
  }

  return (
    <>
      <div className="contcont">
        <div className="container">
          <img src={imagen} alt="Logo" />
          <form onSubmit={handleSubmit(reg)}>
            <h2>Registro</h2>
            <label htmlFor="email">Correo electrónico:</label>
            <input
              type="email"
              id="email"
              name="email"
              required
              {...register("email")}
            />{" "}
            <br />
            <label htmlFor="username">Usuario:</label>
            <input
              type="text"
              id="username"
              name="username"
              required
              {...register("name")}
            />
            <br />
            <label htmlFor="password">Contraseña:</label>
            <input
              type="password"
              id="password"
              name="password"
              required
              {...register("password")}
            />
            <label htmlFor="repassword">Confirmar contraseña:</label>
            <input
              type="password"
              id="repassword"
              name="repassword"
              required
              {...register("repassword")}
            />
            <br />
            <button type="submit">Registrar</button>
            <Link to="/">Volver al inicio de sesión</Link>
          </form>
        </div>
      </div>
    </>
  );
};

export default Register;
