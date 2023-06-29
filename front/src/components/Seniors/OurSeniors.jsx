import Carousel from "./Carousel";
import "./our-seniors.css";
import SeniorData from "./seniors.json";

function OurSeniors() {
  const senior = SeniorData.seniros;
  return (
    <div className="our-seniors-container">
      <div className="our-seniors-title">הבוגרים שלנו</div>
      <br />
      <div className="our-senior-opening-div">
        <div className="our-seniors-openning">
          קצת מהישגי הבוגרים שלנו שסיימו את הקורס...
        </div>
      </div>
      <br />
      <br />
      <div className="carousel-div">
        <Carousel>
          {senior?.map((senior, index) => {
            return(
            <div key={index} className="senior-box-all">
              <div className="arrow-senior"></div>
              <div className="senior-box">
                <div className="image-senior-box">
                  <img
                    className="image-senior-box"
                    src={senior.image}
                    alt=""
                  />
                </div>
                <div className="details-senior">
                  <div className="senior-dry">
                    <div className="senior-name">{senior.fullName} </div>
                  </div>
                  <div className="senior-job-title" dir="rtl">
                    <div> {senior.role} </div>
                  </div>
                </div>
              </div>
            </div>
            )
          })}
        </Carousel>
      </div>
      <div className="responsive-seniors">
      {senior?.map((senior, index) => {
            return(
            <div key={index} className="senior-box-all">
              <div className="arrow-senior"></div>
              <div className="senior-box">
                <div className="image-senior-box">
                  <img
                    className="image-senior-box"
                    src={senior.image}
                    alt=""
                  />
                </div>
                <div className="details-senior">
                  <div className="senior-dry">
                    <div className="senior-name">{senior.fullName} </div>
                  </div>
                  <div className="senior-job-title" dir="rtl">
                    <div> {senior.role} </div>
                  </div>
                </div>
              </div>
            </div>
            )
          })}
      </div>
    </div>
  );
}

export default OurSeniors;
