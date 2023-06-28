import './Footer.css'
import { Link } from 'react-router-dom'

function Footer() {
    return (
        <div id='footer-container'>
            <div className="footer-column">
                ניווט באתר
                <Link to='/'>
                    <div className="footer-column-link">כנס אוגוסט 23'</div>
                </Link>
                <Link to='/cyberpro'>
                    <div className="footer-column-link">אודות</div>
                </Link>
                <Link to='/seniors'>
                    <div className="footer-column-link">הבוגרים שלנו</div>
                </Link>
                <Link to='contact'>
                    <div className="footer-column-link">יצירת קשר ודרכי הגעה</div>
                </Link>
            </div>
            <div className="footer-column">
                קישורים חיצוניים
                <a href="https://cyberpro-israel.co.il/">
                    <div className="footer-column-link">CyberPro</div>
                </a>
                <a href="https://atidim.org/">
                    <div className="footer-column-link">עתידים</div>
                </a>
                <a href="https://www.technion.ac.il/">
                    <div className="footer-column-link">טכניון</div>
                </a>
            </div>
        </div>
    )
}

export default Footer