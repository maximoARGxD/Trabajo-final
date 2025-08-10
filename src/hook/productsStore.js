let localProducts = [];

export const getLocalProducts = () => localProducts;

export const addLocalProduct = (product) => {
  localProducts.push(product);
};

export const updateLocalProduct = (updatedProduct) => {
localProducts = localProducts.map(p =>
        p.id === updatedProduct.id ? updatedProduct : p
    );
};

export const deleteLocalProduct = (id) => {
    localProducts = localProducts.filter(p => p.id !== id);
};
