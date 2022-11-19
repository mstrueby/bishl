import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  BrowserRouter, 
  Routes, 
  Route,
} from "react-router-dom";

import Venue from './pages/Venue'
import Venues from './pages/Venues'
import NewVenue from './pages/NewVenue'


import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="venues" element={<Venues />} />
        <Route path="newvenue" element={<NewVenue />} />
        <Route path="venue/:id" element={<Venue />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();