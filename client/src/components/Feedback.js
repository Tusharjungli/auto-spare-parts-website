import React, { useState } from 'react';
import Confetti from 'react-confetti';
import axios from 'axios';

function Feedback() {
  const [showForm, setShowForm] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:5000/api/feedback', formData)
      .then(() => {
        setSubmitted(true);
        setTimeout(() => setSubmitted(false), 5000);
      })
      .catch(error => console.log(error));
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.placeholder.toLowerCase().replace("your ", "")]: e.target.value });
  };

  return (
    <>
      <button
        className="btn btn-danger position-fixed bottom-0 end-0 m-4"
        onClick={() => setShowForm(!showForm)}
      >
        Hey Boss, Talk to Us!
      </button>

      {showForm && !submitted && (
        <div className="position-fixed top-50 start-50 translate-middle bg-white p-4 rounded shadow">
          <h3>Tell Us What You Think</h3>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <input className="form-control" placeholder="Your Name" onChange={handleChange} required />
            </div>
            <div className="mb-3">
              <input className="form-control" type="email" placeholder="Your Email" onChange={handleChange} required />
            </div>
            <div className="mb-3">
              <textarea className="form-control" placeholder="Your Message" onChange={handleChange} required></textarea>
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
            <button
              type="button"
              className="btn btn-secondary ms-2"
              onClick={() => setShowForm(false)}
            >
              Close
            </button>
          </form>
        </div>
      )}

      {submitted && (
        <>
          <Confetti width={window.innerWidth} height={window.innerHeight} />
          <div className="position-fixed top-50 start-50 translate-middle bg-success text-white p-4 rounded shadow">
            <h3>Thanks, Boss!</h3>
            <p>Use code <strong>BOSS5</strong> for 5% off your next order!</p>
            <button className="btn btn-light" onClick={() => setShowForm(false)}>
              Close
            </button>
          </div>
        </>
      )}
    </>
  );
}

export default Feedback;