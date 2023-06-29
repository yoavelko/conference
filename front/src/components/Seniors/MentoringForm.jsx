import "./mentoring-form.css";
import logos from "./mentoringLogo.json";
function MentoringForm() {
  const logo = logos.logos;
  return (
    <div className="mentoring-form-container">
      <div className="mentoring-form-title">
        בוא להיות חלק מקהילת המנטורינג שלנו
      </div>
      <br />
      <div className="logos-mentoring-icon">
        <div className="logos-line1">
          {logo?.map((value, index) => {
            return (
              <div key={index} className="image-logo-mentor">
                <a href={value.link} target="_blank" rel="noopener noreferrer">
                  <img
                    className="image-logo-mentor"
                    src={value.logo}
                    alt=""
                  />
                </a>
              </div>
            );
          })}

        </div>
      </div>
    </div>
  );
}

export default MentoringForm;
