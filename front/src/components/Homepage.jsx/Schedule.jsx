import './schedule.css'

function Schedule() {
  return (
    <div className='schedule-container'>
        <div className="schedule-opening">
            <div>כל אחד היה</div>
            <div>ג'וניור פעם</div>
        </div>
        <div className="schedule-subtitle">
            <div>מי היה הראשון שנתן לך </div>
            <div>הזדמנות</div>
        </div>
        <div className="schedule-title">לוז הכנס:</div>
            <div className="schedule-event">
                <div className="time-event">18:45-17:30 </div>
                <div> | </div>
                <div className="info-event">התכנסות</div>
            </div>
            <div className="schedule-event">
                <div className="time-event"></div>
                <div>|</div>
                <div className="info-event"></div>
            </div>
            <div className="schedule-event">
                <div className="time-event"></div>
                <div>|</div>
                <div className="info-event"></div>
            </div>
            <div className="schedule-event">
                <div className="time-event"></div>
                <div>|</div>
                <div className="info-event"></div>
            </div>
            <div className="schedule-event">
                <div className="time-event"></div>
                <div>|</div>
                <div className="info-event"></div>
            </div>
        <div className="the-schedule">
        </div>
    </div>
  )
}

export default Schedule