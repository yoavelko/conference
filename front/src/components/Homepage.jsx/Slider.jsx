import "./slider.css";
import { logos } from "./../Seniors/mentoringLogo.json";
import { Link } from "react-router-dom";
function Slider() {
  return (
    <div className="slider-container">
      <div className="link-to-mentors">
        <h3 id="mentor-hp-header">קהילת המנטורים</h3>
        <p id="mentor-hp-content">
          מטרתו לייצר עבור לוחם והלוחמת "אח גדול" בתעשיה , שילווה את הלוחם יעניק
          לו הכשרה מקצועית ואישית ויכין אותו בצורה המרבית   
          &nbsp;
          <Link className="link-mentors" to="/seniors" state={{ location: "#mentors" }}>
             למידע נוסף...
        </Link>{" "}
        </p>
       
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
