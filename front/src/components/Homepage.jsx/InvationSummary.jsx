import React from 'react'

function InvationSummary() {
    return (
        <div className='invationSummary-container'>
            <div className="invation-red-title">
                מתגייסים למען <span className='soldier'>הלוחמים</span> שלנו
            </div>
            <div className="invation-black-title">
                <div>
                    <span>CYBERPRO Israel </span>
                    <span>מתכבדת</span>
                    <div>להזמינכם לכנס ייחודי,</div>
                </div>
                <div>בו לוחמים משוחררים ועולם ההייטק נפגשים.</div>
            </div>
            <div className="save-the-date">
                <div className='save-the-date-text'> SAVE THE DATE </div>
                <div className='save-the-date-date' >2.8</div>
            </div>
            <div className="invation-summary-location">
                <img width="35" height="35" src="https://img.icons8.com/ios-filled/50/FFFFFF/marker.png" alt="marker" />
                <div>מגדלי שרונה, תל אביב</div>
            </div>
            <a href='' className="invation-summary-button-div">
                    <div style={{ marginLeft: "2vw" }}>להרשמה </div>
                    <img width="20" height="20" src="https://img.icons8.com/ios/50/FFFFFF/double-down--v1.png" alt="double-down--v1" />
            </a>
        </div>
    )
}

export default InvationSummary