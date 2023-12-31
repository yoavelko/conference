import Carousel from "./Carousel";
import "./our-seniors.css";
import SeniorData from "./seniors.json";

function OurSeniors() {
  const senior = SeniorData.seniros;
  return (
    <div className="our-seniors-container">
      <br />
      <h1 className="our-seniors-title">הבוגרים שלנו</h1>
      <br />
      <div className="our-senior-opening-div">
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
                    <h3 className="senior-name">{senior.fullName} </h3>
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
      <div className="responsive-seniors-flex">
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
    </div>
  );
}

export default OurSeniors;
