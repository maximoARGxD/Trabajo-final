import { useState } from "react";
import { Layout } from "../components/Layout";
import { useAuth } from "../context/UserContext";
import { useProducts } from "../hook/useProducts";
import { ProductCard } from "../components/ProductCard";
import { EditProductModal } from "../components/EditProductModal";
import "../styles/pages/Home.css";

export const Home = () => {
  const { user } = useAuth();
  const {
    filteredProducts,
    searchTerm,
    setSearchTerm,
    deleteProduct,
    updateProduct,
    loading,
  } = useProducts();

  const [showEditModal, setShowEditModal] = useState(false);
  const [formData, setFormData] = useState({});
  const [errors, setErrors] = useState({});

  const handleOpenEdit = (product) => {
    setFormData(product);
    setErrors({});
    setShowEditModal(true);
  };

  const handleCloseEdit = () => setShowEditModal(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmitEdit = (e) => {
    e.preventDefault();

    let newErrors = {};
    if (!formData.title) newErrors.title = "El título es obligatorio";
    if (!formData.price) newErrors.price = "El precio es obligatorio";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    updateProduct(formData);
    setShowEditModal(false);
  };

  if(loading){
    return(
      <div className="loading-overlay">
        <div className="spinner-border text-primary" role="status" aria-hidden="true"></div>
        <span className="visually-hidden">Cargando...</span>
      </div>
    );
  }
  return (
    <Layout>
      <section class="container text-center my-5">
        <h1 class="display-5 fw-bold mb-3">Bienvenido a Nuestra Tienda</h1>
        <p class="lead text-muted">
          Descubrí una selección exclusiva de productos para vos. Calidad, confianza y atención personalizada.
        </p>
      </section>

      <section class="container my-5">
        <h2 class="text-center fw-bold mb-4">¿Por qué elegirnos?</h2>
        <div class="row g-4">
          <div class="col-md-4">
            <div class="card h-100 shadow-sm feature-card">
              <div class="card-body">
                <h3 class="h5 fw-semibold">Envíos a todo el país</h3>
                <p class="text-muted">Recibí tu compra en la puerta de tu casa estés donde estés.</p>
              </div>
            </div>
          </div>
          <div class="col-md-4">
            <div class="card h-100 shadow-sm feature-card">
              <div class="card-body">
                <h3 class="h5 fw-semibold">Pagos seguros</h3>
                <p class="text-muted">Trabajamos con plataformas que garantizan tu seguridad.</p>
              </div>
            </div>
          </div>
          <div class="col-md-4">
            <div class="card h-100 shadow-sm feature-card">
              <div class="card-body">
                <h3 class="h5 fw-semibold">Atención personalizada</h3>
                <p class="text-muted">Estamos disponibles para ayudarte en todo momento.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="container text-center my-5">
        <h2 class="fw-bold mb-3">Nuestros productos</h2>
        <p class="lead text-muted">
          Elegí entre nuestras categorías más populares.
        </p>
      </section>

      <section className="section-products">
        <div className="mb-5">
          <div className="input-group input-group-lg shadow-sm rounded-pill overflow-hidden search-input-wrapper">
            <span className="input-group-text bg-primary text-white border-0">
              <i className="bi bi-search"></i>
            </span>
            <input
              type="text"
              className="form-control border-0"
              placeholder="Buscar productos..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              disabled={loading}
            />
          </div>
        </div>

        <div className="row justify-content-center g-4">
          {!loading && filteredProducts.length > 0 ? (
            filteredProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                user={user}
                onEdit={() => handleOpenEdit(product)}
                onDelete={() => deleteProduct(product)}
              />
            ))
          ) : (
            !loading && <p className="text-muted text-center">No se encontraron productos.</p>
          )}
        </div>
      </section>

      <EditProductModal
        show={showEditModal}
        onClose={handleCloseEdit}
        onSubmit={handleSubmitEdit}
        formData={formData}
        errors={errors}
        handleChange={handleChange}
      />
    </Layout>
  );
};
