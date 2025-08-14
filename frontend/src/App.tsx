import './App.css'
import { FrontPage } from './pages/FrontPage';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { UserPage } from './pages/UserPage'
import LoginForm from './components/LoginForm';
import { AuthProvider } from './authContext';


function App() {
  return (
    <div>
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<FrontPage />} />
          <Route path="/user" element={<UserPage />} />
          <Route path="/login" element={<LoginForm />} />
        </Routes>
      </Router>
    </AuthProvider>
    </div>
  );
}

export default App;