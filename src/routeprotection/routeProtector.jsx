import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const useRouteProtection = () => {
  const navigate = useNavigate();

  useEffect(() => {
    try {
      const session = localStorage.getItem("Loginstore");
      if (!session) {
        navigate("/login");
      }
    } catch (error) {
      console.error("Route protection error:", error.message);
      navigate("/login");
    }
  }, [navigate]);
};

export default useRouteProtection;
