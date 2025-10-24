import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header>
      <div className="logo">
        <h2>Diamond Ticket</h2>
      </div>
      <nav className="navbar">
        <Link to={"/login"}>Login</Link>
        <Link to="/signup"> Get Started</Link>
        <Link to={"/dashboard"}>Dashboard</Link>
        <Link>Tickets</Link>
      </nav>
    </header>
  );
};

export default Navbar;
