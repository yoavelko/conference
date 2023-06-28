import { useEffect } from "react";
import "./Homepage.css";
import InvationSummary from "./InvationSummary";
import MiniLocation from "./MiniLocation";
import MiniVideo from "./MiniVideo";
import RegisterForm from "./RegisterForm";
import Schedule from "./Schedule";
import Speakers from "./Speakers";
import Intro from "./Intro";



function Homepage({ isNavigating, setIsNavigating }) {
  useEffect(() => {
    if (isNavigating) {
      window.scrollTo({ top: 5000 });
      setIsNavigating(false);
    }
  }, []);
  return (
    <div className="homepage-container">
      <Intro />
      <InvationSummary />
      <Schedule />
      <Speakers />
      <MiniVideo />
      <MiniLocation />
      <RegisterForm />
    </div>
  );
}

export default Homepage;
