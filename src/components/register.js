import '../styles/login.css';
export const Register = () => {
    return (
        <>
          <div className="container">
            <img src="./assets/img/logo.jpg" alt="Logo" />
            <form>
              <h2>Registro</h2>
              <label htmlFor="email">Correo electrónico:</label>
              <input type="email" id="email" name="email" required /> <br />
              <label htmlFor="username">Usuario:</label>
              <input type="text" id="username" name="username" required /><br />
              <label htmlFor="password">Contraseña:</label>
              <input type="password" id="password" name="password" required /><br />
              <button type="submit">Registrar</button>
              <a href="login.html">Volver al inicio de sesión</a>
            </form>
          </div>
        </>
      );
}