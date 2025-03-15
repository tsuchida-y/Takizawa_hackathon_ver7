import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './pages/App.tsx';
import Auth from './pages/auth.tsx';
import BusinessDashboard from './pages/BusinessDashboard.tsx';
import './index.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path="/auth" element={<Auth />}/>
      <Route path="/home" element={<App />} />
      <Route path="/businessdashboard" element={<BusinessDashboard />} />
    </Routes>
    </BrowserRouter>
  </StrictMode>
);
