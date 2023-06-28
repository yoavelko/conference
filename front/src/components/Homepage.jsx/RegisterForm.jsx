import { useState } from 'react';
import './register-from.css'

function RegisterForm() {
    const [spam, setSpam] = useState(false);
    const handleSubmit = (e) =>{
        e.preventDefault()
        const name = e.target[0].value
        const phone = e.target[1].value
        const email = e.target[2].value
        const association = e.target[3].value
        const cooperation = e.target[4].value
        const role = e.target[5].value
        const linkedin = e.target[6].value
    }
  return (
    <div className='register-form-container' id='registration'> 
         <br />
         <br />
        <div className="register-form-title">רישום לכנס</div>
        <br />
        <br />
        <form onSubmit={(e) => handleSubmit(e)}>
            <input className='input-text-style' type="text" placeholder='שם מלא*'  required/>
            <br />
            <br />
            <input className='input-text-style' type="text" placeholder='הנייד שלך*' required/>
            <br />
            <br />
            <input className='input-text-style' type="text" placeholder='האימייל שלך*'  required/>
            <br />
            <br />
            <select name="" className='input-text-style'>
                <option value="0">מי את/ה?</option>
                <option value="alumni">בוגר סייבר פרו</option>
                <option value="partner">שותף עסקי</option>
            </select>
            <br />
            <br />
            <input className='input-text-style' type="text" placeholder='שם החברה' />
            <br />
            <br />
            <input className='input-text-style' type="text" placeholder='תפקיד' />
            <br />
            <br />
            <input className='input-text-style' type="text" placeholder='לינק לפרופיל שלך בלינקדאין' />
            <br />
            <br />
            <label className='spam-checkbox' htmlFor="">
                <input type="checkbox" name="spam" id="" onChange={()=> setSpam(!spam)} />
                <div className='label-spam'> הנני מאשר קבלת מידע, הצעות שיווקיות ו/או דברי פרסום מחברת סייבר-פרו ישראל בע"מ</div>
            </label>
            <br />
            <br />
            <input className='submit-register' type="submit" />
        </form>
        <div className='space-holder'></div>
    </div>
  )
}

export default RegisterForm