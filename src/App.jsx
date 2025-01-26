import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginForm from './components/LoginForm';
import LandingPage from './components/LandingPage';
import UserDashboard from './components/UserDashboard';
import AdminDashboard from './components/AdminDashboard';
import Layout from './components/Layout'; // Import Layout

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<Layout />}>
          <Route path="dashboard" element={<UserDashboard />} />
          <Route path="admin-dashboard" element={<AdminDashboard />} />
          <Route path="home" element={<LandingPage />} />
          <Route index element={<LoginForm />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
