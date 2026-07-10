import { Link } from 'react-router-dom';
import DashboardLayout from '../components/DashboardLayout';
import { useCart } from '../context/CartContext';

function CartPage() {
  const { cartItems, addToCart, removeFromCart, cartCount } = useCart();

  return (
    <DashboardLayout>
      <section>
        <div className="d-flex flex-column flex-md-row justify-content-between gap-3 mb-4">
          <div>
            <h1 className="mb-1">Cart</h1>
            <p className="text-muted mb-0">{cartCount} products selected</p>
          </div>

          <Link className="btn btn-dark d-inline-flex align-items-center justify-content-center gap-2" to="/products">
            <i className="fa-solid fa-plus" />
            Add Products
          </Link>
        </div>

        {cartItems.length === 0 ? (
          <div className="alert alert-light border text-center" role="alert">
            Your cart is empty.
          </div>
        ) : (
          <div className="row g-3">
            {cartItems.map((product) => (
              <div className="col-12" key={product.id}>
                <div className="card border-0 shadow-sm cart-item-card">
                  <div className="card-body d-flex flex-column flex-md-row align-items-md-center gap-3">
                    <img className="cart-item-image" src={product.image} alt={product.title} />

                    <div className="flex-grow-1">
                      <span className="badge text-bg-light text-secondary border mb-2">{product.category}</span>
                      <h2 className="fs-5 mb-1">{product.title}</h2>
                      <p className="text-muted small mb-0">Quantity: {product.quantity}</p>
                    </div>

                    <strong className="fs-4">{product.price}</strong>

                    <div className="d-flex gap-2">
                      <button className="btn btn-outline-dark" type="button" onClick={() => addToCart(product)}>
                        <i className="fa-solid fa-plus" />
                      </button>
                      <button className="btn btn-outline-danger" type="button" onClick={() => removeFromCart(product.id)}>
                        <i className="fa-solid fa-trash" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>
    </DashboardLayout>
  );
}

export default CartPage;
