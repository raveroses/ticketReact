import LoginField from "./components/loginFields";
import { Link } from "react-router-dom";
import { ToastContainer, toast, Bounce } from "react-toastify";

const Login = () => {
  return (
    <section className="signupcontainer">
      <LoginField />
      <Link to="/signup" style={{ color: "white" }}>
        Dont have an account, Sign up
      </Link>

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

export default Login;
