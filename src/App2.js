import "./styles.css";
import { Sidebar } from "./components/sidebar";
import { Footer } from "./components/footer";
import { LCarousel } from "./components/carousel";
import {result} from "./lib/pocketbase";

function App() {
  return (
    <div>
      <Sidebar />
      <div className="main">
        <div className="main sidebar-closed">
          <h2>Libros destacados</h2>
          <LCarousel />
        </div>
        <div className="category-section">
          <h2>Categorías</h2>
          <ul>
            <li>
              <a href="#">Ficción</a>
            </li>
            <li>
              <a href="#">No ficción</a>
            </li>
            <li>
              <a href="#">Romance</a>
            </li>
            <li>
              <a href="#">Ciencia ficción</a>
            </li>
          </ul>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;