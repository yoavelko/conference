import './Cyberpro.css'
import { useState, useRef } from 'react'
import video from '../../media/video/2d-compressed.mp4'
import ACE from '../../media/schedule/Syllabus-ACE.pdf'
import CE from '../../media/schedule/Syllabus-CE.pdf'
import BT from '../../media/schedule/Syllabus-BlueTeam.pdf'
import RT from '../../media/schedule/Syllabus-RedTeam.pdf'
import FS from '../../media/schedule/Syllabus-Fullstack.pdf'

function Cyberpro() {

    const [showMore, setShowMore] = useState(true)
    const [blueTeam, setBlueTeam] = useState(true)
    const [redTeam, setRedTeam] = useState(true)
    const [cyberEssentials, setCyberEssentials] = useState(true)
    const [acceleratedEssentials, setAcceleratedEssentials] = useState(true)
    const [ciso, setCiso] = useState(true)
    const [fullstack, setFullstack] = useState(true)
    const [lochamim, setLochamim] = useState(true)
    const [auto, setAuto] = useState(true)

    const myRef = useRef();
    // const y = myRef.current.offsetTop;
    window.onscroll = function () { scrollFunction() };

    function scrollFunction() {
        if (document.body.scrollTop > y || document.documentElement.scrollTop > y) {
            setAuto(false)
        } else {
            setAuto(true)
        }
    }

    return (
        <div id='cyberpro-container'>
            <div id='image-video-container'></div>
            <div className='cyberpro-containers'>
                <div className='cyberpro-headers'>אודות סייבר-פרו ישראל</div>
                {
                    showMore ?
                        <div>CYBERPRO Israel הינה השלוחה הישראלית של CYBERPRO Global, אשר הוקמה על מנת לתת מענה לצורך הולך וגדל באנשי מקצוע בשוק הישראלי והרחבת שיתוף הפעולה עם חברות טכנולוגיות ישראליות המפתחות כלי סייבר מתקדמים. <span className='about-show' onClick={() => setShowMore(!showMore)}>הצג עוד...</span></div>
                        :
                        <div>CYBERPRO Israel הינה השלוחה הישראלית של CYBERPRO Global, אשר הוקמה על מנת לתת מענה לצורך הולך וגדל באנשי מקצוע בשוק הישראלי והרחבת שיתוף הפעולה עם חברות טכנולוגיות ישראליות המפתחות כלי סייבר מתקדמים.
                            <br />
                            ההכשרות המתקדמות והמבוקשות של CYBERPRO בתחומי תשתיות, אבטחת מידע וסייבר הינן שם דבר בעולם. הכשרות אלו פותחו על ידי מומחי סייבר מהשורה הראשונה בעולם, עבור גופיי אבטחה בינלאומיים השמים דגש רב על יכולות ההדרכה הגבוהות, שיטות הלמידה המקצועיות וטכנולוגיות האימון והתרגול הייחודיות. החיבור עם גופים בינלאומיים מאפשרים לסטודנטים הלומדים אצלנו להחשף להזדמנויות תעסוקה ייחודיות בארץ ובעולם.
                            <br />
                            CYBERPRO Global הינה חברה בינלאומית מובילה המספקת תוכניות הכשרה לאבטחת סייבר ואבטחת מידע, המבוססות טכנולוגיות אימון סייבר מובילות בעולם וחווית למידה ברמה הגבוהה ביותר הקיימת כיום. החברה מפתחת תוכניות הדרכת סייבר עבוד גופים בינלאומיים מובילים ומפעילה מספר מרכזי לימוד ייחודיים ברחבי העולם.
                            <span className='about-show' onClick={() => setShowMore(!showMore)}> הצג פחות</span>
                        </div>
                }
            </div>
            <div className='cyberpro-containers'>
                <div className='cyberpro-headers'>תוכנית לוחמים להייטק</div>
                <div>תוכנית בשיתוף עמותת עתידים, מנהלת שער לעתיד וארגון Start-Up Nation Central והאגף והקרן לחיילים משוחררים. מיועדת ללוחמים/ות לקראת שחרור או משוחררים עד חמש שנים מיום השחרור. התוכנית מעניקה הכשרות מגוונות במתכונת BOOTCAMP ברמה הגבוהה ביותר במגוון מקצועות בתחום ההייטק, ובשיתוף פעולה מלא עם תעשיית ההייטק בישראל. הלימודים הינם אינטנסיביים ובמשך כל ימות השבוע, א'-ה' בין השעות 9:00-17:00</div>
                <a id='lochamim-link' href="https://techidf.co.il/" target="_blank" rel="noopener noreferrer">לקריאה עוד על התוכנית</a>
            </div>
            <div className='cyberpro-containers'>
                <div className='cyberpro-headers'>הקורסים שלנו</div>
                <div className='cyberpro-small-headers'>קורס הכשרת Blue Team Defender</div>
                {
                    blueTeam ?
                        <>
                            <div>קורס הכשרת  Blue Team Defender מכין את בוגריו להתמודד בהצלחה עם האיומים העדכניים ביותר שיש למערכות המידע הארגוניות כיום. הידע הנלמד בקורס מגן סייבר יסייע לך לנטר ולנתח תקשורת נתונים חשודה, לחקור נזקי פוגענים ועוד. <span className='about-show' onClick={() => setBlueTeam(!blueTeam)}>הצג עוד...</span></div>
                            <a className='syllabus-files' href={BT} download><button className='syllabus-btn'>סילבוס הקורס</button></a>
                        </>
                        :
                        <div>קורס הכשרת  Blue Team Defender מכין את בוגריו להתמודד בהצלחה עם האיומים העדכניים ביותר שיש למערכות המידע הארגוניות כיום. הידע הנלמד בקורס מגן סייבר יסייע לך לנטר ולנתח תקשורת נתונים חשודה, לחקור נזקי פוגענים ועוד.
                            <br />
                            בהכשרה הייחודית של CYBERPRO הושם דגש על עבודה מעשית רבה שתבוצע במעבדות תרגול ובאמצעות טכנולוגיות למידה מהמתקדמות בעולם.
                            <br />
                            בסיום הקורס תוכלו להגן ולאבטח מערכות מידע, לצוד אירועי חדירה ולזהות התקפות שמתרגשות לבוא. הקורס יכשיר אתכם לתעשיית הסייבר לתפקידים כגון: Incident Responder, מפעיל SOC, אנליסט סייבר וחוקר סייבר
                            <span className='about-show' onClick={() => setBlueTeam(!blueTeam)}> הצג פחות</span>
                            <br />
                            <a className='syllabus-files' href={BT} download><button className='syllabus-btn'>סילבוס הקורס</button></a>
                        </div>
                }
            </div>
            <div className='cyberpro-containers'>
                <div className='cyberpro-small-headers'>קורס הכשרת Red Team Expert</div>
                {
                    redTeam ?
                        <>
                            <div>קורס הכשרת מגן סייבר Red Team מכין את בוגריו לפעול באופן פרואקטיבי על מנת לגלות פרצות אבטחה, לחסן את הארגון מפני התקפות מבחוץ ומבפנים ולסגור כל נקודת חולשה אפשרית. <span className='about-show' onClick={() => setRedTeam(!redTeam)}>הצג עוד...</span></div>
                            <a className='syllabus-files' href={RT} download><button className='syllabus-btn'>סילבוס הקורס</button></a>
                        </>
                        :
                        <div>
                            קורס הכשרת מגן סייבר Red Team מכין את בוגריו לפעול באופן פרואקטיבי על מנת לגלות פרצות אבטחה, לחסן את הארגון מפני התקפות מבחוץ ומבפנים ולסגור כל נקודת חולשה אפשרית.

                            בהכשרה הייחודית של CYBERPRO הושם דגש על בניית סט יכולות טכניות גבוהות שיאפשרו להתמודד עם התוקף המתוחכם ביותר. את הידע הרב שתצברו נבחן באמצעות טכנולוגיות למידה מהמתקדמות בעולם, שיאמנו ויכינו אתכם לעבודה במקצוע ובסטנדרטים הגבוהים ביותר.

                            בסיום הקורס תוכלו לתכנן, לבצע ולזהות פרצות אפשריות במערכות מידע ובמערכיי תקשורת, לזהות נקודות חולשה בארגון ולבנות אסטרטגיות הגנה שיחסנו את הארגון. הקורס יכשיר אתכם לתעשיית הסייבר לתפקידי מפתח בעולם הסייבר, כגון: בודקי חדירות, חברי צוותים אדומים וחוקרי פגיעויות.
                            <span className='about-show' onClick={() => setRedTeam(!redTeam)}> הצג פחות</span>
                            <br />
                            <a className='syllabus-files' href={RT} download><button className='syllabus-btn'>סילבוס הקורס</button></a>
                        </div>
                }
            </div>
            <div className='cyberpro-containers'>
                <div className='cyberpro-small-headers'>קורס הכשרת Cyber Essentials</div>
                {
                    cyberEssentials ?
                        <>
                            <div>מסלול הכשרה לטכנולוגיות הליבה של עולם הסייבר המהווה מקפצה להתמחות בעולמות הסייבר. <span className='about-show' onClick={() => setCyberEssentials(!cyberEssentials)}>הצג עוד...</span></div>
                            <a className='syllabus-files' href={CE} download><button className='syllabus-btn'>סילבוס הקורס</button></a>
                        </>
                        :
                        <div>
                            מסלול הכשרה לטכנולוגיות הליבה של עולם הסייבר המהווה מקפצה להתמחות בעולמות הסייבר.

                            העניין הרב שמגלה העולם בתקיפות סייבר, ההשקעות הגדולות בטכנולוגיות חדשות, המשכורות הגבוהות של העוסקים במלאכה והבעיות הקשות עמן מתמודדים ארגונים גדולים, מושכים קהל רב לחפש עבודה והכשרות במקצועות הסייבר. זהו בוודאות התחום הצומח ביותר מכל מקצועות הטכנולוגיה בעשור האחרון. אבל בין החלומות לקריירה בסייבר לבין המציאות פעור במקרים רבים פער אדיר של ידע תשתיתי; אי אפשר לתקוף או להגן על מערכות מידע מבלי להבין אותן ואת המנגנונים המקיימים אותן בצורה עמוקה.

                            מתחת לכל מערכות המידע בעולם יושבות מערכות הפעלה. בתחנות הקצה של המשתמשים הארגוניים אלו מערכות מבוססות Windows, בשרתים יהיו אלו בדרך כלל מערכות הפעלה מבוססות Linux. תחנות הקצה יהיו מחוברות לשרתים בעזרת תשתיות תקשורת מבוססות על מחסנית הפרוטוקולים של TCP/IP, ומעל כל אלו פועל קוד שכתבו תוכניתנים. בלי להבין את כל הטכנולוגיות הללו ברמה טובה, אי אפשר לדבר סייבר – אפשר רק לדבר “על” סייבר.

                            המסלול הזה הינו קרוס טכנולוגי ומעשי לעולמות הידע שהן הליבה של טכנולוגיות המידע – והצעד הראשון לקריירה בסייבר.
                            <span className='about-show' onClick={() => setCyberEssentials(!cyberEssentials)}> הצג פחות</span>
                            <br />
                            <a className='syllabus-files' href={CE} download><button className='syllabus-btn'>סילבוס הקורס</button></a>
                        </div>
                }
            </div>
            <div className='cyberpro-containers'>
                <div className='cyberpro-small-headers'>קורס הכשרת Accelerated Cyber Essentials</div>
                {
                    acceleratedEssentials ?
                        <>
                            <div>קורס Accelerated Cyber Essentials נועד להכשיר ולהכין את בוגריו בצעדיהם הראשונים לקראת קריירה מצליחה בעולם הסייבר. הקורס הינו מכינה טכנולוגית אינטנסיבית ומעשית לעולמות הידע העדכניים והרלבנטיים ביותר למי שמעוניין להתחיל את צעדיו הראשונים בתעשיית הסייבר הצומחת. <span className='about-show' onClick={() => setAcceleratedEssentials(!acceleratedEssentials)}>הצג עוד...</span></div>
                            <a className='syllabus-files' href={ACE} download><button className='syllabus-btn'>סילבוס הקורס</button></a>
                        </>
                        :
                        <div>
                            קורס Accelerated Cyber Essentials נועד להכשיר ולהכין את בוגריו בצעדיהם הראשונים לקראת קריירה מצליחה בעולם הסייבר. הקורס הינו מכינה טכנולוגית אינטנסיבית ומעשית לעולמות הידע העדכניים והרלבנטיים ביותר למי שמעוניין להתחיל את צעדיו הראשונים בתעשיית הסייבר הצומחת.

                            בהכשרה ייחודית זו של CYBERPRO לטכנולוגיות הליבה  ההכרחיות בתחום הסייבר, הושם דגש רב על תרגול מעשי בסטנדרטים הגבוהים ביותר הקיימים כיום בתעשייה על מנת להכין את בוגריו לשוק העבודה ולקריירה מוצלחת בתחום.

                            הקורס יכשיר אתכם למגוון תפקידים בעולם ה-IT וכבוגריו תהיו זכאים לגשת למספר גדול של הסמכות בינלאומיות מוכרות. כמו כן, יקנה לכם הקורס את הידע והכלים הנדרשים להתקדם לקורסי הסייבר שלנו בדרך לתפקידי מפתח בעולם הסייבר.
                            <span className='about-show' onClick={() => setAcceleratedEssentials(!acceleratedEssentials)}> הצג פחות</span>
                            <br />
                            <a className='syllabus-files' href={ACE} download><button className='syllabus-btn'>סילבוס הקורס</button></a>
                        </div>
                }
            </div>
            <br />
            <div id='video-container' ref={myRef}>
                <a href="https://www.cyberpro-global.com/" target="_blank" rel="noopener noreferrer">
                    <div className='cyberpro-headers' style={{ textAlign: 'center' }}>CYBERPRO GLOBAL</div>
                </a>
                <br />
                {
                    auto ?
                        <video width={'100%'} controls >
                            <source src={video} type="video/mp4" />
                        </video>
                        :
                        <video width={'100%'} autoPlay >
                            <source src={video} type="video/mp4" />
                        </video>
                }

            </div>
        </div>
    )
}

export default Cyberpro