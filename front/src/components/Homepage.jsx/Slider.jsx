import "./slider.css";
import { logos } from "./../Seniors/mentoringLogo.json";
import { Link } from "react-router-dom";
function Slider() {
  return (
    <div className="slider-container">
      <div className="link-to-mentors">
        <h2 className="mentor-comunity-title">שיתופי פעולה עם תוכנית לוחמים להייטק</h2>
      </div>
      <div className="only-the-slider" dir="ltr">
        <div className="logos">
          <div className="logos-slide">
            {logos?.map((img, index) => {
              return (
                <a
                  key={index}
                  href={img.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={img.logo} alt="logo" />
                </a>
              );
            })}
          </div>
          <div className="logos-slide">
            {logos?.map((img, index) => {
              return (
                <a
                  key={index}
                  href={img.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={img.logo} alt="logo" />
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Slider;
