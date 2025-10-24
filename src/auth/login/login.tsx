import LoginField from "./components/loginFields";
import { Link } from "react-router-dom";
const Login = () => {
  return (
    <section className="signupcontainer">
      <LoginField />
      <Link to="/signup" style={{ color: "white" }}>
        Dont have an account, Sign up
      </Link>
    </section>
  );
};

export default Login;
