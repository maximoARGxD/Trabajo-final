import "../styles/components/ProductCard.css";

export function ProductCard({ product, user, onEdit, onDelete }) {
    return (
        <div className="col-sm-6 col-md-4 col-lg-3" key={product.id}>
        <div
            className="card product-card h-100 shadow-sm border-0 rounded-4"
        >
            <div className="product-image-wrapper p-3">
            <img
                src={product.image}
                alt={product.title}
                className="product-image"
            />
            </div>

            <div className="card-body d-flex flex-column">
            <h6
                className="card-title fw-semibold text-truncate product-title"
                title={product.title}
            >
                {product.title}
            </h6>
            <p className="text-muted small mb-2 product-description">
                {product.description}
            </p>

            <div className="mt-auto">
                <p className="fw-bold text-primary fs-5 mb-2">${product.price}</p>
                {user && (
                <div className="d-flex gap-2">
                    <button
                    className="btn btn-outline-warning btn-sm flex-fill"
                    onClick={() => onEdit(product)}
                    >
                    Editar
                    </button>
                    <button
                    className="btn btn-outline-danger btn-sm flex-fill"
                    onClick={() => onDelete(product)}
                    >
                    Eliminar
                    </button>
                </div>
                )}
            </div>
            </div>
        </div>
        </div>
    );
}
