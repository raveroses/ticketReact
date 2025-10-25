import { useState } from "react";
import { FaList } from "react-icons/fa6";
import { IoIosCreate } from "react-icons/io";
import { IoLogOut } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import useRouteProtection from "../../routeprotection/routeProtector";
const Sidebar = ({ handlleOpeningTab }) => {
  useRouteProtection();
  const [sidebardetails] = useState([
    {
      icon: <FaList />,
      names: " Ticket List",
    },
    {
      icon: <IoIosCreate />,
      names: "Create Ticket",
    },
    {
      icon: <IoLogOut />,
      names: "Log out",
    },
  ]);

  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem("Loginstore");
    navigate("/login");
  };

  const sideBarListing = sidebardetails.map((items, index) => {
    return (
      <div
        key={index}
        className="sidebar-flex"
        style={
          items.names === "Log out"
            ? {
                marginTop: "0px",
                color: "white",
                backgroundColor: "red",
                border: "none",
              }
            : {}
        }
        onClick={() => {
          if (items.names === "Log out") {
            handleLogout();
          }

          handlleOpeningTab(items.names);
        }}
      >
        <div className="icon">{items.icon}</div>
        <h3>{items.names}</h3>
      </div>
    );
  });
  return <section className="sidebar-components">{sideBarListing}</section>;
};

export default Sidebar;
