import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Contact from './components/contact/Contact';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path='/' element={<App />}/>
        <Route path='/contact' element={<Contact/>}/>
      </Routes>
    </Router>
    
  </React.StrictMode>
);

