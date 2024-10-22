import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import PlansPage from './pages/PlansPage';
import { UserProvider } from './contexts/UserContext';
import SummaryPage from './pages/SummaryPage';

const App = () => {
  return (
    <UserProvider>
      <Router>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/plans" element={<PlansPage />} />
          <Route path="/summary" element={<SummaryPage />} />
        </Routes>
      </Router>
    </UserProvider>
  );
};

export default App;

