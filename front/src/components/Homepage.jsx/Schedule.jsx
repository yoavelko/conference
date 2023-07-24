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
            <div className="time-event">17:45-17:30 </div>
            <div> | </div>
            <div className="info-event">התכנסות</div>
          </div>
        </div>
        <br />

        <div className="schedule-event-all">
          <div className="arrow-triangle"></div>
          <div className="schedule-event">
            <div className="time-event">18:30-17:45</div>
            <div> | </div>
            <div className="info-event"> הזדמנות לפגוש את הבוגרים שלנו</div>
          </div>
        </div>
        <br />

        <div className="big-event">
          <div className="schedule-event-all">
            <div className="arrow-triangle"></div>
            <div className="schedule-event">
              <div className="time-event"> 18:45-18:30 </div>
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
                  <div> עודד רביב- מנכ"ל בית הספר ללימודי המשך של הטכניון</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <br />
        <div className="big-event">
          <div className="schedule-event-all">
            <div className="arrow-triangle yonathan-triangle"></div>
            <div className="schedule-event">
              <div className="time-event yonathan"> 19:15-18:45 </div>
              <div> | </div>
              <div className="info-event">
                {" "}
                פאנל – "פרדוקס הג’וניורים" בהנחיית יונתן בן עזרא, ובהשתתפות:
              </div>
            </div>
          </div>
          <br />
          <div className="more-details-event">
            <div className="schedule-event-all">
              <div className="arrow-triangle-mini"></div>
              <div className="schedule-event">
                <div className="info-event-mini">
                  אלירן עפרון, Startup Solutions Architect, AWS{" "}
                </div>
              </div>
            </div>
            <br />
            <div className="schedule-event-all">
              <div className="arrow-triangle-mini"></div>
              <div className="schedule-event">
                <div className="info-event-mini">
                  <div>
                    נועה ליכטינג, Talent Acquisition Specialist, Playtika
                  </div>
                </div>
              </div>
            </div>
            <br />
            <div className="schedule-event-all">
              <div className="arrow-triangle-mini"></div>
              <div className="schedule-event">
                <div className="info-event-mini">
                  <div>גלעד לוי, Principal Software Eng Mgr, Microsoft</div>
                </div>
              </div>
            </div>
            <br />
            <div className="schedule-event-all">
              <div className="arrow-triangle-mini"></div>
              <div className="schedule-event">
                <div className="info-event-mini">
                  <div>עמית אל על, Full-Stack Developers, Aeronautic</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <br />
        <div className="big-event">
          <div className="schedule-event-all">
            <div className="arrow-triangle yonathan-triangle"></div>
            <div className="schedule-event">
              <div className="time-event yonathan"> 19:45-19:15</div>
              <div> | </div>
              <div className="info-event">
                פאנל – "יזמות, חדשנות ורוח לחימה" בהנחיית הילה ברנר, ובהשתתפות:
              </div>
            </div>
          </div>
          <br />
          <div className="more-details-event">
            <div className="schedule-event-all">
              <div className="arrow-triangle-mini"></div>
              <div className="schedule-event">
                <div className="info-event-mini">
                  יעל ויזל, CEO & Co-founder, Zeekit{" "}
                </div>
              </div>
            </div>
            <br />
            <div className="schedule-event-all">
              <div className="arrow-triangle-mini"></div>
              <div className="schedule-event">
                <div className="info-event-mini">
                  <div>
                    אלוף (במיל') ליאור כרמלי, Head of IDF Digital &
                    Cybersecurity Directorate
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
                    הילה רום, Co-Founder & Managing Partner, Runi Ventures
                  </div>
                </div>
              </div>
            </div>
            <br />
            <div className="schedule-event-all">
              <div className="arrow-triangle-mini"></div>
              <div className="schedule-event">
                <div className="info-event-mini">
                  <div>יואב יזהר-פראטו, CEO & Co-founder, Skai</div>
                </div>
              </div>
            </div>
            <br />
            <div className="schedule-event-all">
              <div className="arrow-triangle-mini"></div>
              <div className="schedule-event">
                <div className="info-event-mini">
                  <div>
                    בתאל בלאיש-סולטניק, Chief Business Operations, BeeHero
                  </div>{" "}
                </div>
              </div>
            </div>
          </div>
          <br />
        </div>
        <br />
        <div className="big-event">
          <div className="schedule-event-all">
            <div className="arrow-triangle mentor-big-event-triangle"></div>
            <div className="schedule-event">
              <div className="time-event mentor-big-event">20:15-19:45 </div>
              <div> | </div>
              <div className="info-event">
                הצגת תוכנית המנטורינג – התור שלנו לתרום
              </div>
            </div>
          </div>
          <br />
          <div className="more-details-event">
            <div className="schedule-event-all">
              <div className="arrow-triangle-mini"></div>
              <div className="schedule-event">
                <div className="info-event-mini">
                  ניר אלפנדרי, Microsoft, NTO
                </div>
              </div>
            </div>
            <br />
          </div>
        </div>
        <div className="schedule-event-all">
          <div className="arrow-triangle"></div>
          <div className="schedule-event">
            <div className="time-event">20:30-20:15 </div>
            <div> | </div>
            <div className="info-event">דברי סיכום</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Schedule;
