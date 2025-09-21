import { Link } from "react-router-dom";
import CartWidget from "./CartWidget";

function NavBar() {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-brand">
          🛍️ MiTienda
        </Link>
        
        <ul className="navbar-nav">
          <li>
            <Link to="/" className="navbar-link">
              🏠 Inicio
            </Link>
          </li>
          <li>
            <Link to="/catalogo" className="navbar-link">
              📦 Catálogo
            </Link>
          </li>
          {/* <li>
            <Link to="/carrito" className="navbar-link">
              🛒 Carrito
            </Link>
          </li> */}
        </ul>
        
        <div>
          <CartWidget />
        </div>
      </div>
    </nav>
  );
}

export default NavBar;