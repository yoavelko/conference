import { useState } from "react";
import "./register-from.css";
import axios from "axios";
import { createVisitor } from "../../utils/VisitorRoute";
import { useForm } from "react-hook-form";
function RegisterForm() {
  const [loader, setLoader] = useState(false)
  const [spam, setSpam] = useState(false);
  const { register, handleSubmit, reset, formState: {errors} } = useForm();
  const onSubmit = (e) => {
    setLoader(true)
    if (e.linkedin && !e.linkedin.includes("http")) {
      e.linkedin = `https://${e.linkedin}`;
    }
    if (!e.linkedin) delete e.linkedin;
    if (!e.role) delete e.role;
    if (!e.cooperation) delete e.cooperation;
    if (!e.spam) delete e.spame;
    axios
      .post(createVisitor, e)
      .then(() => {
        alert("תודה רבה! מייל ישלח עם פרטים נוספים בהמשך");
        setSpam(false);
        window.scrollTo(0, 0);
        reset({
          name: "",
          phone: "",
          email: "",
          association: "0",
          cooperation: "",
          role: "",
          linkedin: "",
          spam: false,
        });
        setLoader(false)
      })
      .catch((error) => {
        console.error(error);
        alert(error.response.data);
        setLoader(false)
      });
  };
  return (
    <div className="register-form-container" id="registration">
      <div id="register-effect"></div>
      <h2 className="register-form-title">רישום לכנס</h2>
      <div className="link-to-google-form">
       <div>תוכלו לעזור לנו להפיץ את הבשורה על ידי פרסום גרפיקה ברשתות החברתיות שלכם.</div>
       <div className="second-register-form-google">
        <div>לקבלת גרפיקה מותאמת אישית</div>
        <a
          className="link-google-form"
          href="https://docs.google.com/forms/d/e/1FAIpQLSe1jrCNEBLzdzHDDkJEX7xkxprxNdBEpTTXl8Y2uQK8uvAM_w/viewform"
          target="_blank"
          rel="noopener noreferrer"
        >
          {" "}
          &nbsp; לחץ כאן
        </a>
        </div>
      </div>
      <br />
      <form id="form-container" onSubmit={handleSubmit(onSubmit)}>
        <input
          className="input-text-style"
          type="text"
          placeholder=" שם מלא*"
          {...register("name", { required: true })}
        />
        <input
          className="input-text-style"
          type="text"
          placeholder="טלפון*"
          {...register("phone", { required: true, pattern: {
            value: /^\+\d{3}-?\d{2}-?\d{3}-?\d{4}$|^\d{3}-?\d{3}-?\d{4}$/,
            message: "Phone must be a valid israel number"
          } })}
        />
        {errors && errors?.phone && errors.phone.message}
        <input
          className="input-text-style"
          type="email"
          placeholder="אימייל*"
          {...register("email", {
            required: true,
            pattern: {
              value:/(?=.*.@.)(?=.*([.]com|[.]net|[.]co[.]il|[.]org|[.]gov|[.]ac[.]il|[.]muni[.]il))/,
              message: "Email must be valid"
            },
          })}
        />
        {errors && errors?.email && errors.email.message}
        <select
          name=""
          className="input-text-style"
          {...register("association", {
            required: true,
            pattern: { value: /\D/ },
          })}
        >
          <option disabled selected value="0">
            מי את/ה?*
          </option>
          <option value="alumni"> בוגר CYBERPRO </option>
          <option value="partner">שותף עסקי</option>
        </select>
        <input
          className="input-text-style"
          type="text"
          placeholder=" שם החברה"
          {...register("cooperation")}
        />
        <input
          className="input-text-style"
          type="text"
          placeholder=" תפקיד"
          {...register("role")}
        />
        <div className="linkedin-form">
          <input
            className="input-text-style"
            type="text"
            placeholder=" קישור לפרופיל לינקדאין"
            {...register("linkedin")}
          />
        </div>
        <label className="spam-checkbox" htmlFor="">
          <input
            type="checkbox"
            name="spam"
            id="spam-checkbox"
            {...register("spam")}
          />
          <div className="label-spam">
            {" "}
            הנני מאשר קבלת מידע, הצעות שיווקיות ו/או דברי פרסום מחברת CYBERPRO -
            Israel בע"מ
          </div>
        </label>
        <div id="submit-container">
         {loader? 
         <div class="wrapper">
         <div class="circle"></div>
         <div class="circle"></div>
         <div class="circle"></div>
         <div class="shadow"></div>
         <div class="shadow"></div>
         <div class="shadow"></div>
     </div>
         :<input className="submit-register" value={"הרשמה"} type="submit" />}
        </div>
      </form>
      <div className="space-holder"></div>
    </div>
  );
}

export default RegisterForm;
