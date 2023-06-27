import './Cyberpro.css'
import { useState } from 'react'

function Cyberpro() {

    const [showMore, setShowMore] = useState(true)

    return (
        <div id='cyberpro-container'>
            <div id='image-video-container'></div>
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
            <div className='cyberpro-headers'>הקורסים שלנו</div>
        </div>
    )
}

export default Cyberpro