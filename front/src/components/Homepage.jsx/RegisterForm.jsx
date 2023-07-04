import { useState } from 'react';
import './register-from.css'
import axios from 'axios';
import { createVisitor } from '../../utils/VisitorRoute';
import { useForm } from 'react-hook-form';
function RegisterForm() {
    const [spam, setSpam] = useState(false);
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = (e) => {
        if (!e.linkedin.includes('http')) {
            e.linkedin = `https://${e.linkedin}`
        }
        axios.post(createVisitor, { name, phone, email, association, cooperation, role, linkedin, spam })
            .then(() => {
                alert("תודה רבה! מייל ישלח עם פרטים נוספים בהמשך")
                setSpam(false)
                window.scrollTo(0, 0)
                reset({
                    name: "",
                    phone: "",
                    email: "",
                    association: "0",
                    cooperation: "",
                    role: "",
                    linkedin: "",
                    spam: false
                })
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
            <form id='form-container' onSubmit={handleSubmit(onSubmit)}>
                <input className='input-text-style' type="text" placeholder=' שם מלא*' {
                    ...register('name', { required: true })
                } />
                <br />
                <br />
                <input className='input-text-style' type="text" placeholder='טלפון*' {
                    ...register('phone', { required: true })
                } />
                <br />
                <br />
                <input className='input-text-style' type="email" placeholder='אימייל*' {
                    ...register('email', {
                        required: true, pattern: {
                            value: /(?=.*.@.)(?=.*([.]com|[.]net|[.]co[.]il|[.]org|[.]gov|[.]ac[.]il|[.]muni[.]il))/,
                        }
                    })
                } />
                <br />
                <br />
                <select name="" className='input-text-style' {
                    ...register('association', { required: true, pattern: { value: /\D/ } })
                }>
                    <option disabled selected value="0">מי את/ה?*</option>
                    <option value="alumni"> בוגר CYBERPRO </option>
                    <option value="partner">שותף עסקי</option>
                </select>
                <br />
                <br />
                <input className='input-text-style' type="text" placeholder=' שם החברה' {
                    ...register('cooperation')
                } />
                <br />
                <br />
                <input className='input-text-style' type="text" placeholder=' תפקיד' {
                    ...register('role')
                } />
                <br />
                <br />
                <div className='linkedin-form'>
                    <input className='input-text-style' type="text" placeholder=' לינק לפרופיל לינקדאין' {
                        ...register('linkedin')
                    } />
                    <a className='linkedin-link-form' href="https://www.linkedin.com/in/" target="_blank" rel="noopener noreferrer">
                        <img width="30" height="30" src="https://img.icons8.com/fluency/48/linkedin.png" alt="linkedin" />
                    </a>
                </div>
                <br />
                <br />
                <label className='spam-checkbox' htmlFor="">
                    <input type="checkbox" name="spam" id="spam-checkbox" {
                        ...register('spam')
                    } />
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