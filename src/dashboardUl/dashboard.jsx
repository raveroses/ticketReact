import Sidebar from "./components/sidebar";
import { MdSpaceDashboard } from "react-icons/md";
import TicketCreeation from "./components/ticketcreation";
import { useState } from "react";
import TicketList from "./components/ticketList";
const Dashboard = () => {
  const [ticketCreation, setTicketCreation] = useState({
    title: "",
    description: "",
    status: "",
  });
  const [ticketCreationList, setTicketCreationList] = useState(() => {
    try {
      const stored = localStorage.getItem("store");
      return stored ? JSON.parse(stored) : [];
    } catch (error) {
      console.error("Failed to load tickets:", error);
      return [];
    }
  });

  const handleTicketOnchange = (e) => {
    const { name, value } = e.target;
    setTicketCreation((prev) => ({ ...prev, [name]: value }));
  };

  const handleTicketCreation = (e) => {
    e.preventDefault();
    console.log("clicked");
    if (
      !ticketCreation.title ||
      !ticketCreation.description ||
      !ticketCreation.status
    ) {
      console.log("please,check all fields");
      return;
    }

    const updatedList = [...ticketCreationList, ticketCreation];

    localStorage.setItem("store", JSON.stringify(updatedList));
    setTicketCreationList(updatedList);
    console.log(updatedList);

    setTicketCreation({
      title: "",
      description: "",
      status: "",
    });
  };

  const handleDelete = (value) => {
    const updatedList = ticketCreationList.filter((ticket) => ticket.title !== value);
    setTicketCreationList(updatedList);
    localStorage.setItem("store", JSON.stringify(updatedList));
  };

  return (
    <section className="sidebar-container">
      <div className="sidebar">
        <div className="top">
          <div className="icon">
            <MdSpaceDashboard />
          </div>
          <h2>Dashboard</h2>
        </div>

        <Sidebar />
      </div>

      <div className="creation">
        <TicketCreeation
          ticketCreation={ticketCreation}
          handleTicketOnchange={handleTicketOnchange}
          handleTicketCreation={handleTicketCreation}
        />

        <TicketList
          ticketCreationList={ticketCreationList}
          handleDelete={handleDelete}
        />
      </div>
    </section>
  );
};

export default Dashboard;
