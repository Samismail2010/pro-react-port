import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Contact from './components/contact/Contact';
import Resume from './components/resume/Resume';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path='/' element={<App />}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/resume' element={<Resume/>} />
      </Routes>
    </Router>
    
  </React.StrictMode>
);

