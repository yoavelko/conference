import { useEffect, useContext } from "react";
import { FixedContext } from "../../contexts/FixedContext";
import "./Homepage.css";
import InvationSummary from "./InvationSummary";
import MiniLocation from "./MiniLocation";
import MiniVideo from "./MiniVideo";
import RegisterForm from "./RegisterForm";
import Schedule from "./Schedule";
import Speakers from "./Speakers";
import Intro from "./Intro";


function Homepage({ isNavigating, setIsNavigating }) {

  const {fix, setFix} = useContext(FixedContext)

  useEffect(() => {
    setFix(true)
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
