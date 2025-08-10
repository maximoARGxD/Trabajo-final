import "../styles/components/EditProductModal.css";

export const EditProductModal = ({
    show,
    onClose,
    onSubmit,
    formData,
    errors,
    handleChange,
}) => {
    if (!show) return null;

    const fieldLabels = {
        title: "Nombre del producto",
        price: "Precio",
        description: "Descripción",
        category: "Categoría",
        image: "Imagen",
    };

    return (
        <div
            className="modal fade show d-block modal-overlay"
            tabIndex="-1"
            role="dialog"
            aria-modal="true"
        >
            <div className="modal-dialog modal-dialog-centered" role="document">
                <div className="modal-content shadow-lg rounded-3">
                    <div className="modal-header bg-primary text-white">
                        <h5 className="modal-title">Editar producto</h5>
                        <button
                            type="button"
                            className="btn-close btn-close-white"
                            aria-label="Cerrar"
                            onClick={onClose}
                        ></button>
                    </div>

                    <form
                        onSubmit={(e) => {
                            e.preventDefault();
                            if (formData.price <= 0) {
                                errors.price =
                                    formData.price === 0
                                        ? "El precio no puede ser cero"
                                        : "El precio no puede ser negativo";
                                return;
                            } else {
                                if (errors.price) delete errors.price;
                            }
                            onSubmit(e);
                        }}
                        noValidate
                    >
                        <div className="modal-body">
                            {Object.keys(fieldLabels).map((field) => {
                                const isPrice = field === "price";
                                const isDescription = field === "description";

                                return (
                                    <div className="mb-3" key={field}>
                                        <label htmlFor={field} className="form-label fw-semibold">
                                            {fieldLabels[field]}
                                        </label>

                                        {isDescription ? (
                                            <textarea
                                                id={field}
                                                name={field}
                                                className={`form-control ${errors[field] ? "is-invalid" : ""}`}
                                                placeholder={`Ingrese ${fieldLabels[field].toLowerCase()}`}
                                                value={formData[field] || ""}
                                                onChange={handleChange}
                                                rows={5}
                                                autoComplete="off"
                                            />
                                        ) : (
                                            <input
                                                id={field}
                                                type={isPrice ? "number" : "text"}
                                                min={isPrice ? "0" : undefined}
                                                step={isPrice ? "0.01" : undefined}
                                                name={field}
                                                className={`form-control ${errors[field] ? "is-invalid" : ""}`}
                                                placeholder={`Ingrese ${fieldLabels[field].toLowerCase()}`}
                                                value={formData[field] || ""}
                                                onChange={handleChange}
                                                autoComplete="off"
                                            />
                                        )}

                                        {errors[field] && (
                                            <div className="invalid-feedback">{errors[field]}</div>
                                        )}
                                    </div>
                                );
                            })}
                        </div>

                        <div className="modal-footer">
                            <button
                                type="button"
                                className="btn btn-outline-secondary"
                                onClick={onClose}
                            >
                                Cancelar
                            </button>
                            <button
                                type="submit"
                                className="btn btn-primary"
                                disabled={formData.price <= 0}
                            >
                                Actualizar
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};
