import "./speakers.css";
import "./schedule.css";
import Logos from "./../Seniors/mentoringLogo.json";
import SpeakersData from "./speakers.json";

function Speakers() {
  const logo = Logos.logos;
  const speaker = SpeakersData.speakers;
  return (
    <div className="speakers-container">
      <br />
      <br />
      <div className="speakers-title"> הדוברים באירוע: </div>
      <br />
      <br />
      <div className="all-speakers">
        {speaker?.map((speaker, index) => {
          return (
            <div key={index} className="speaker-box">
              <div className="speaker-image">
                <img className="speaker-img" src={speaker.image} alt="" />
              </div>
              <div className="speaker-details">
                <div className="speaker-name">{speaker.fullName}</div>
                <div className="speaker-background">{speaker.description}</div>
              </div>
            </div>
          );
        })}
      </div>
      <div className="schedule-opening">
        <span className="opportunity-red">הזדמנות</span>
        <span className="opportunity"> יחידה במינה</span>
        <br />
        <span className="opportunity">
          לתת <span className="opportunity-red">למישהו</span><br />את{" "}
          <span className="opportunity-red">ההזדמנות</span> הראשונה
        </span>
        
      </div>
      <br />
      <br />
    </div>
  );
}

export default Speakers;
