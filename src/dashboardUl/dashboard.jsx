import Sidebar from "./components/sidebar";
import { MdSpaceDashboard } from "react-icons/md";
import TicketCreeation from "./components/ticketcreation";
import { useState } from "react";
import TicketList from "./components/ticketList";
import StatusList from "./components/statusList";
import { ToastContainer, toast, Bounce } from "react-toastify";
const Dashboard = () => {
  const [ticketCreation, setTicketCreation] = useState({
    title: "",
    description: "",
    status: "",
  });
  const [ticketCreationList, setTicketCreationList] = useState(() => {
    try {
      const receive = localStorage.getItem("store");
      const parsed = receive ? JSON.parse(receive) : [];
      return Array.isArray(parsed) ? parsed : [];
    } catch (error) {
      console.error("Error parsing localStorage:", error);
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

    if (
      !ticketCreation.title ||
      !ticketCreation.description ||
      !ticketCreation.status
    ) {
      toast.error("please,check all fields");
      return;
    }

    let updatedList;

    if (editIndex !== null) {
      updatedList = ticketCreationList.map((ticket, index) =>
        index === editIndex ? ticketCreation : ticket
      );
      setEditIndex(null);
      toast.success("Ticket updated successfully");
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
    toast.success("Ticket Deleted successfully");
    setTicketCreationList(updatedList);
    localStorage.setItem("store", JSON.stringify(updatedList));
  };

  const handleEdit = (index) => {
    const ticketToEdit = ticketCreationList[index];
    toast.success("Ticket Edited successfully");
    setTicketCreation(ticketToEdit);
    setEditIndex(index);
  };

  const [isOpen, setIsOpen] = useState("");
  const handlleOpeningTab = (value) => {
    setIsOpen(value);
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

          <Sidebar isOpen={isOpen} handlleOpeningTab={handlleOpeningTab} />
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
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </section>
  );
};

export default Dashboard;
