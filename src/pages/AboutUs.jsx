import { Link } from "react-router-dom";
import "../styles/pages/AboutUs.css";

const AboutUs = () => {
  return (
    <div className="aboutus-container">
      <div className="aboutus-card">
        <div className="aboutus-header">
          <i className="bi bi-info-circle"></i>
          <h3>Sobre Nosotros</h3>
          <div className="underline"></div>
          <p>
            Conoce más sobre nuestro proyecto, su propósito y la tecnología
            detrás.
          </p>
        </div>

        <div className="aboutus-section">
          <h5>
            <i className="bi bi-lightbulb"></i> ¿De qué trata el proyecto?
          </h5>
          <p>
            Nuestro proyecto es una plataforma diseñada para gestionar y mostrar
            productos de manera intuitiva y accesible. Buscamos ofrecer una
            experiencia fluida que permita a los usuarios navegar, buscar y
            conocer más sobre los artículos disponibles.
          </p>
        </div>

        <div className="aboutus-section">
          <h5>
            <i className="bi bi-people"></i> ¿A quién está dirigido?
          </h5>
          <p>
            Está pensado tanto para pequeños emprendedores que desean mostrar
            su catálogo, como para usuarios que buscan descubrir nuevos
            productos de forma rápida y amigable, sin necesidad de complejas
            configuraciones.
          </p>
        </div>

        <div className="aboutus-section">
          <h5>
            <i className="bi bi-gear"></i> Tecnologías y enfoques usados
          </h5>
          <p>
            La plataforma está desarrollada con <strong>React</strong> para el
            frontend y estilizada con <strong>Bootstrap 5</strong> para un diseño
            moderno y adaptable. También usamos <strong>React Router</strong>{" "}
            para la navegación y un enfoque basado en componentes reutilizables.
            Además, incorporamos <strong>SweetAlert2</strong> para notificaciones
            interactivas y <strong>Hooks</strong> para un manejo eficiente del estado.
          </p>
        </div>

        <div className="text-center mt-4">
          <Link to="/" className="aboutus-btn">
            <i className="bi bi-arrow-left me-2"></i> Volver al inicio
          </Link>
        </div>
      </div>
    </div>
  );
};

export { AboutUs };
