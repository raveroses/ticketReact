import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaTimes } from "react-icons/fa";
import { useState } from "react";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleOpen = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };
  return (
    <header>
      <div className="logo">
        <h2>Diamond Ticket</h2>
      </div>

      <nav className="navbars">
        <Link to={"/login"}>Login</Link>
        <Link to="/signup"> Get Started</Link>
        <Link to={"/dashboard"}>Dashboard</Link>
        <Link to={"/dashboard"}>Ticket Management screen</Link>
      </nav>

      <div style={{ display: isOpen ? "block" : "none" }}>
        <nav className="navbar">
          <h2 onClick={handleClose}>
            <FaTimes />
          </h2>
          <Link to={"/login"}>Login</Link>
          <Link to="/signup"> Get Started</Link>
          <Link to={"/dashboard"}>Dashboard</Link>
          <Link to={"#"}>Ticket Management screen</Link>
        </nav>
      </div>

      <div className="hamburger" onClick={handleOpen}>
        <GiHamburgerMenu />
      </div>
    </header>
  );
};

export default Navbar;
