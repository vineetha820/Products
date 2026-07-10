import { useState } from 'react';
import { Link } from 'react-router-dom';
import DashboardLayout from '../components/DashboardLayout';
import ProductCard from '../components/ProductCard';
import { useCart } from '../context/CartContext';
import { products } from '../data';

function ProductsPage() {
  const [lastAddedProduct, setLastAddedProduct] = useState('');
  const [searchText, setSearchText] = useState('');
  const { addToCart, cartCount } = useCart();

  const filteredProducts = products.filter((product) => {
    const searchValue = searchText.toLowerCase();

    return (
      product.title.toLowerCase().includes(searchValue) ||
      product.category.toLowerCase().includes(searchValue) ||
      product.description.toLowerCase().includes(searchValue)
    );
  });

  const addProductToCart = (product) => {
    addToCart(product);
    setLastAddedProduct(product.title);
  };

  return (
    <DashboardLayout>
      <section>
        <div className="container-fluid px-0 overflow-hidden">
        <div className="d-flex flex-column flex-xl-row justify-content-between gap-3 mb-4 products-header">
          <div>
            <h1 className="mb-0">Products</h1>
          </div>

          <div className="products-toolbar d-flex flex-column flex-lg-row align-items-stretch align-items-lg-center gap-2">
            <div className="input-group product-search">
              <span className="input-group-text bg-white">
                <i className="fa-solid fa-magnifying-glass text-secondary" />
              </span>
              <input
                className="form-control"
                type="search"
                placeholder="Search products"
                value={searchText}
                onChange={(event) => setSearchText(event.target.value)}
              />
            </div>

            <div className="d-flex flex-row gap-2">
              <div className="cart-count d-inline-flex align-items-center gap-2 bg-white border rounded-3 shadow-sm px-3 fw-bold text-dark">
                <i className="fa-solid fa-cart-shopping text-primary" />
                <span>{cartCount} items added</span>
              </div>
              <Link className="btn btn-dark d-inline-flex align-items-center justify-content-center gap-2 px-3 cart-link" to="/cart">
                <i className="fa-solid fa-cart-shopping" />
                Cart
              </Link>
            </div>
          </div>
        </div>

        {lastAddedProduct && (
          <div className="alert alert-success border-0 rounded-3 fw-bold mb-4" role="alert">
            <i className="fa-solid fa-circle-check me-2" />
            {lastAddedProduct} added to cart
          </div>
        )}

        <div className="row g-4 mx-0">
          {filteredProducts.map((product) => (
            <div className="col-12 col-sm-6 col-lg-4 col-xxl-3" key={product.id}>
              <ProductCard product={product} onAddToCart={addProductToCart} />
            </div>
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="alert alert-light border text-center mt-4" role="alert">
            No products found.
          </div>
        )}
        </div>
      </section>
    </DashboardLayout>
  );
}

export default ProductsPage;
