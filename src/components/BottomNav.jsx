// src/components/CartView.jsx

function CartView({ cartItems, total, onIncrement, onDecrement, onRemove }) {
  return (
    <div className="cart-page">
      <h2 className="cart-title">Keranjang</h2>

      {cartItems.length === 0 ? (
        <p className="cart-empty">Keranjang masih kosong.</p>
      ) : (
        <>
          <div className="cart-list">
            {cartItems.map((item) => (
              <div className="cart-row" key={item.id}>
                <div className="cart-main">
                  <div className="cart-name">{item.name}</div>
                  <div className="qty-control">
                    <button
                      className="qty-btn"
                      onClick={() => onDecrement(item.id)}
                    >
                      -
                    </button>
                    <span className="qty-value">{item.qty}</span>
                    <button
                      className="qty-btn"
                      onClick={() => onIncrement(item.id)}
                    >
                      +
                    </button>
                  </div>
                </div>
                <div className="cart-side">
                  <button
                    className="cart-remove"
                    onClick={() => onRemove(item.id)}
                  >
                    ×
                  </button>
                  <div className="cart-price">
                    ${(item.price * item.qty).toFixed(2)}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="cart-total-row">
            <span>Total</span>
            <span className="cart-total-price">${total.toFixed(2)}</span>
          </div>

          <button className="cart-checkout-btn">Checkout</button>
        </>
      )}
    </div>
  );
}

export default CartView;
