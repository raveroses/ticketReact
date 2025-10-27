import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast, Bounce } from "react-toastify";

const LoginField = () => {
  const navigate = useNavigate();
  const [userLogin, setUserLogin] = useState(() => {
    try {
      const receive = localStorage.getItem("Loginstore");
      return receive
        ? JSON.parse(receive)
        : {
            email: "",
            password: "",
          };
    } catch (error) {
      toast.error(error.message);
      return {
        email: "",
        password: "",
      };
    }
  });

  const [fetchUserDetail] = useState(() => {
    try {
      const receive = localStorage.getItem("store");
      return receive
        ? JSON.parse(receive)
        : {
            email: "",
            password: "",
          };
    } catch (error) {
      toast.error(error.message);
      return {
        email: "",
        password: "",
      };
    }
  });
  const handleUserOnchange = (e) => {
    const { name, value } = e.target;
    setUserLogin((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !userLogin.email ||
      userLogin.email !== fetchUserDetail.email ||
      !userLogin.password ||
      userLogin.password !== fetchUserDetail.password
    ) {
      toast.error("Please, check your fields");
      return;
    }

    localStorage.setItem("Loginstore", JSON.stringify(userLogin));
    toast.success("Login successfully");
    setUserLogin({
      email: "",
      password: "",
    });
    setTimeout(() => {
      navigate("/");
    }, 1000);
  };

  return (
    <form className="signupForm" onSubmit={handleSubmit}>
      <div>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          value={userLogin.email}
          onChange={handleUserOnchange}
        />
      </div>
      <div>
        <label htmlFor="Password">Password</label>
        <input
          type="password"
          id="password"
          name="password"
          value={userLogin.password}
          onChange={handleUserOnchange}
        />
      </div>

      <div>
        <button type="submit">Login</button>
      </div>
    </form>
  );
};
export default LoginField;
