import "./Cyberpro.css";
import { useState, useRef, useContext, useEffect } from "react";
import video from "../../media/video/2d-compressed.mp4";
import ACE from "../../media/schedule/Syllabus-ACE.pdf";
import CE from "../../media/schedule/Syllabus-CE.pdf";
import BT from "../../media/schedule/Syllabus-BlueTeam.pdf";
import RT from "../../media/schedule/Syllabus-RedTeam.pdf";
import FS from "../../media/schedule/Syllabus-Fullstack.pdf";
import CyberSy from "../../media/schedule/Syllabus-Cyber.pdf";
import { FixedContext } from "../../contexts/FixedContext";

function Cyberpro() {
  const [showMore, setShowMore] = useState(true);
  const [blueTeam, setBlueTeam] = useState(true);
  const [redTeam, setRedTeam] = useState(true);
  const [cyberEssentials, setCyberEssentials] = useState(true);
  const [acceleratedEssentials, setAcceleratedEssentials] = useState(true);
  const [ciso, setCiso] = useState(true);
  const [fullstack, setFullstack] = useState(true);
  const [lochamim, setLochamim] = useState(true);
  const [auto, setAuto] = useState(true);
  const { fix, setFix } = useContext(FixedContext);
  const [desktop, setDesktop] = useState(false);

  const myRef = useRef();
  window.onscroll = function () {
    scrollFunction();
  };

  useEffect(() => {
    setFix(false);
    if ($(window).width() > 768) {
      setDesktop(true);
    } else {
      setDesktop(false);
    }
  }, []);

  function scrollFunction() {
    if (document.body.scrollTop > y || document.documentElement.scrollTop > y) {
      setAuto(false);
    } else {
      setAuto(true);
    }
  }

  return (
    <>
      {desktop ? (
        <div id="cyberpro-container">
          <div id="image-video-container"></div>
          <div className="cyberpro-containers">
            <h1 className="cyberpro-main-header">אודות</h1>
            <br />
            <div>
              CYBERPRO Israel הינה השלוחה הישראלית של CYBERPRO Global, אשר הוקמה
              על מנת לתת מענה לצורך הולך וגדל באנשי מקצוע בשוק הישראלי והרחבת
              שיתוף הפעולה עם חברות טכנולוגיות ישראליות המפתחות כלי סייבר
              מתקדמים.
              <br />
              ההכשרות המתקדמות והמבוקשות של CYBERPRO בתחומי תשתיות, אבטחת מידע
              וסייבר הינן שם דבר בעולם. הכשרות אלו פותחו על ידי מומחי סייבר
              מהשורה הראשונה בעולם, עבור גופיי אבטחה בינלאומיים השמים דגש רב על
              יכולות ההדרכה הגבוהות, שיטות הלמידה המקצועיות וטכנולוגיות האימון
              והתרגול הייחודיות. החיבור עם גופים בינלאומיים מאפשרים לסטודנטים
              הלומדים אצלנו להחשף להזדמנויות תעסוקה ייחודיות בארץ ובעולם.
              <br />
              CYBERPRO Global הינה חברה בינלאומית מובילה המספקת תוכניות הכשרה
              לאבטחת סייבר ואבטחת מידע, המבוססות טכנולוגיות אימון סייבר מובילות
              בעולם וחווית למידה ברמה הגבוהה ביותר הקיימת כיום. החברה מפתחת
              תוכניות הדרכת סייבר עבוד גופים בינלאומיים מובילים ומפעילה מספר
              מרכזי לימוד ייחודיים ברחבי העולם.
            </div>
          </div>
          <div id="video-container" ref={myRef}>
            <a
              href="https://www.cyberpro-global.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <h2 className="cyberpro-headers" style={{ textAlign: "center" }}>
                CYBERPRO GLOBAL
              </h2>
            </a>
            <br />
            {auto ? (
              <video width={"100%"} controls>
                <source src={video} type="video/mp4" />
              </video>
            ) : (
              <video width={"100%"} autoPlay>
                <source src={video} type="video/mp4" />
              </video>
            )}
          </div>
          <div className="cyberpro-containers">
            <h2 className="cyberpro-headers">תוכנית לוחמים להייטק</h2>
            <div>
              תוכנית מטעם צה"ל בשיתוף עמותת עתידים, מנהלת שער לעתיד, האגף והקרן
              לחיים משוחררים וארגון Start-Up Nation Central מיועדת ללוחמים/ות
              לקראת שחרור או משוחררים עד חמש שנים מיום השחרור. התוכנית מעניקה
              הכשרות מגוונות במתכונת BOOTCAMP ברמה הגבוהה ביותר במגוון מקצועות
              בתחום ההייטק, ובשיתוף פעולה מלא עם תעשיית ההייטק בישראל. הלימודים
              הינם אינטנסיביים ובמשך כל ימות השבוע, א'-ה' בין השעות 9:00-17:00.
            </div>
            <a
              id="lochamim-link"
              href="https://techidf.co.il/"
              target="_blank"
              rel="noopener noreferrer"
            >
              למידע נוסף
            </a>
          </div>
          <div className="cyberpro-containers">
            <h2 className="cyberpro-headers">הקורסים שלנו</h2>
            <div className="cyberpro-containers">
              <h3 className="cyberpro-small-headers">
                קורס  Full Stack Development
              </h3>
              <div>
                קורס  Full stack development מכין את בוגריו לפתח מוצרים ,
                אתרים, אפליקציות ופלטפורמות בעזרת עבודה עם הטכנולוגיות המתקדמות
                והנפוצות ביותר בתעשייה. הידע הנרכש בקורס מפתח פול סטאק יסייע לך
                לפתח מוצר מרגע האפיון עד מוצר מוגמר. בהכשרה הייחודית של CYBERPRO
                הושם דגש על עבודה מעשית רבה שתבוצע בפרויקטים בצוותים ובעזרת
                הטכנולוגיות המבוקשות בתחום. בסיום הקורס תוכלו ליצור מוצר מאובטח,
                בעל מסובכות מורכבת ביותר, אשר יכול להכין מאות אלפי משתמשים.
                הקורס יכשיר אתכם לתעשיית הפיתוח לתפקידים כגון: Full stack
                developer, Front end developer, ו-Backend developer.
                <br />
                <a className="syllabus-files" href={FS} download>
                  <button className="syllabus-btn">סילבוס הקורס</button>
                </a>
              </div>
            </div>
            <h3 className="cyberpro-small-headers">
              קורס INFORMATION SECURITY & OFFENSIVE CYBER
            </h3>

            <div>
              קורס INFORMATION SECURITY & OFFENSIVE CYBER מכין את בוגריו
              לתפקידים בתחום אבטחת המידע והסייבר ההתקפי בדגש על בדיקות חדירת
              תשתית. בהכשרה הייחודית של CYBERPRO, הושם דגש על עבודה מעשית רבה
              ובצוותים, זאת בעזרת מגוון רחב ביותר של שיעורי מעבדות ושימוש במאמן
              CYWARIA מבית Cympire. הידע הנרכש בקורס ישמש את בוגרי הקורס בתפקידם
              הראשון בעולם ה-PT. זאת ועוד, כי הקורס מהווה בסיס הכנה משמעותי
              להסמכת OSCP.
              <br />
              <a className="syllabus-files" href={CyberSy} download>
                <button className="syllabus-btn">סילבוס הקורס</button>
              </a>
            </div>
          </div>
          <div className="cyberpro-containers">
          
          </div>
          <div className="cyberpro-containers">
           
           
          </div>
          <div className="cyberpro-containers">
          
          </div>
          <br />
        </div>
      ) : (
        <div id="cyberpro-container">
          <div id="image-video-container"></div>
          <div className="cyberpro-containers">
            <h1 className="cyberpro-main-header">אודות</h1>
            {showMore ? (
              <div>
                CYBERPRO Israel הינה השלוחה הישראלית של CYBERPRO Global, אשר
                הוקמה על מנת לתת מענה לצורך הולך וגדל באנשי מקצוע בשוק הישראלי
                והרחבת שיתוף הפעולה עם חברות טכנולוגיות ישראליות המפתחות כלי
                סייבר מתקדמים.{" "}
                <span
                  className="about-show"
                  onClick={() => setShowMore(!showMore)}
                >
                  הצג עוד...
                </span>
              </div>
            ) : (
              <div>
                CYBERPRO Israel הינה השלוחה הישראלית של CYBERPRO Global, אשר
                הוקמה על מנת לתת מענה לצורך הולך וגדל באנשי מקצוע בשוק הישראלי
                והרחבת שיתוף הפעולה עם חברות טכנולוגיות ישראליות המפתחות כלי
                סייבר מתקדמים.
                <br />
                ההכשרות המתקדמות והמבוקשות של CYBERPRO בתחומי תשתיות, אבטחת מידע
                וסייבר הינן שם דבר בעולם. הכשרות אלו פותחו על ידי מומחי סייבר
                מהשורה הראשונה בעולם, עבור גופיי אבטחה בינלאומיים השמים דגש רב
                על יכולות ההדרכה הגבוהות, שיטות הלמידה המקצועיות וטכנולוגיות
                האימון והתרגול הייחודיות. החיבור עם גופים בינלאומיים מאפשרים
                לסטודנטים הלומדים אצלנו להחשף להזדמנויות תעסוקה ייחודיות בארץ
                ובעולם.
                <br />
                CYBERPRO Global הינה חברה בינלאומית מובילה המספקת תוכניות הכשרה
                לאבטחת סייבר ואבטחת מידע, המבוססות טכנולוגיות אימון סייבר
                מובילות בעולם וחווית למידה ברמה הגבוהה ביותר הקיימת כיום. החברה
                מפתחת תוכניות הדרכת סייבר עבוד גופים בינלאומיים מובילים ומפעילה
                מספר מרכזי לימוד ייחודיים ברחבי העולם.
                <span
                  className="about-show"
                  onClick={() => setShowMore(!showMore)}
                >
                  {" "}
                  הצג פחות
                </span>
              </div>
            )}
          </div>
          <div id="video-container" ref={myRef}>
            <a
              href="https://www.cyberpro-global.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <h2 className="cyberpro-headers" style={{ textAlign: "center" }}>
                CYBERPRO GLOBAL
              </h2>
            </a>
            <br />
            {auto ? (
              <video width={"100%"} controls>
                <source src={video} type="video/mp4" />
              </video>
            ) : (
              <video width={"100%"} autoPlay>
                <source src={video} type="video/mp4" />
              </video>
            )}
          </div>
          <div className="cyberpro-containers">
            <h2 className="cyberpro-headers">תוכנית לוחמים להייטק</h2>
            <div>
              תוכנית בשיתוף עמותת עתידים, מנהלת שער לעתיד וארגון Start-Up Nation
              Central והאגף והקרן לחיילים משוחררים. מיועדת ללוחמים/ות לקראת
              שחרור או משוחררים עד חמש שנים מיום השחרור. התוכנית מעניקה הכשרות
              מגוונות במתכונת BOOTCAMP ברמה הגבוהה ביותר במגוון מקצועות בתחום
              ההייטק, ובשיתוף פעולה מלא עם תעשיית ההייטק בישראל. הלימודים הינם
              אינטנסיביים ובמשך כל ימות השבוע, א'-ה' בין השעות 9:00-17:00
            </div>
            <a
              id="lochamim-link"
              href="https://techidf.co.il/"
              target="_blank"
              rel="noopener noreferrer"
            >
              לקריאה עוד על התוכנית
            </a>
          </div>
          <div className="cyberpro-containers">
            <h2 className="cyberpro-headers">הקורסים שלנו</h2>
            <div className="cyberpro-containers">
              <h3 className="cyberpro-small-headers">
                קורס  Full Stack Development
              </h3>
              {fullstack ? (
                <>
                    <div>
                  קורס  Full stack development מכין את בוגריו לפתח מוצרים ,
                  אתרים, אפליקציות ופלטפורמות בעזרת עבודה עם הטכנולוגיות
                  המתקדמות והנפוצות ביותר בתעשייה. הידע הנרכש בקורס מפתח פול
                  סטאק יסייע לך לפתח מוצר מרגע האפיון עד מוצר מוגמר. בהכשרה
                  הייחודית של CYBERPRO הושם דגש על עבודה מעשית רבה שתבוצע
                  בפרויקטים בצוותים ובעזרת הטכנולוגיות המבוקשות בתחום. בסיום
                  הקורס תוכלו ליצור מוצר מאובטח, בעל מסובכות מורכבת ביותר, אשר
                  יכול להכין מאות אלפי משתמשים. הקורס יכשיר אתכם לתעשיית הפיתוח
                  לתפקידים כגון: Full stack developer, Front end developer,
                  ו-Backend developer.
                  
                  </div>
                  <a className="syllabus-files" href={FS} download>
                    <button className="syllabus-btn">סילבוס הקורס</button>
                  </a>
                </>
              ) : (
                <div>
                  קורס  Full stack development מכין את בוגריו לפתח מוצרים ,
                  אתרים, אפליקציות ופלטפורמות בעזרת עבודה עם הטכנולוגיות
                  המתקדמות והנפוצות ביותר בתעשייה. הידע הנרכש בקורס מפתח פול
                  סטאק יסייע לך לפתח מוצר מרגע האפיון עד מוצר מוגמר. בהכשרה
                  הייחודית של CYBERPRO הושם דגש על עבודה מעשית רבה שתבוצע
                  בפרויקטים בצוותים ובעזרת הטכנולוגיות המבוקשות בתחום. בסיום
                  הקורס תוכלו ליצור מוצר מאובטח, בעל מסובכות מורכבת ביותר, אשר
                  יכול להכין מאות אלפי משתמשים. הקורס יכשיר אתכם לתעשיית הפיתוח
                  לתפקידים כגון: Full stack developer, Front end developer,
                  ו-Backend developer.
                  <span
                    className="about-show"
                    onClick={() => setFullstack(!fullstack)}
                  >
                    {" "}
                    הצג פחות
                  </span>
                  <br />
                  <a className="syllabus-files" href={FS} download>
                    <button className="syllabus-btn">סילבוס הקורס</button>
                  </a>
                </div>
              )}
            </div>
            <h3 className="cyberpro-small-headers">
              קורס INFORMATION SECURITY & OFFENSIVE CYBER
            </h3>
            {blueTeam ? (
              <>
                <div>
                  קורס INFORMATION SECURITY & OFFENSIVE CYBER מכין את בוגריו
                  לתפקידים בתחום אבטחת המידע והסייבר ההתקפי בדגש על בדיקות חדירת
                  תשתית. בהכשרה הייחודית של CYBERPRO, הושם דגש על עבודה מעשית
                  רבה ובצוותים, זאת בעזרת מגוון רחב ביותר של שיעורי מעבדות
                  ושימוש במאמן CYWARIA מבית Cympire. הידע הנרכש בקורס ישמש את
                  בוגרי הקורס בתפקידם הראשון בעולם ה-.PT זאת ועוד, כי הקורס
                  מהווה בסיס הכנה משמעותי להסמכת .OSCP{" "}
                </div>
                <a className="syllabus-files" href={BT} download>
                  <button className="syllabus-btn">סילבוס הקורס</button>
                </a>
              </>
            ) : (
              <div>

            
                <br />
                <a className="syllabus-files" href={BT} download>
                  <button className="syllabus-btn">סילבוס הקורס</button>
                </a>
              </div>
            )}
          </div>
          <div className="cyberpro-containers">
           
          </div>
          <div className="cyberpro-containers">
          
          </div>
          <div className="cyberpro-containers">
            
            
          </div>
        </div>
      )}
    </>
  );
}

export default Cyberpro;
