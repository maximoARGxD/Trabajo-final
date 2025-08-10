import 'bootstrap-icons/font/bootstrap-icons.css';
import '../styles/components/SearchBar.css';

export function SearchBar({ searchTerm, setSearchTerm }) {
  return (
    <div className="search-bar-container mb-5">
      <div className="search-bar input-group input-group-lg shadow-sm rounded-pill overflow-hidden">
        <span className="input-group-text bg-primary text-white border-0">
          <i className="bi bi-search"></i>
        </span>
        <input
          type="text"
          className="form-control border-0"
          placeholder="Buscar productos..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
    </div>
  );
}
