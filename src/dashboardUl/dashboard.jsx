import Sidebar from "./components/sidebar";
import { MdSpaceDashboard } from "react-icons/md";
import TicketCreeation from "./components/ticketcreation";
import { useState } from "react";
import TicketList from "./components/ticketList";
import StatusList from "./components/statusList";
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
  const [editIndex, setEditIndex] = useState(null);

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

    let updatedList;

    if (editIndex !== null) {
      updatedList = ticketCreationList.map((ticket, index) =>
        index === editIndex ? ticketCreation : ticket
      );
      setEditIndex(null);
      console.log("Ticket updated successfully");
    } else {
      updatedList = [...ticketCreationList, ticketCreation];

      console.log(updatedList);
    }
    localStorage.setItem("store", JSON.stringify(updatedList));
    setTicketCreationList(updatedList);
    setTicketCreation({
      title: "",
      description: "",
      status: "",
    });
  };

  const handleDelete = (value) => {
    const updatedList = ticketCreationList.filter(
      (ticket) => ticket.title !== value
    );
    setTicketCreationList(updatedList);
    localStorage.setItem("store", JSON.stringify(updatedList));
  };

  const handleEdit = (index) => {
    const ticketToEdit = ticketCreationList[index];
    setTicketCreation(ticketToEdit);
    setEditIndex(index);
  };

  

  return (
    <section className="sidebar-container">
      <StatusList ticketCreationList={ticketCreationList} />
      <div className="second-sidebar-container">
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
            handleEdit={handleEdit}
          />
        </div>
      </div>
    </section>
  );
};

export default Dashboard;
