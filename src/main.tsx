import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import BusinessDashboard from './pages/BusinessDashboard.tsx';
import './index.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/businessdashboard" element={<BusinessDashboard />} />
    </Routes>
    </BrowserRouter>
  </StrictMode>
);
