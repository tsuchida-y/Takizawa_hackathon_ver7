import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './pages/App.tsx';
import Auth from './pages/auth.tsx';
import BusinessDashboard from './pages/BusinessDashboard.tsx';
import './index.css';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import CreateEvent from './compornent/CreateEvent.tsx';
import CreateJob from './compornent/CreateJobs.tsx';


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Navigate to="/home" />} />
      <Route path="/auth" element={<Auth />}/>
      <Route path="/home" element={<App />} />
      <Route path="/businessdashboard" element={<BusinessDashboard />} />

      <Route path="/create-event" element={<CreateEvent />} />
      <Route path="/create-job" element={<CreateJob />} />
    </Routes>
    </BrowserRouter>
  </StrictMode>
);
