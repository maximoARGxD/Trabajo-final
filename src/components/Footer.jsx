import { FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-3 mt-auto">
      <div className="container d-flex flex-column flex-md-row justify-content-between align-items-center">
        <div className="mb-2 mb-md-0 text-center text-md-start">
          <small>© {new Date().getFullYear()} Trabajo Final. Todos los derechos reservados.</small>
        </div>
        <div className="text-center text-md-end">
          <a
            href="https://github.com/maximoARGxD/Trabajo-final"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white text-decoration-none d-inline-flex align-items-center"
          >
            <FaGithub size={24} className="me-2" />
            <span>Repositorio en GitHub</span>
          </a>
        </div>
      </div>
    </footer>
  );
};

export { Footer };
