import Carousel from "./Carousel";
import "./our-seniors.css";

function OurSeniors() {
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
          <div className="senior-box-all">
            <div className="arrow-senior"></div>
            <div className="senior-box">
              <div className="image-senior-box">
                <img
                  className="image-senior-box"
                  src="https://images.pexels.com/photos/4307869/pexels-photo-4307869.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                  alt=""
                />
              </div>
              <div className="details-senior">
                <div className="senior-dry">
                  <div className="senior-name">עמית ברחנין</div>
                </div>

                <div className="senior-job-title" dir="rtl">
                  <div> מפתח FullStack בחברת Intel</div>
                </div>
              </div>
            </div>
          </div>

          <div className="senior-box-all">
            <div className="arrow-senior"></div>
            <div className="senior-box">
              <div className="image-senior-box">
                <img
                  className="image-senior-box"
                  src="https://img.freepik.com/free-photo/close-up-portrait-young-indian-man-with-beard-white-shirt-isolated-standing-smiling_155003-23823.jpg?w=2000"
                  alt=""
                />
              </div>
              <div className="details-senior">
                <div className="senior-dry">
                  <div className="senior-name"> עומר אצילי</div>
                </div>
                <div className="senior-job-title" dir="rtl">
                  <div> מפתח Front-End בחברת WINWARD</div>
                </div>
              </div>
            </div>
          </div>

          <div className="senior-box-all">
            <div className="arrow-senior"></div>
            <div className="senior-box">
              <div className="image-senior-box">
                <img
                  className="image-senior-box"
                  src="https://t3.ftcdn.net/jpg/03/96/78/06/360_F_396780640_mO95sH5ITG2sD3RdOd7fh3olapEkupXW.jpg"
                  alt=""
                />
              </div>
              <div className="details-senior">
                <div className="senior-dry">
                  <div className="senior-name">אוסקר גלוך</div>
                </div>
                <div className="senior-job-title" dir="rtl">
                  <div> מנהל מוצר בחברת Unity</div>
                </div>
              </div>
            </div>
          </div>

          <div className="senior-box-all">
            <div className="arrow-senior"></div>
            <div className="senior-box">
              <div className="image-senior-box">
                <img
                  className="image-senior-box"
                  src="https://live.staticflickr.com/65535/48977465818_fa612bde63_b.jpg"
                  alt=""
                />
              </div>
              <div className="details-senior">
                <div className="senior-dry">
                  <div className="senior-name"> ליאל עבדה </div>
                </div>
                <div className="senior-job-title" dir="rtl">
                  <div>תוקף סייבר בחברת Cyberness</div>
                </div>
              </div>
            </div>
          </div>

        </Carousel>
      </div>
      
    </div>
  );
}

export default OurSeniors;
