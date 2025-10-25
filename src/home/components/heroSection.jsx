const HeroSection = () => {
  return (
    <div className="hero-section">
      <div className="circle"></div>
      <div className="texts">
        <h2>Manage Your Ticket with Ease</h2>
        <p>Track, update, and resolve issues faster.</p>

        <div className="btns">
          <button>Get Started</button>
          <button>Login</button>
        </div>
      </div>
      <div className="image">
        <img src="/ticket.jpg" alt="hero-section" />
      </div>
    </div>
  );
};

export default HeroSection;
