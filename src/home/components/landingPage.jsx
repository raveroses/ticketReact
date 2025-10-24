import HeroSection from "./heroSection";
import useRouteProtection from "../../routeprotection/routeProtector";
const LandingPage = () => {
  useRouteProtection();
  return (
    <div className="container">
      <HeroSection />
    </div>
  );
};

export default LandingPage;
