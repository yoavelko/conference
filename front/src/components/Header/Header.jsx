import './Header.css'
import cyberprologo from '../../media/logos/cyber-pro.png'
import { useState } from 'react'
import { Link } from 'react-router-dom' 

function Header() {

    const [menu, setMenu] = useState(false)

    return (
        <>
            {
                menu ?
                    <div id='header-container'>
                        <div id='header-inner-container'>
                            <div id="menuToggle">
                                <input id="checkbox" type="checkbox" />
                                <label className="toggle" htmlFor="checkbox" onClick={() => setMenu(!menu)}>
                                    <div className="bar bar--top"></div>
                                    <div className="bar bar--middle"></div>
                                    <div className="bar bar--bottom"></div>
                                </label>
                            </div>
                            <div id='header-logo-container'><img id='header-logo' src={cyberprologo} alt="" /></div>
                        </div>
                        <div id='dropmenu-content'>
                            <Link to={'/'}><div>כנס אוגוסט 23'</div></Link>
                            <Link to={'/cyberpro'}><div>אודות סייבר-פרו ישראל</div></Link>
                            <Link to={'/seniors'}><div>הבוגרים שלנו</div></Link>
                            <Link to={'/contact'}><div>צור קשר</div></Link>
                        </div>
                    </div>
                    :
                    <div id='header-container'>
                        <div id='header-inner-container'>
                            <div id="menuToggle">
                                <input id="checkbox" type="checkbox" />
                                <label className="toggle" htmlFor="checkbox" onClick={() => setMenu(!menu)}>
                                    <div className="bar bar--top"></div>
                                    <div className="bar bar--middle"></div>
                                    <div className="bar bar--bottom"></div>
                                </label>
                            </div>
                            <div id='header-logo-container'><img id='header-logo' src={cyberprologo} alt="" /></div>
                        </div>
                    </div>
            }
        </>

    )
}

export default Header