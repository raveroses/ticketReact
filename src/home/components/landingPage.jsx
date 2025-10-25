import HeroSection from "./heroSection";
import useRouteProtection from "../../routeprotection/routeProtector";
import Cards from "./cards";
const LandingPage = () => {
  useRouteProtection();
  return (
    <div className="container">
      <HeroSection />
      <div>
        <Cards />
      </div>
    </div>
  );
};

export default LandingPage;
