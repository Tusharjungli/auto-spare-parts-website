import React, { useState } from 'react';
import Confetti from 'react-confetti';
import axios from 'axios';
import { useTranslation } from 'react-i18next';

function Feedback() {
  const { t } = useTranslation();
  const [showForm, setShowForm] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('https://auto-spare-parts-backend.onrender.com/api/feedback', formData) // Replace with your Render URL
      .then(() => {
        setSubmitted(true);
        setTimeout(() => setSubmitted(false), 5000);
      })
      .catch(error => console.log(error));
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.placeholder.toLowerCase().replace(`${t('Your')} `, "")]: e.target.value });
  };

  return (
    <>
      <button
        className="btn btn-danger position-fixed bottom-0 end-0 m-4"
        onClick={() => setShowForm(!showForm)}
      >
        {t('Hey Boss, Talk to Us!')}
      </button>

      {showForm && !submitted && (
        <div className="position-fixed top-50 start-50 translate-middle bg-white p-4 rounded shadow">
          <h3>{t('Tell Us What You Think')}</h3>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <input className="form-control" placeholder={t('Your Name')} onChange={handleChange} required />
            </div>
            <div className="mb-3">
              <input className="form-control" type="email" placeholder={t('Your Email')} onChange={handleChange} required />
            </div>
            <div className="mb-3">
              <textarea className="form-control" placeholder={t('Your Feedback')} onChange={handleChange} required></textarea>
            </div>
            <button type="submit" className="btn btn-primary">{t('Submit')}</button>
            <button
              type="button"
              className="btn btn-secondary ms-2"
              onClick={() => setShowForm(false)}
            >
              {t('Close')}
            </button>
          </form>
        </div>
      )}

      {submitted && (
        <>
          <Confetti width={window.innerWidth} height={window.innerHeight} />
          <div className="position-fixed top-50 start-50 translate-middle bg-success text-white p-4 rounded shadow">
            <h3>{t('Thanks, Boss!')}</h3>
            <p>{t('Use code')} <strong>BOSS5</strong> {t('for 5% off your next order!')}</p>
            <button className="btn btn-light" onClick={() => setShowForm(false)}>
              {t('Close')}
            </button>
          </div>
        </>
      )}
    </>
  );
}

export default Feedback;