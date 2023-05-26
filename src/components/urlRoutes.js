import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "../pages/login";
import Register from "../pages/register";
import Homepage from "../pages/homepage";
import Erro404 from "../pages/error404";
import Aventura from "../pages/Aventura";

const UrlRoutes = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route exact path="/" Component={Login} />
          <Route exact path="/register" Component={Register} />
          <Route exact path="/home" Component={Homepage} />
          <Route exact path="/aventura" Component={Aventura} />
          <Route path="*" Component={Erro404} />
        </Routes>
      </Router>
    </div>
  );
};

export default UrlRoutes;
