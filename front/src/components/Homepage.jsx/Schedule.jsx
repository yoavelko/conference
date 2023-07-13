import "./schedule.css";

function Schedule() {
  return (
    <div className="schedule-container">
      <h2 className="schedule-title">לו"ז הכנס</h2>
      <br />
      <div className="the-schedule">
        <div className="schedule-event-all">
          <div className="arrow-triangle"></div>
          <div className="schedule-event">
            <div className="time-event">18:45-17:30 </div>
            <div> | </div>
            <div className="info-event">התכנסות</div>
          </div>
        </div>
        <br />

        <div className="schedule-event-all">
          <div className="arrow-triangle"></div>
          <div className="schedule-event">
            <div className="time-event">19:00-18:45 </div>
            <div> | </div>
            <div className="info-event"> הזדמנות לפגוש את הבוגרים שלנו</div>
          </div>
        </div>
        <br />

        <div className="big-event">
          <div className="schedule-event-all">
            <div className="arrow-triangle"></div>
            <div className="schedule-event">
              <div className="time-event">19:30-19:00 </div>
              <div> | </div>
              <div className="info-event">דברי פתיחה</div>
            </div>
          </div>
          <br />
          <div className="more-details-event">
            <div className="schedule-event-all">
              <div className="arrow-triangle-mini"></div>
              <div className="schedule-event">
                <div className="info-event-mini">
                  רא"ל (במיל') גבי אשכנזי, שר החוץ לשעבר{" "}
                </div>
              </div>
            </div>
            <br />
            <div className="schedule-event-all">
              <div className="arrow-triangle-mini"></div>
              <div className="schedule-event">
                <div className="info-event-mini">
                  <div>
                    <span>יואב מעוז- </span>
                    <span>מנכ"ל עמותת ידידי עתידים ע"ר</span>
                  </div>
                </div>
              </div>
            </div>
            <br />
            <div className="schedule-event-all">
              <div className="arrow-triangle-mini"></div>
              <div className="schedule-event">
                <div className="info-event-mini">
                  <div> עודד רביד- מנכ"ל בית הספר ללימודי המשך של הטכניון</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <br />
        <div className="schedule-event-all">
          <div className="arrow-triangle"></div>
          <div className="schedule-event">
            <div className="time-event">20:30-19:30 </div>
            <div> | </div>
            <div className="info-event">
              {" "}
              פאנל – פרדוקס הג’וניורים בהנחיית יונתן בן עזרא
            </div>
          </div>
        </div>
        <br />
        <div className="schedule-event-all">
          <div className="arrow-triangle"></div>
          <div className="schedule-event">
            <div className="time-event">21:00-20:30 </div>
            <div> | </div>
            <div className="info-event">
              <div>
                הצגת תוכנית המנטורים – &nbsp;
                <span> התור שלנו לתרום - ניר אלפנדרי, NTO, מיקרוסופט</span>
              </div>
            </div>
          </div>
        </div>
        <br />
        <div className="schedule-event-all">
          <div className="arrow-triangle"></div>
          <div className="schedule-event">
            <div className="time-event">21:15-21:00 </div>
            <div> | </div>
            <div className="info-event">דברי סיכום</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Schedule;
