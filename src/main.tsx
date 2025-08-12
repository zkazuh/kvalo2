import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import PepeTrackerDashboard from './pages/PepeTrackerDashboard';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/pepe" element={<PepeTrackerDashboard />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
