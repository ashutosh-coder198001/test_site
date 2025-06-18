import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import WebDevelopmentService from './pages/services/WebDevelopmentService';
import CloudSolutionsService from './pages/services/CloudSolutionsService';
import CybersecurityService from './pages/services/CybersecurityService';
import NetworkInfrastructureService from './pages/services/NetworkInfrastructureService';
import ManagedITService from './pages/services/ManagedITService';
import DataAnalyticsERPCRMService from './pages/services/DataAnalyticsERPCRMService';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfService from './pages/TermsOfService';
import CookiePolicy from './pages/CookiePolicy';

function App() {
  return (
    <Router>
      <div className="min-h-screen">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services/web-development" element={<WebDevelopmentService />} />
          <Route path="/services/cloud-solutions" element={<CloudSolutionsService />} />
          <Route path="/services/cybersecurity" element={<CybersecurityService />} />
          <Route path="/services/network-infrastructure" element={<NetworkInfrastructureService />} />
          <Route path="/services/managed-it" element={<ManagedITService />} />
          <Route path="/services/data-analytics-erp-crm" element={<DataAnalyticsERPCRMService />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-of-service" element={<TermsOfService />} />
          <Route path="/cookie-policy" element={<CookiePolicy />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;