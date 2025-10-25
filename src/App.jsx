import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./home/components/landingPage";
import SignUp from "./auth/signup/signup";
import Navbar from "./home/components/navbar";
import Login from "./auth/login/login";
import Dashboard from "./dashboardUl/dashboard";
import Footer from "./home/components/footer";
function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
