import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  BrowserRouter, 
  Routes, 
  Route,
} from "react-router-dom";

import Venue from './pages/Venue'
import Venues from './pages/Venues'
import AdmVenues from './admin/pages/AdmVenues'
import EditVenue from './admin/pages/EditVenue'
import NewVenue from './admin/pages/NewVenue'


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
        <Route path="venues/:id" element={<Venue />} />
        <Route path="admin/venues" element={<AdmVenues />} />
        <Route path="admin/venues/:id" element={<EditVenue />} />
        <Route path="admin/newvenue" element={<NewVenue />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
