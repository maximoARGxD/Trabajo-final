import { useState } from "react";
import { useAuth } from "../context/UserContext";
import { useNavigate, Link } from "react-router-dom";
import "../styles/pages/Login.css";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    const isLogin = await login(username, password);

    if (isLogin) {
      setUsername("");
      setPassword("");
      navigate("/");
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100 login-container">
      <div className="shadow-lg p-4 bg-white login-card">
        <div className="text-center mb-4">
          <i className="bi bi-shop fs-1 login-icon"></i>
          <h4 className="fw-bold mt-3 mb-1 login-title">
            Bienvenido de nuevo
          </h4>
          <p className="text-muted small mb-0">
            Usuario: <strong>johnd</strong>
          </p>
          <p className="text-muted small">
            Contraseña: <strong>m38rmF$</strong>
          </p>
        </div>

        <form onSubmit={handleLogin}>
          <div className="mb-3">
            <label className="form-label fw-semibold small">
              Nombre de usuario
            </label>
            <div className="input-group">
              <span className="input-group-text border-0 bg-light">
                <i className="bi bi-person text-secondary"></i>
              </span>
              <input
                type="text"
                className="form-control border-0 bg-light input-rounded-right"
                placeholder="Ingresa tu usuario"
                onChange={(e) => setUsername(e.target.value)}
                value={username}
              />
            </div>
          </div>

          <div className="mb-4">
            <label className="form-label fw-semibold small">
              Contraseña
            </label>
            <div className="input-group">
              <span className="input-group-text border-0 bg-light">
                <i className="bi bi-lock text-secondary"></i>
              </span>
              <input
                type={showPassword ? "text" : "password"}
                className="form-control border-0 bg-light"
                placeholder="Ingresa tu contraseña"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
              />
              <span
                className="input-group-text border-0 bg-light toggle-password"
                onClick={() => setShowPassword(!showPassword)}
              >
                <i
                  className={`bi ${
                    showPassword ? "bi-eye-slash" : "bi-eye"
                  } text-primary`}
                ></i>
              </span>
            </div>
          </div>

          <div className="d-grid mb-3">
            <button className="btn btn-lg shadow-sm login-button" type="submit">
              <i className="bi bi-box-arrow-in-right me-2"></i> Ingresar
            </button>
          </div>
        </form>

        <div className="text-center mt-4">
          <Link to="/registrate" className="d-inline-block mb-3 fw-semibold link-primary">
            Crear cuenta nueva
          </Link>
          <br />
          <Link to="/" className="fw-semibold link-secondary">
            Continuar sin iniciar sesión
          </Link>
        </div>
      </div>
    </div>
  );
};

export { Login };
