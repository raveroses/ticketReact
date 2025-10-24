const TicketList = ({ ticketCreationList, handleDelete }) => {
  const ticketListing = ticketCreationList.map((ticket, index) => {
    return (
      <div className="ticket-list" key={index}>
        <h2>{ticket.title}</h2>
        <p>{ticket.description}</p>
        <p>
          status <span>{ticket.status}</span>
        </p>
        <div className="actn-btn">
          <button className="edit">Edit</button>
          <button className="delete" onClick={() => handleDelete(ticket.title)}>
            Delete
          </button>
        </div>
      </div>
    );
  });
  return <section className="ticket-list-container">{ticketListing}</section>;
};

export default TicketList;
