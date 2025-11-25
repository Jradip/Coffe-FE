// src/components/ProductCard.jsx
import { FaPlus } from "react-icons/fa";

function ProductCard({ item, image, onAddClick }) {
  return (
    <article className="product-card">
      <div className="product-image">
        <img src={image} alt={item.name} className="product-img" />
      </div>
      <div className="product-info">
        <h3 className="product-name">{item.name}</h3>
        <p className="product-desc">{item.desc}</p>
      </div>
      <div className="product-footer">
        <span className="product-price">${item.price.toFixed(2)}</span>
        <button
          className="add-btn"
          aria-label="Lihat detail"
          onClick={onAddClick}
        >
          <FaPlus />
        </button>
      </div>
    </article>
  );
}

export default ProductCard;
