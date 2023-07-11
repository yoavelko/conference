import "./Header.css";
import cyberprologo from "../../media/logos/cyber-pro.png";
import { useState } from "react";
import { Link } from "react-router-dom";

function Header() {
  const [menu, setMenu] = useState(false);

  return (
    <>
      {menu ? (
        <div id="header-container">
          <div id="header-inner-container">
            <div id="menuToggle">
              <input
                id="checkbox"
                type="checkbox"
                checked={menu}
                onChange={() => setMenu(!menu)}
              />
              <label className="toggle" htmlFor="checkbox">
                <div className="bar bar--top"></div>
                <div className="bar bar--middle"></div>
                <div className="bar bar--bottom"></div>
              </label>
            </div>
            <div id="header-logo-container">
              <Link to={"/"}>
                <img id="header-logo" src={cyberprologo} alt="" />
              </Link>
            </div>
            <div id="spacer"></div>
          </div>
          <div id="dropmenu-content">
            <Link to={"/cyberpro"} onClick={() => window.scrollTo(0, 0)}>
              <div onClick={() => setMenu(false)} className="menu-text">אודות</div>
            </Link>
            <Link to={"/seniors"} onClick={() => window.scrollTo(0, 0)}>
              <div onClick={() => setMenu(false)} className="menu-text">הבוגרים שלנו</div>
            </Link>
            <Link to={"/contact"} onClick={() => window.scrollTo(0, 0)}>
              <div onClick={() => setMenu(false)} className="menu-text">צור קשר</div>
            </Link>
          </div>
        </div>
      ) : (
        <div id="header-container">
          <div id="header-inner-container">
            <div id="menuToggle">
              <input
                id="checkbox"
                type="checkbox"
                value={menu}
                onChange={() => setMenu(!menu)}
              />
              <label className="toggle" htmlFor="checkbox">
                <div className="bar bar--top"></div>
                <div className="bar bar--middle"></div>
                <div className="bar bar--bottom"></div>
              </label>
            </div>

            <div id="header-logo-container">
              <Link to={"/"}>
                <img id="header-logo" src={cyberprologo} alt="" />
              </Link>
            </div>
            <div id="spacer"></div>
          </div>
        </div>
      )}
      <div id="header-responsive-container">
        <Link
          to={"/"}
          onClick={() => window.scrollTo(0, 0)}
          className="header-links"
        >
          <div onClick={() => setMenu(false)}>
            {" "}
            <div id="header-logo-container">
              <img id="header-logo" src={cyberprologo} alt="" />
            </div>
          </div>
        </Link>
        <Link
          to={"/cyberpro"}
          onClick={() => window.scrollTo(0, 0)}
          className="header-links"
        >
          <div onClick={() => setMenu(false)}>אודות</div>
        </Link>
        <Link
          to={"/seniors"}
          onClick={() => window.scrollTo(0, 0)}
          className="header-links"
        >
          <div onClick={() => setMenu(false)}>הבוגרים שלנו</div>
        </Link>
        <Link
          to={"/contact"}
          onClick={() => window.scrollTo(0, 0)}
          className="header-links"
        >
          <div onClick={() => setMenu(false)}>צור קשר</div>
        </Link>
        <div id="spacer"></div>
      </div>
    </>
  );
}

export default Header;
