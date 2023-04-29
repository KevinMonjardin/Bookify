
import "./styles.css";
import { Login } from "./components/login";
import { Register } from "./components/register";
import { Sidebar } from "./components/sidebar";
import { Footer } from "./components/footer";
import { LCarousel } from "./components/carousel";
import {result} from "./lib/pocketbase";

function App() {
  return (
    <div>
      <Login />
    </div>
  );
}

export default App;
