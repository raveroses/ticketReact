import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast, Bounce } from "react-toastify";

const Fields = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(() => {
    try {
      const receive = localStorage.getItem("store");
      return receive
        ? JSON.parse(receive)
        : {
            fullName: "",
            email: "",
            password: "",
          };
    } catch (error) {
      toast.error(error.message);
      return {
        fullName: "",
        email: "",
        password: "",
      };
    }
  });

  const handleUserOnchange = (e) => {
    const { name, value } = e.target;
    setUser((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!user.fullName || !user.email || !user.email) {
      toast.error("Please, check your fields");
      return;
    }

    localStorage.setItem("store", JSON.stringify(user));
    toast.success("Account created successfully");
    setUser({
      fullName: "",
      email: "",
      password: "",
    });
    setTimeout(() => {
      navigate("/login");
    }, 1000);
  };

  return (
    <form className="signupForm" onSubmit={handleSubmit}>
      <div>
        <label htmlFor="fullName">Full Name</label>
        <input
          type="text"
          id="fullName"
          name="fullName"
          value={user.fullName}
          onChange={handleUserOnchange}
        />
      </div>
      <div>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          value={user.email}
          onChange={handleUserOnchange}
        />
      </div>
      <div>
        <label htmlFor="Password">Password</label>
        <input
          type="password"
          id="password"
          name="password"
          value={user.password}
          onChange={handleUserOnchange}
        />
      </div>

      <div>
        <button type="submit">Sign Up</button>
      </div>
    </form>
  );
};
export default Fields;
