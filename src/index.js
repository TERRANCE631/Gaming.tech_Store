import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import { CartProvider } from './Pages/Products/context';
import { BrowserRouter as Router } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { ScrollToTop } from './ScrollToTop/ScrollToTop';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <CartProvider>
        <ScrollToTop />
        <ToastContainer closeButton={false} autoClose={3000} position={"bottom-center"} />
        <App />
      </CartProvider>
    </Router>
  </React.StrictMode>
);