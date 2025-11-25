import kopiImg from "../assets/kopi.png";
import { BsCart4 } from "react-icons/bs";

function ProductDetailPage({ item, onAddToCart }) {
  return (
    <div className="detail-page">
      <div className="detail-image">
        <img src={kopiImg} alt={item.name} />
      </div>

      <div className="detail-main">
        <div className="detail-header-row">
          <div>
            <h2 className="detail-name">{item.name}</h2>
            <p className="detail-points">Point: {item.points ?? 0}</p>
          </div>
          <div className="detail-price">
            ${item.price.toFixed(2)}
          </div>
        </div>

        <div className="detail-section">
          <h3 className="detail-section-title">Product Detail</h3>
          <p className="detail-text">{item.detail}</p>
        </div>

        <div className="detail-cart-row">
          <div className="detail-cart-icon">
            <BsCart4 />
          </div>
        </div>

        <button
          className="detail-add-btn"
          onClick={() => onAddToCart(item)}
        >
          Add To Cart
        </button>
      </div>
    </div>
  );
}

export default ProductDetailPage;
