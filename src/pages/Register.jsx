import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/UserContext";
import "../styles/pages/Register.css";

const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const { register } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    if (!username || !email || !password) {
      setError("Debes completar todos los campos");
      return;
    }

    const result = await register(username, email, password);

    if (result.ok) {
      setSuccess(result.message);
      setTimeout(() => navigate("/login"), 2000);
    } else {
      setError(result.message);
    }
  };

  return (
    <div className="register-container">
      <div className="register-card">
        <div className="text-center mb-4">
          <i className="bi bi-person-plus fs-1 icon-main"></i>
          <h4 className="fw-bold mt-3 mb-1 title">Crear cuenta</h4>
          <p className="text-muted small">Completa tus datos para registrarte</p>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label fw-semibold small">Nombre de usuario</label>
            <div className="input-group">
              <span className="input-group-text border-0 bg-light">
                <i className="bi bi-person text-secondary"></i>
              </span>
              <input
                type="text"
                className="form-control border-0 bg-light rounded-end"
                placeholder="Tu nombre de usuario"
                onChange={(e) => setUsername(e.target.value)}
                value={username}
              />
            </div>
          </div>

          <div className="mb-3">
            <label className="form-label fw-semibold small">Correo electrónico</label>
            <div className="input-group">
              <span className="input-group-text border-0 bg-light">
                <i className="bi bi-envelope text-secondary"></i>
              </span>
              <input
                type="email"
                className="form-control border-0 bg-light"
                placeholder="Tu correo electrónico"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
              />
            </div>
          </div>

          <div className="mb-4">
            <label className="form-label fw-semibold small">Contraseña</label>
            <div className="input-group">
              <span className="input-group-text border-0 bg-light">
                <i className="bi bi-lock text-secondary"></i>
              </span>
              <input
                type={showPassword ? "text" : "password"}
                className="form-control border-0 bg-light"
                placeholder="Crea una contraseña"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
              />
              <span
                className="input-group-text border-0 bg-light password-toggle"
                onClick={() => setShowPassword(!showPassword)}
              >
                <i className={`bi ${showPassword ? "bi-eye-slash" : "bi-eye"} text-primary`}></i>
              </span>
            </div>
          </div>

          <div className="d-grid mb-3">
            <button className="btn-register" type="submit">
              <i className="bi bi-person-plus-fill me-2"></i> Registrarse
            </button>
          </div>
        </form>

        {error && <p className="text-danger small text-center">{error}</p>}
        {success && <p className="text-success small text-center">{success}</p>}

        <div className="text-center mt-4">
          <Link to="/login" className="d-inline-block mb-3 fw-semibold link-primary">Ya tengo una cuenta</Link>
          <br />
          <Link to="/" className="fw-semibold link-secondary">Continuar sin iniciar sesión</Link>
        </div>
      </div>
    </div>
  );
};

export { Register };
