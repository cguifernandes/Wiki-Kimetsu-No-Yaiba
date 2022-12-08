import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Link from './components/Link/link';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter Basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path="/Wiki-Demon-Slayer" element={<App />} />
        <Route path="/Wiki-Demon-Slayer/search" element={<Link />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

