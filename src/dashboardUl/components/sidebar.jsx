import { useState } from "react";
import { FaList } from "react-icons/fa6";
import { IoIosCreate } from "react-icons/io";
import { IoLogOut } from "react-icons/io5";
const Sidebar = () => {
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

  const sideBarListing = sidebardetails.map((items, index) => {
    return (
      <div
        key={index}
        className="sidebar-flex"
        style={
          items.names === "Log out"
            ? {
                marginTop: "200px",
                color: "white",
                backgroundColor: "red",
                border: "none",
              }
            : {}
        }
      >
        <div className="icon">{items.icon}</div>
        <h3>{items.names}</h3>
      </div>
    );
  });
  return <section className="sidebar-components">{sideBarListing}</section>;
};

export default Sidebar;
