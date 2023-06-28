import React from 'react'

function InvationSummary() {
    return (
        <div className='invationSummary-container'>
            <div className="invation-black-title">
                <div>
                    <span>CYBERPRO</span> <span className='reder'>Israel </span>
                    <span>מזמינה</span>
                    <div>אתכם לכנס ייחודי בו</div>
                </div>
                <div>
                    <span className='reder'>לוחמים</span> <span>ועולם</span> <span className='reder'>ההייטק</span> <span>נפגשים</span>
                </div>
            </div>
            <a href='' className="invation-summary-button-div">
                <div style={{ marginLeft: "2vw" }}>להרשמה </div>
                <img width="20" height="20" src="https://img.icons8.com/ios/50/FFFFFF/double-down--v1.png" alt="double-down--v1" />
            </a>
        </div>
    )
}

export default InvationSummary