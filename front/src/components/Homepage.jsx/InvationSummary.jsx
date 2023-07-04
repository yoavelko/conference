import React from 'react'

function InvationSummary() {
    return (
        <div className='invationSummary-container'>
            <div className="invation-black-title">
                <div>
                    <span className='invataion-text'>CYBERPRO</span> <span className='invataion-text-red'>Israel </span>
                    <br />
                    <span className='invataion-text'></span>
                    <div className='invataion-text'>מזמינה אתכם לכנס ייחודי</div>
                </div>
                <div>
                    <span className='invataion-text'>בו</span> <span className='invataion-text-red'>לוחמים</span> <span className='invataion-text'>ועולם</span> <span className='invataion-text-red'>ההייטק</span> <span className='invataion-text'>נפגשים</span>
                </div>
            </div>
            <a href='#registration' className="invation-summary-button-div">
                <div style={{ marginLeft: "2vw" }}>להרשמה </div>
                <img width="20" height="20" src="https://img.icons8.com/ios/50/FFFFFF/double-down--v1.png" alt="double-down--v1" />
            </a>
        </div>
    )
}

export default InvationSummary