import { useState } from "react";

const TicketCreeation = ({
  ticketCreation,
  handleTicketOnchange,
  handleTicketCreation,
}) => {
  const [list] = useState(["Open", "Close", "In progress"]);

  const listStatus = list.map((status, index) => {
    return (
      <option key={index} value={status} selected={status === "Open"}>
        {status}
      </option>
    );
  });
  return (
    <section>
      <h2>Create your Ticket</h2>

      <form className="signupForm" onSubmit={handleTicketCreation}>
        <div>
          <label htmlFor="title">Title</label>
          <input
            type="text"
            id="title"
            name="title"
            value={ticketCreation.title}
            onChange={handleTicketOnchange}
          />
        </div>
        <div>
          <label htmlFor="description">Description</label>
          <input
            type="text"
            id="description"
            name="description"
            value={ticketCreation.description}
            onChange={handleTicketOnchange}
          />
        </div>
        <div>
          <select
            name="status"
            id="status"
            onChange={handleTicketOnchange}
            value={ticketCreation.status}
          >
            {listStatus}
          </select>
        </div>
        <div>
          <button type="submit">Create</button>
        </div>
      </form>
    </section>
  );
};

export default TicketCreeation;
