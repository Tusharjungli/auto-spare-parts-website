import React, { useState } from 'react';
import Confetti from 'react-confetti';

function Feedback() {
  const [showForm, setShowForm] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000); // Confetti for 5 seconds
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
              <input className="form-control" placeholder="Your Name" required />
            </div>
            <div className="mb-3">
              <input className="form-control" type="email" placeholder="Your Email" required />
            </div>
            <div className="mb-3">
              <textarea className="form-control" placeholder="Your Feedback" required></textarea>
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