import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './pages/App.tsx';
import BusinessDashboard from './pages/BusinessDashboard.tsx';
import './index.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Shop from './pages/Shop.tsx';
import JobPage from './pages/JobPage.tsx';
import EventPage from './pages/EventPage.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path="/home" element={<App />} />
      <Route path="/businessdashboard" element={<BusinessDashboard />} />
      <Route path="/shop" element={<Shop />} />
      <Route path="/jobpage" element={<JobPage />} />
      <Route path="/eventpage" element={<EventPage />} />
    </Routes>
    </BrowserRouter>
  </StrictMode>
);
