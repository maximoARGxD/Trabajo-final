import { Link } from "react-router-dom";
import { useAuth } from "../context/UserContext";
import logoTienda from "../assets/logo-tienda.png";

const Header = () => {
  const { user, logout } = useAuth();

  const handleLogout = () => {
    logout();
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light shadow-sm">
      <div className="container">
        
        <Link className="navbar-brand fw-bold d-flex align-items-center" to="/">
          <img
            src={logoTienda}
            alt="Logo"
            width="40"
            height="40"
            className="me-2"
          />
          TIENDA GENERAL
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto align-items-lg-center gap-2">
            {user ? (
              <>
                <li className="nav-item">
                  <Link className="nav-link" to="/">Inicio</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/dashboard">Dashboard</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/sobre-nosotros">Sobre Nosotros</Link>
                </li>
                <li className="nav-item">
                  <button
                    className="btn btn-sm btn-outline-danger"
                    onClick={handleLogout}
                  >
                    Cerrar sesión
                  </button>
                </li>
              </>
            ) : (
              <>
                <li className="nav-item">
                  <Link className="nav-link" to="/sobre-nosotros">Sobre Nosotros</Link>
                </li>
                <li className="nav-item">
                  <Link className="btn btn-sm btn-primary" to="/login">
                    Iniciar sesión
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="btn btn-sm btn-outline-primary" to="/registrate">
                    Regístrate
                  </Link>
                </li>
              </>
            )}
          </ul>
        </div>

      </div>
    </nav>
  );
};

export { Header };
