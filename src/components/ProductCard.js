function ProductCard({ product, onAddToCart }) {
  const { title, description, price, image, icon, category, rating } = product;

  return (
    <article className="card product-card h-100 border-0 shadow-sm">
      <div className="product-image">
        <img src={image} alt={title} />
        <span className="product-badge" aria-hidden="true">
          <i className={`fa-solid ${icon}`} />
        </span>
      </div>

      <div className="card-body d-flex flex-column gap-3 p-3">
        <div>
          <div className="d-flex align-items-center justify-content-between gap-2 mb-2">
            <span className="badge text-bg-light text-secondary border">{category}</span>
            <span className="product-rating d-inline-flex align-items-center gap-1 fw-bold">
              <i className="fa-solid fa-star" />
              {rating}
            </span>
          </div>
          <h3 className="card-title fs-5 lh-sm mb-2">{title}</h3>
          <p className="card-text product-description text-muted small mb-0">{description}</p>
        </div>

        <div className="d-flex align-items-center justify-content-between mt-auto">
          <strong className="fs-4">{price}</strong>
          <button
            className="btn btn-dark d-inline-flex align-items-center justify-content-center rounded-3 product-cart-button"
            type="button"
            onClick={() => onAddToCart(product)}
            aria-label={`Add ${title} to cart`}
          >
            <i className="fa-solid fa-cart-shopping" />
          </button>
        </div>
      </div>
    </article>
  );
}

export default ProductCard;
