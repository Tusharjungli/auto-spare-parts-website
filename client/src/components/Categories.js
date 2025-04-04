import React from 'react';
import { categories } from '../categories';

function Categories() {
  return (
    <section className="container my-5">
      <h2 className="text-center mb-4">Browse Categories</h2>
      <div className="row">
        {categories.map((category, index) => (
          <div className="col-md-4" key={index}>
            <div className="card mb-4">
              <div className="card-body">
                <h5 className="card-title">{category.name}</h5>
                <ul className="list-group list-group-flush">
                  {category.sub.map((item, i) => (
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