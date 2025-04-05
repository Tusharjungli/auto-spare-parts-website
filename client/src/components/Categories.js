import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useTranslation } from 'react-i18next';

function Categories({ addToCart }) {
  const { t } = useTranslation();
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [categoryFilter, setCategoryFilter] = useState('');
  const [priceFilter, setPriceFilter] = useState('');

  useEffect(() => {
    axios.get('https://auto-spare-parts-backend.onrender.com/api/products') // Replace with your Render URL
      .then(response => {
        setProducts(response.data);
        setFilteredProducts(response.data);
      })
      .catch(error => console.log(error));
  }, []);

  useEffect(() => {
    let filtered = products;
    if (categoryFilter) {
      filtered = filtered.filter(product => product.category === categoryFilter);
    }
    if (priceFilter) {
      filtered = filtered.filter(product => {
        if (priceFilter === 'low') return product.price <= 1000;
        if (priceFilter === 'medium') return product.price > 1000 && product.price <= 2000;
        return product.price > 2000;
      });
    }
    setFilteredProducts(filtered);
  }, [categoryFilter, priceFilter, products]);

  return (
    <section className="container my-5">
      <h2 className="text-center mb-4">{t('Browse Categories')}</h2>
      <div className="mb-4">
        <select
          className="form-select d-inline-block w-auto me-2"
          value={categoryFilter}
          onChange={(e) => setCategoryFilter(e.target.value)}
        >
          <option value="">{t('All Categories')}</option>
          <option value="Braking System">{t('Braking System')}</option>
          <option value="Engine Components">{t('Engine Components')}</option>
          <option value="Car Body and Main Parts">{t('Car Body and Main Parts')}</option>
        </select>
        <select
          className="form-select d-inline-block w-auto"
          value={priceFilter}
          onChange={(e) => setPriceFilter(e.target.value)}
        >
          <option value="">{t('All Prices')}</option>
          <option value="low">{t('Under ₹1000')}</option>
          <option value="medium">{t('₹1000 - ₹2000')}</option>
          <option value="high">{t('Above ₹2000')}</option>
        </select>
      </div>
      <div className="row">
        {filteredProducts.map((product, index) => (
          <div className="col-md-4" key={index}>
            <div className="card mb-4">
              <div className="card-body">
                <h5 className="card-title">{product.name}</h5>
                <p className="card-text">{t('Category')}: {product.category}</p>
                <p className="card-text">{t('Price')}: ₹{product.price}</p>
                <button
                  className="btn btn-primary"
                  onClick={() => addToCart(product)}
                >
                  {t('Add to Cart')}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Categories;