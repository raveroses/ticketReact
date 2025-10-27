const StatusList = ({ ticketCreationList }) => {
  const safeList = Array.isArray(ticketCreationList) ? ticketCreationList : [];
  const statusLists = [
    { label: "Total Tickets", value: safeList.length },
    {
      label: "Open Tickets",
      value: safeList.filter((item) => item.status === "open").length,
    },

    {
      label: "Resolve Tickets",
      value: safeList.filter((item) => item.status === "closed").length,
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
