import React from 'react';
import { useTranslation } from 'react-i18next';

function Hero() {
  const { t } = useTranslation();

  return (
    <section className="bg-light text-center py-5">
      <div className="container">
        <h1 className="display-4">{t('Find Your Parts')}</h1>
        <button className="btn btn-danger mt-3">{t('Shop Now')}</button>
      </div>
    </section>
  );
}

export default Hero;