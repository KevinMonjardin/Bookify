import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "../pages/login";
import Register from "../pages/register";
import Homepage from "../pages/homepage";
import Erro404 from "../pages/error404";
import Matematicas from "../pages/Matematicas";
import Programacion from "../pages/Programacion";
import Fisica from "../pages/Fisica";
import Electronica from "../pages/Electronica";

const UrlRoutes = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route exact path="/" Component={Login} />
          <Route exact path="/register" Component={Register} />
          <Route exact path="/" Component={Homepage} />
          <Route exact path="/matematicas" Component={Matematicas} />
          <Route exact path="/programacion" Component={Programacion} />
          <Route exact path="/fisica" Component={Fisica} />
          <Route exact path="/electronica" Component={Electronica} />
          <Route path="*" Component={Erro404} />
        </Routes>
      </Router>
    </div>
  );
};

export default UrlRoutes;
