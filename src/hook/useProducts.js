import { useState, useEffect } from "react";
import Swal from "sweetalert2";
import {
  getLocalProducts,
  addLocalProduct,
  updateLocalProduct,
  deleteLocalProduct
} from "../hook/productsStore";

export const useProducts = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(true);

  const fetchingProducts = async () => {
    try {
      setLoading(true);
      const res = await fetch("https://fakestoreapi.com/products");
      const apiProducts = await res.json();

      const combined = [...getLocalProducts(), ...apiProducts];
      setProducts(combined);
      setFilteredProducts(combined);
    } catch (err) {
      console.error("Error al obtener productos:", err);
      setProducts(getLocalProducts());
      setFilteredProducts(getLocalProducts());
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchingProducts();
  }, []);

  useEffect(() => {
    const term = searchTerm.toLowerCase();
    setFilteredProducts(
      products.filter((p) => p.title.toLowerCase().includes(term))
    );
  }, [searchTerm, products]);

  const deleteProduct = (product) => {
    deleteLocalProduct(product.id);
    setProducts((prev) => prev.filter((p) => p.id !== product.id));
  };

  const updateProduct = (updatedProduct) => {
    updateLocalProduct(updatedProduct);
    setProducts((prev) =>
      prev.map((p) => (p.id === updatedProduct.id ? updatedProduct : p))
    );
  };

  const addProduct = (newProduct) => {
    addLocalProduct(newProduct);
    setProducts((prev) => [newProduct, ...prev]);
    setFilteredProducts((prev) => [newProduct, ...prev]);
  };

  return {
    products,
    filteredProducts,
    searchTerm,
    setSearchTerm,
    deleteProduct,
    updateProduct,
    addProduct,
    loading,
  };
};
