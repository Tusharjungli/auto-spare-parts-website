import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Categories() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/products')
      .then(response => {
        const grouped = response.data.reduce((acc, product) => {
          acc[product.category] = acc[product.category] || [];
          acc[product.category].push(product.name);
          return acc;
        }, {});
        setProducts(Object.entries(grouped));
      })
      .catch(error => console.log(error));
  }, []);

  return (
    <section className="container my-5">
      <h2 className="text-center mb-4">Browse Categories</h2>
      <div className="row">
        {products.map(([category, items], index) => (
          <div className="col-md-4" key={index}>
            <div className="card mb-4">
              <div className="card-body">
                <h5 className="card-title">{category}</h5>
                <ul className="list-group list-group-flush">
                  {items.map((item, i) => (
                    <li className="list-group-item" key={i}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Categories;