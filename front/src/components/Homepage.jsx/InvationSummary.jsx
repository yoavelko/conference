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
            <a href='#registration' className="invation-summary-button-div">
                <div style={{ marginLeft: "2vw" }}>להרשמה </div>
            </a>
        </div>
    )
}

export default InvationSummary