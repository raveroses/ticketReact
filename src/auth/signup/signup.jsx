import Fields from "./components/fields";
import { ToastContainer, Bounce } from "react-toastify";

const SignUp = () => {
  return (
    <section className="signupcontainer">
      <h3>Please, Sign Up</h3>
      <Fields />
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

export default SignUp;
