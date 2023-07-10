import "./Footer.css";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div id="footer-outer-container">
      <div id="footer-container">
        <div className="footer-column">
          <Link to="contact">
            <div
              className="footer-column-link"
              onClick={() => window.scrollTo(0, 0)}
            >
              יצירת קשר ודרכי הגעה
            </div>
          </Link>
          <Link to="/cyberpro">
            <div
              className="footer-column-link"
              onClick={() => window.scrollTo(0, 0)}
            >
              אודות
            </div>
          </Link>
          <Link to="/seniors">
            <div
              className="footer-column-link"
              onClick={() => window.scrollTo(0, 0)}
            >
              הבוגרים שלנו
            </div>
          </Link>
        </div>
        <div className="footer-column">
          <a
            href="https://cyberpro-israel.co.il/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="footer-column-link">CYBERPRO Israel</div>
          </a>
          <a
            href="https://atidim.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="footer-column-link">עתידים</div>
          </a>
          <a
            href="https://www.technion.ac.il/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="footer-column-link">טכניון</div>
          </a>
        </div>
        <div className="footer-column">
          <Link to="/privacyPolicy">
            <div
              className="footer-column-link"
              onClick={() => window.scrollTo(0, 0)}
            >
              מדיניות פרטיות
            </div>
          </Link>
          <Link to="/termsOfUse">
            <div
              className="footer-column-link"
              onClick={() => window.scrollTo(0, 0)}
            >
              תנאי שימוש
            </div>
          </Link>
          <Link to="/accessibilityStatement">
            <div
              className="footer-column-link"
              onClick={() => window.scrollTo(0, 0)}
            >
              הצהרת נגישות{" "}
            </div>
          </Link>
        </div>
      </div>
      <div id="copyrights">
        © נוצר על ידי
        <a
        className="linkedin-us"
          href="https://www.linkedin.com/in/yoav-elkobi-082670256/"
          target="_blank"
          rel="noopener noreferrer"
          id="linked-in-links"
        >
          &nbsp;יואב אלקובי,&nbsp;
        </a>
        <a
        className="linkedin-us"
          href="https://www.linkedin.com/in/amit-barhanin-588852262/"
          target="_blank"
          rel="noopener noreferrer"
          id="linked-in-links"
        >
          עמית ברחנין&nbsp;
        </a>
        <a
        className="linkedin-us"
          href="https://www.linkedin.com/in/nitay-elzur-427b36280/"
          target="_blank"
          rel="noopener noreferrer"
          id="linked-in-links"
        >
          וניתאי אלצור&nbsp;
        </a>
        2023
      </div>
    </div>
  );
}

export default Footer;
