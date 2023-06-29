import "./Footer.css";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div id="footer-outer-container">
      <div id="footer-container">
        <div className="footer-column">
          <Link to="/cyberpro">
            <div className="footer-column-link">אודות</div>
          </Link>
          <Link to="/seniors">
            <div className="footer-column-link">הבוגרים שלנו</div>
          </Link>
          <Link to="contact">
            <div className="footer-column-link">יצירת קשר ודרכי הגעה</div>
          </Link>
        </div>
        <div className="footer-column">
          <a href="https://cyberpro-israel.co.il/">
            <div className="footer-column-link">CYBERPRO</div>
          </a>
          <a href="https://atidim.org/">
            <div className="footer-column-link">עתידים</div>
          </a>
          <a href="https://www.technion.ac.il/">
            <div className="footer-column-link">טכניון</div>
          </a>
        </div>
        <div className="footer-column">
          <Link to="/privacyPolicy">
            <div className="footer-column-link">מדיניות פרטיות</div>
          </Link>
          <Link to="/termsOfUse">
            <div className="footer-column-link">תנאי שימוש</div>
          </Link>
        </div>
      </div>
      <div id="copyrights">
        © נוצר על ידי יואב אלקובי, עמית ברחנין וניתאי אלצור
      </div>
    </div>
  );
}

export default Footer;
