import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './pages/App.tsx';
import Auth from './pages/auth.tsx';
import BusinessDashboard from './pages/BusinessDashboard.tsx';
import './index.css';
import Shop from './pages/Shop.tsx';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import CreateEvent from './compornent/CreateEvent.tsx';
import Header from './compornent/Header.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
    <Header />
    <Routes>
      <Route path="/" element={<Navigate to="/home" />} />
      <Route path="/auth" element={<Auth />}/>
      <Route path="/home" element={<App />} />
      <Route path="/businessdashboard" element={<BusinessDashboard />} />
      <Route path="/shop" element={<Shop />} />

      <Route path="/create-event" element={<CreateEvent />} />
    </Routes>
    </BrowserRouter>
  </StrictMode>
);
