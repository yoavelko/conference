import { useState } from "react";
import "./register-from.css";
import axios from "axios";
import { createVisitor } from "../../utils/VisitorRoute";
import { useForm } from "react-hook-form";
function RegisterForm() {
  const [spam, setSpam] = useState(false);
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (e) => {
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
      })
      .catch((error) => {
        console.error(error);
        alert(error.response.data);
      });
  };
  return (
    <div className="register-form-container" id="registration">
      <div id="register-effect"></div>
     <h2> <div className="register-form-title">רישום לכנס</div></h2>
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
          {...register("phone", { required: true })}
        />
        <input
          className="input-text-style"
          type="email"
          placeholder="אימייל*"
          {...register("email", {
            required: true,
            pattern: {
              value:
                /(?=.*.@.)(?=.*([.]com|[.]net|[.]co[.]il|[.]org|[.]gov|[.]ac[.]il|[.]muni[.]il))/,
            },
          })}
        />
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
            placeholder=" לינק לפרופיל לינקדאין"
            {...register("linkedin")}
          />
        </div>
        <label className="spam-checkbox" htmlFor="">
          <a
            className="linkedin-link-form-new"
            href="https://www.linkedin.com/in/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              width="30"
              height="30"
              src="https://img.icons8.com/fluency/48/linkedin.png"
              alt="linkedin"
            />
          </a>
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
          <input className="submit-register" value={"הרשמה"} type="submit" />
        </div>
      </form>
      <div className="space-holder"></div>
    </div>
  );
}

export default RegisterForm;
