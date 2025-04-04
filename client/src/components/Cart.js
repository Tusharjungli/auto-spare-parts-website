import React from 'react';
import { useTranslation } from 'react-i18next';

function Cart({ cart, removeFromCart, checkout }) {
  const { t } = useTranslation();
  const total = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="modal fade" id="cartModal" tabIndex="-1" aria-labelledby="cartModalLabel" aria-hidden="true">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="cartModalLabel">{t('Your Cart')}</h5>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div className="modal-body">
            {cart.length === 0 ? (
              <p>{t('Your cart is empty.')}</p>
            ) : (
              <>
                <ul className="list-group">
                  {cart.map((item, index) => (
                    <li className="list-group-item d-flex justify-content-between align-items-center" key={index}>
                      {item.name} - ₹{item.price}
                      <button
                        className="btn btn-danger btn-sm"
                        onClick={() => removeFromCart(index)}
                      >
                        {t('Remove')}
                      </button>
                    </li>
                  ))}
                </ul>
                <h5 className="mt-3">{t('Total')}: ₹{total}</h5>
              </>
            )}
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">{t('Close')}</button>
            {cart.length > 0 && (
              <button type="button" className="btn btn-primary" onClick={() => checkout(total, cart)}>
                {t('Checkout')}
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;