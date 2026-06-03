import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navigation from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import Register from "./pages/Register";
import AdminDashboard from "./pages/admin/Dashboard";
import AdminUsers from "./pages/admin/Users";
import AdminData from "./pages/admin/Data";
import AdminFiles from "./pages/admin/Files";

function App() {
  return (
    <Router>
      <Navigation />
      <Routes>
        {/* 公开页面 */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        
        {/* 管理后台页面 */}
        <Route path="/admin/dashboard" element={<AdminDashboard />} />
        <Route path="/admin/users" element={<AdminUsers />} />
        <Route path="/admin/data" element={<AdminData />} />
        <Route path="/admin/files" element={<AdminFiles />} />
      </Routes>
    </Router>
  );
}

export default App;
