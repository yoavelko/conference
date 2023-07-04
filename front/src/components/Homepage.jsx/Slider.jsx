import "./slider.css";
import { logos } from "./../Seniors/mentoringLogo.json";
import { Link } from "react-router-dom";
function Slider() {
  return (
    <div className="slider-container" dir="ltr">
      <div className="link-to-mentors">
        <Link to="/seniors" state={{ location: "#mentors" }}>
          לקהילת המנטורים
        </Link>{" "}
      </div>
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
  );
}

export default Slider;
