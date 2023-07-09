import "./schedule.css";

function Schedule() {
  return (
    <div className="schedule-container">
      <div className="schedule-title">לוז הכנס:</div>
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
                <div className="info-event-mini">רא"ל (במיל') גבי אשכנזי, CYBERPRO, שר החוץ לשעבר</div>
              </div>
            </div>
            <br />
            <div className="schedule-event-all">
              <div className="arrow-triangle-mini"></div>
              <div className="schedule-event">
                <div className="info-event-mini">
                  <div>
                    <span>יואב מעוז- </span>
                    <span>מנכ"ל ידידי עתידים ע"ר</span>
                  </div>
                </div>
              </div>
            </div>
            <br />
            <div className="schedule-event-all">
              <div className="arrow-triangle-mini"></div>
              <div className="schedule-event">
                <div className="info-event-mini">
                  <div>
                    {" "}
                    עודד רביד- מנכ"ל בית הספר ללימודי המשך 
                  </div>
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
            <div className="info-event">פאנל - פרדוקס הג'וניורים</div>
          </div>
        </div>
        <br />
        <div className="schedule-event-all">
          <div className="arrow-triangle"></div>
          <div className="schedule-event">
            <div className="time-event">20:45-20:30 </div>
            <div> | </div>
            <div className="info-event">
              <div>הצגת תוכנית</div>
              <div>המנטורינג- התור שלנו לתרום</div>
            </div>
          </div>
        </div>
        <br />
        <div className="schedule-event-all">
          <div className="arrow-triangle"></div>
          <div className="schedule-event">
            <div className="time-event">21:00-20:45 </div>
            <div> | </div>
            <div className="info-event">הוקרה למנטורים פעילים</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Schedule;
