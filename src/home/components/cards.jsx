const Cards = () => {
  const ticketTestimonials = [
    {
      id: 1,
      name: "Alice Johnson",
      testimonial:
        "Booking my concert ticket was seamless! The process was quick and easy.",
      event: "Rock Concert 2025",
    },
    {
      id: 2,
      name: "Michael Smith",
      testimonial:
        "I loved how I could choose my seat online. Definitely booking again!",
      event: "Broadway Musical",
    },
    {
      id: 3,
      name: "Sophia Lee",
      testimonial:
        "The ticket confirmation was instant, and the app reminded me of the event. Very convenient.",
      event: "Tech Conference",
    },
  ];

  return (
    <div className="testimonials-container">
      {ticketTestimonials.map((item) => (
        <div key={item.id} className="testimonial-card">
          <p className="testimonial-text">"{item.testimonial}"</p>
          <h4 className="testimonial-name">{item.name}</h4>
          <p className="testimonial-event">{item.event}</p>
        </div>
      ))}
    </div>
  );
};

export default Cards;
