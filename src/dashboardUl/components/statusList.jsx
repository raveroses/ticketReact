const StatusList = ({ ticketCreationList }) => {
  const statusLists = [
    { label: "Total Tickets", value: ticketCreationList.length },
    {
      label: "Open Tickets",
      value: ticketCreationList.filter((item) => item.status === "open").length,
    },

    {
      label: "Resolve Tickets",
      value: ticketCreationList.filter((item) => item.status === "closed")
        .length,
    },
  ];

  return (
    <section className="status-list">
      {statusLists.map((status, index) => (
        <div key={index} className="status-item">
          <p>{status.label}</p>
          <h3>{status.value}</h3>
        </div>
      ))}
    </section>
  );
};

export default StatusList;
