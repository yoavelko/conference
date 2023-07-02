import { useState } from 'react';
import './register-from.css'
import axios from 'axios';
import { createVisitor, HOST } from '../../utils/VisitorRoute';
function RegisterForm() {
    const [spam, setSpam] = useState(false);
    const handleSubmit = (e) => {
        e.preventDefault()
        const name = e.target[0].value
        const phone = e.target[1].value
        const email = e.target[2].value
        const association = e.target[3].value
        const cooperation = e.target[4].value
        const role = e.target[5].value
        const linkedin = e.target[6].value

        axios.post(createVisitor, {name,phone, email, association, cooperation,role,linkedin, spam} )
        .then(data => {
            console.log(data);
            alert("תודה רבה! מייל ישלח עם פרטים נוספים בהמשך")
            e.target[0].value = ''
            e.target[1].value = ''
            e.target[2].value = ''
            e.target[3].value = ''
            e.target[4].value = ''
            e.target[5].value = ''
            e.target[6].value = ''
            setSpam(false)
            window.scrollTo(0,0)
            console.log(spam);
            
        })
        .catch(error => {
            console.error(error);
            alert(error.response.data)
        });

    }
    return (
        <div className='register-form-container' id='registration'>
            <br />
            <br />
            <div className="register-form-title">רישום לכנס</div>
            <br />
            <br />
            <form id='form-container' onSubmit={(e) => handleSubmit(e)}>
                <input className='input-text-style' type="text" placeholder=' שם מלא*' required />
                <br />
                <br />
                <input className='input-text-style' type="text" placeholder=' הנייד שלך*' required />
                <br />
                <br />
                <input className='input-text-style' type="email" placeholder=' האימייל שלך*' required />
                <br />
                <br />
                <select name="" className='input-text-style'>
                    <option disabled selected value="0">מי את/ה?</option>
                    <option value="alumni">בוגר סייבר פרו</option>
                    <option value="partner">שותף עסקי</option>
                </select>
                <br />
                <br />
                <input className='input-text-style' type="text" placeholder=' שם החברה' />
                <br />
                <br />
                <input className='input-text-style' type="text" placeholder=' תפקיד' />
                <br />
                <br />
                <div className='linkedin-form'>
                <input className='input-text-style' type="text" placeholder=' לינק לפרופיל שלך בלינקדאין' />
                <a className='linkedin-link-form' href="https://www.linkedin.com/in/" target="_blank" rel="noopener noreferrer">
                <img  width="30" height="30" src="https://img.icons8.com/fluency/48/linkedin.png" alt="linkedin"/>
                </a>
                </div>
                <br />
                <br />
                <label className='spam-checkbox' htmlFor="">
                    <input type="checkbox" name="spam" id="spam-checkbox" checked={spam} onChange={() => setSpam(!spam)} />
                    <div className='label-spam'> הנני מאשר קבלת מידע, הצעות שיווקיות ו/או דברי פרסום מחברת סייבר-פרו ישראל בע"מ</div>
                </label>
                <br />
                <br />
                <div id='submit-container'>
                    <input className='submit-register' value={"הרשמה"} type="submit" />
                </div>
            </form>
            <div className='space-holder'></div>
        </div>
    )
}

export default RegisterForm