import './App.css'
import { FrontPage } from './pages/FrontPage';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { UserPage } from './pages/UserPage'


function App() {
  return (
    <div>
    <Router>
      <Routes>
        <Route path="/" element={<FrontPage />} />
        <Route path="/user" element={<UserPage />} />
      </Routes>
    </Router>
    </div>
  );
}

export default App;