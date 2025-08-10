import { useState } from "react";
import { Layout } from "../components/Layout";
import "../styles/pages/Dashboard.css";
import placeholderImg from "../assets/placeholder.png";
import { addLocalProduct } from "../hook/productsStore";
import { useNavigate } from "react-router-dom";


const Dashboard = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const [category, setCategory] = useState("");
  const [error, setError] = useState(null);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);

    if (!name || !price || !description || !image || !category) {
      setError("Debes completar todos los campos");
      return;
    }

    if (name.length < 4) {
      setError("El nombre debe tener al menos 4 caracteres");
      return;
    }

    const newProduct = {
      id: crypto.randomUUID(),
      title: name,
      price,
      description,
      category,
      image
    };

    addLocalProduct(newProduct);

    setName("");
    setPrice("");
    setDescription("");
    setImage("");
    setCategory("");

    navigate("/");
  };

  return (
    <Layout>
      <div className="container my-5">
        <h1 className="text-center mb-4 fw-bold">Panel de Administración</h1>

        <div className="row g-4">
          <div className="col-lg-6">
            <section className="card shadow-sm p-4 h-100">
              <h2 className="h4 fw-semibold mb-3">Cargar nuevo producto</h2>

              <form onSubmit={handleSubmit} className="row g-3">
                <div className="col-12">
                  <label className="form-label">Nombre del producto</label>
                  <input
                    type="text"
                    className="form-control"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Ej: Camiseta deportiva"
                  />
                </div>

                <div className="col-md-6">
                  <label className="form-label">Precio</label>
                  <input
                    type="number"
                    className="form-control"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                    placeholder="Ej: 49.99"
                  />
                </div>

                <div className="col-md-6">
                  <label className="form-label">Categoría</label>
                  <input
                    type="text"
                    className="form-control"
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    placeholder="Ej: Ropa, Electrónica..."
                  />
                </div>

                <div className="col-12">
                  <label className="form-label">Descripción</label>
                  <textarea
                    className="form-control"
                    rows="4"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    placeholder="Describe el producto..."
                  />
                </div>

                <div className="col-12">
                  <label className="form-label">URL de la imagen</label>
                  <input
                    type="url"
                    className="form-control"
                    value={image}
                    onChange={(e) => setImage(e.target.value)}
                    placeholder="Ej: https://ejemplo.com/imagen.jpg"
                  />
                </div>

                {error && (
                  <div className="col-12">
                    <p className="error-message">{error}</p>
                  </div>
                )}

                <div className="col-12">
                  <button type="submit" className="btn btn-primary w-100">
                    Guardar producto
                  </button>
                </div>
              </form>
            </section>
          </div>

          <div className="col-lg-6">
            <h3 className="mb-3 fw-semibold text-center text-primary">Vista previa</h3>
            <div className="d-flex justify-content-center">
              <div
                className="card shadow-sm"
                style={{
                  width: "100%",
                  maxWidth: "350px",
                  borderRadius: "12px",
                  overflow: "hidden",
                }}
              >
                <img
                  src={
                    image || placeholderImg
                  }
                  style={{
                    width: "100%",
                    height: "250px",
                    objectFit: "cover",
                  }}
                />
                <div className="card-body">
                  <h5 className="card-title">{name || "Nombre del producto"}</h5>
                  <p className="text-muted mb-1">
                    Categoría: <strong>{category || "Sin categoría"}</strong>
                  </p>
                  <p className="card-text">
                    {description || "Descripción del producto..."}
                  </p>
                  <h4 className="text-primary fw-bold">
                    {price ? `$${price}` : "$0.00"}
                  </h4>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </Layout>
  );
};

export { Dashboard };
