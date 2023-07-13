import React from "react";

function InvationSummary() {
  return (
    <div className="invationSummary-container">
      <div className="invation-black-title">
        <div className="first-line-title">
          <div className="invataion-text"> &nbsp;Israel</div>
          <div className="invataion-text-red">&nbsp;CYBERPRO&nbsp; </div>
          <br />
          <span className="invataion-text">מזמינה אתכם לכנס ייחודי</span>
        </div>
        <div>
          <span className="invataion-text">בו</span>{" "}
          <span className="invataion-text-red">לוחמים</span>{" "}
          <span className="invataion-text">ועולם</span>{" "}
          <span className="invataion-text-red">ההייטק</span>{" "}
          <span className="invataion-text">נפגשים</span>
        </div>
      </div>
      <div className="more-info-about-the-conference">
        תוכנית ״לוחמים להייטק״ בהובלת עמותת ידידי עתידים, צה"ל ואגף והקרן
        לחיילים משוחררים במשרד הביטחון, הינה תוכנית ייחודית שהוקמה כחלק מהמאמץ
        הלאומי לשילוב לוחמים ולוחמות בענף ההייטק. במסגרת התוכנית אנו מכשירים את
        יוצאי ויוצאות המערך הלוחם בצה"ל לתחומי פיתוח, אבטחת מידע וסייבר.
      </div>
      <a href="#registration" className="invation-summary-button-div">
        <div>להרשמה </div>
      </a>
    </div>
  );
}

export default InvationSummary;
