import React, { useState } from 'react';
import './index.css';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Categories from './components/Categories';
import Feedback from './components/Feedback';
import Cart from './components/Cart';
import axios from 'axios';

function App() {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const removeFromCart = (index) => {
    setCart(cart.filter((_, i) => i !== index));
  };

  const checkout = (total, cartItems) => {
    axios.post('http://localhost:5000/api/create-order', {
      amount: total,
      products: cartItems.map(item => ({ name: item.name, price: item.price })),
    })
      .then(response => {
        const { orderId, key } = response.data;
        const options = {
          key: key,
          amount: total * 100,
          currency: "INR",
          name: "Auto Spare Parts",
          description: "Test Transaction",
          order_id: orderId,
          handler: function (response) {
            alert('Payment successful! Payment ID: ' + response.razorpay_payment_id);
            setCart([]);
          },
          prefill: {
            name: "Test User",
            email: "test@example.com",
            contact: "9999999999",
          },
          theme: {
            color: "#F37254",
          },
        };
        const rzp = new window.Razorpay(options);
        rzp.open();
      })
      .catch(error => {
        console.log(error);
        alert('Failed to create order');
      });
  };

  return (
    <Router>
      <Navbar />
      <Hero />
      <Categories addToCart={addToCart} />
      <Feedback />
      <Cart cart={cart} removeFromCart={removeFromCart} checkout={checkout} />
    </Router>
  );
}

export default App;