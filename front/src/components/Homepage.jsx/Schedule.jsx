import './schedule.css'

function Schedule() {
  return (
    <div className='schedule-container'>
        <div className="schedule-opening">
            <div>כל אחד היה</div>
            <div>ג'וניור פעם</div>
        </div>
        <br />
        <div className="schedule-subtitle">
            <div>מי היה הראשון שנתן לך </div>
            <div>הזדמנות?</div>
        </div>
        <br />
        <div className="schedule-title">לוז הכנס:</div>
        <br />
        <div className="the-schedule">
            <div className="schedule-event-all">
                <div className="arrow-triangle">
                    
                </div>
                <div className='schedule-event'>
                <div className="time-event">18:45-17:30 </div>
                <div> | </div>
                <div className="info-event">התכנסות</div>
                </div>
            </div>
            <br />
            <br />
            <div className="big-event">
            <div className="schedule-event-all">
                <div className="arrow-triangle">
                </div>
                <div className='schedule-event'>
                <div className="time-event">19:30-19:00 </div>
                <div> | </div>
                <div className="info-event">דברי פתיחה</div>
                </div>
            </div>
            <div className="more-details-event">
            <div className="schedule-event-all">
                <div className="arrow-triangle">
                </div>
                <div className='schedule-event'>
                <div className="info-event"> רא"ל  (במיל) - גבי אשכנזי </div>
                </div>
            </div>
            <br />
            <div className="schedule-event-all">
                <div className="arrow-triangle">
                </div>
                <div className='schedule-event'>
                <div className="info-event"> 
                <div>מנכ"ל בית הספר</div>
                <div>ללימודי המשך של </div>
                <div> הטכניון- עודד רביד  </div>
                 </div>
                </div>
            </div>
            <br />
            <div className="schedule-event-all">
                <div className="arrow-triangle">
                </div>
                <div className='schedule-event'>
                <div className="info-event"> 
                <div><span>COO</span> <span>סייברפרו ישראל - </span></div>
                <div>ברק לייבוביץ'</div>
                </div>
                </div>
            </div>
            </div>
            </div>
            <br />
            <br />
            <div className="schedule-event-all">
                <div className="arrow-triangle">
                    
                </div>
                <div className='schedule-event'>
                <div className="time-event">20:30-19:30 </div>
                <div> | </div>
                <div className="info-event">פאנל - פרדוקס הג'וניורים</div>
                </div>
            </div>
            <br />
            <br />
            <div className="schedule-event-all">
                <div className="arrow-triangle">
                    
                </div>
                <div className='schedule-event'>
                <div className="time-event">20:45-20:30 </div>
                <div> | </div>
                <div className="info-event">
                    <div>הצגת תוכנית</div>
                    <div>המנטורינג- התור שלנו לתרום</div>
                </div>
                </div>
            </div>
            <br />
            <br />
            <div className="schedule-event-all">
                <div className="arrow-triangle">
                    
                </div>
                <div className='schedule-event'>
                <div className="time-event">21:00-20:45 </div>
                <div> | </div>
                <div className="info-event">הוקרה למנטורים פעילים</div>
                </div>
            </div>
        
        </div>
        <div className='space-holder'></div>
    </div>
  )
}

export default Schedule