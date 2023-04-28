import '../styles/login.css';

export const Login = () => {
return(
<>
<div className="container">
    <img src="https://i.imgur.com/7I9Was5.png" alt="logo" className="logo" />
    <form>
        <h2>Iniciar sesión</h2>
        <label for="username">Usuario </label>
        <input type="text" id="username" name="username" placeholder="Usuario" required/>
        <label for="password">Contraseña </label>
        <input type="password" id="password" name="password" placeholder="Contraseña" required/>
        <button type="submit" onClick={window.location.href="app.js"}>Iniciar sesión</button>
        <a href="signup.js">Registrarse</a>
    </form>
</div>  
</>
)
}