import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

function Navbar() {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <Link className="navbar-brand" to="/">{t('Logo')}</Link>
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <input className="form-control me-2" placeholder={t('Year/Make/Model')} />
            </li>
            <li className="nav-item">
              <button
                className="btn btn-outline-light me-2"
                data-bs-toggle="modal"
                data-bs-target="#cartModal"
              >
                {t('Cart')}
              </button>
            </li>
            <li className="nav-item">
              <button className="btn btn-outline-light me-2">{t('Boss Zone')}</button>
            </li>
            <li className="nav-item">
              <select
                className="form-select d-inline-block w-auto"
                onChange={(e) => changeLanguage(e.target.value)}
              >
                <option value="en">English</option>
                <option value="hi">हिन्दी</option>
              </select>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;