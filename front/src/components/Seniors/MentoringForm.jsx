import "./mentoring-form.css";
import logos from "./mentoringLogo.json";
function MentoringForm() {
  const logo = logos.logos;
  return (
    <div className="mentoring-form-container">
      <div className="mentoring-details">
        <br />
        <div className="mentoring-title">קהילת המנטורים</div>
        <br />
        <div className="mentoring-explain"></div>
        <span className="mentoring-subtitle">תכנית המנטורינג-</span>

        <div>
          הלוחמים והלוחמות שלנו נהנים ממפגש ישיר עם המנטורים העסקיים, מהם הם
          מקבלים כלים מקצועיים ושימושיים מעולם היזמות והעסקים. חלק מעמיתי
          "סייברפרו" משמשים כמלווים מקצועיים של הלוחמים ולוחמות, מכשירים וחונכים
          אותם בעולמות הפיתוח, ומלווים אותם בתהליך המשמעותי שהם עוברים.
        </div>
        <br />
        <div>
          המרוויחים הנוספים הם אנשי העסקים והיזמים אשר לוקחים חלק בשינוי חברתי
          כלכלי משמעותי בישראל. זוהי הזדמנות נדירה לפגוש הלוחמים והלוחמות
          ממגזרים וממקומות שונים ברחבי הארץ, להעניק מהידע והניסיון האישי
          והמקצועי ולהשפיע על התפתחותם ועתידם. נוסף על הידע המקצועי שהם חולקים
          עם הלוחמים ולוחמות, ישנם הערכים החשובים של העשייה החברתית יחד עם תחושת
          הסיפוק ושימוש כמודל לחיקוי עבור הדור הצעיר.
        </div>
      </div>
      <br />
      <div className="mentoring-form-title">
        <div>רוצים לקחת חלק גם?</div>
        <div>
          <a
            href="https://api.whatsapp.com/send?phone=972502449054&text=שלום,%20ארצה%20לשמוע%20עוד%20על%20תכנית%20המנטורינג"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div id="whatsapp-container">
              <img
                id="link-logo-mentoring"
                src="data:image/jpeg;base64,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"
              ></img>
            </div>
          </a>
        </div>
        <div>
          <a
            className="icon-container"
            href="mailto:Shanigal@cyberpro-israel.co.il?subject=%D7%A7%D7%94%D7%99%D7%9C%D7%AA%20%D7%94%D7%9E%D7%A0%D7%98%D7%95%D7%A8%D7%99%D7%A0%D7%92&body=%D7%94%D7%99%D7%99%20%D7%A9%D7%A0%D7%99%2C%20%D7%90%D7%A9%D7%9E%D7%97%20%D7%9C%D7%A7%D7%91%D7%9C%20%D7%A4%D7%A8%D7%98%D7%99%D7%9D%20%D7%A0%D7%95%D7%A1%D7%A4%D7%99%D7%9D%20%D7%A2%D7%9C%20%D7%A7%D7%94%D7%99%D7%9C%D7%AA%20%D7%94%D7%9E%D7%A0%D7%98%D7%95%D7%A8%D7%99%D7%A0%D7%92"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              id="link-logo-mentoring"
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAACXBIWXMAAAsTAAALEwEAmpwYAAAEa0lEQVR4nO2cW4hVVRjHl2ZXw5kpSsyoTIPKwnyIoijMKIIInyR6KBOrl4jemupB5s16lOihInopfCkrUOmeYERaRhdo7GKkXaynMcbnfrHG/4HdZib3nLOv6/x/MDCcs8+31vr+a69v7bXXt0IwxhhjjDHGGGOMMcYYY4wxxhhjjDHGmBCAMWAz8BZwCDhB+pxQW99U28ca7wvA2cBTwPGmvdMCpoAngbOaEuMi4HNV5h/gHeAB4PIoVEgcTnbGlWrzuxlhDkTfNCHG0UwltoUhB9iW8cfR2kRRz+jdGZ8B64AjwNPAgjBkAAvU9iPyRfRJZH8tw5diRuR7YESfLVMFXm1sDG2A2Fa1ObZ9mT4bAX6Qj8brmE0dV8y4bZY7ZwfwKbA0JA6wVG3dkY+ZwHr5aKrS2Zemd5GP/uf23Qr8AqwJiQKsURu3zjVMRx/JV5uqrEicc0e2nOK6jcBfwIaQGMAGtW3jKa57WL56o8rK9MbGqwtce5160URIBOBx4Ffg+gLXXiNfHaqyQtMqZMk8pscHZhtnuwRwBvAK8BVwScHfLJGvpqus2Ax9zERe62qwB84H9gKvA+dU7a9QRwEK9uOaq68NHYGTw87PwDPAwj5+305BuhjsgbtU1/sHsNFuQWRjre6UiZYH79+AGwa0035BZGe5ll9ejgEztARgEfA88DVwaQn2uiGIbC0GdgKfABeWYXMQgPP0MLe76CwyKUEywX4COAysLstuH/W4Qi+btvcTvJMRJGP3XgXQe8q2XaDsO4E/q1ji6Kwgsn0j8HvlK6T/LfMR4Bhwa0X2uytIJtgfBF4CTq84eD8HfANcVmE53RYkApyrRcx9wAWhmuD9IbCnrOCdtCC5YP8TcFUoCWAVMFl28E5ekB7AfQr2d4cBAe5Q8H5wUFtDK0gEuGnQYJ8J3uv6tdFnuekJEgEuBr4EXphPsAdO0/D0LbAi1EyygmSC/dvA+0XeU+t9xC7tF5vZjFE3SQuS6fFxKfxH4MowB9rA9p3uqEWhIZIXpEd8p68Affss390C/AE8GhpmaASJADfL8Y/lNhYcy29RaoqhEiQ3NG3XX/x/ZWgJyQgCLFSseLHAtSNaMt9dJHhrWeZZPxi2a+nkAy+dFF9c/MKLi8V7l5ffhyGG+AVVSwTJrequLstuH/XwK1xvcmjRHZLJT/Q2oKYF8Ua5FgniraQtEaTjm60PJ7XZOpMY6XSEsnHCDvNJ2BlV//27dCEyhcRUaIo8MziljWvlq8k6kj4fSiUPpOtJn7206I/n+N5p0SL6qI606DElw8ek+PW573xwgIivljMHB4yGKtERRChFeqYwH61B9miNUW3CiDxRqRiZaWxMdY748BkaPnxGovh4phx6eKz/eKacKLEX9Hgv7pvVhubOHhJQFMXMVWpz3LzXY3/tYuSGr3EFr2FnKsYM4MxGxMgJEwPZJiVxTmaO4EiZabV1p9pe7WzKGGOMMcYYY4wxxhhjjDHGGGOMMcYYEzrCvyqqvlpKlYRqAAAAAElFTkSuQmCC"
            />
          </a>
        </div>
      </div>
      <br />
      <div className="logos-mentoring-icon">
        <div className="logos-line1">
          {logo?.map((value, index) => {
            return (
              <div key={index} className="image-logo-mentor">
                <a href={value.link} target="_blank" rel="noopener noreferrer">
                  <img className="image-logo-mentor" src={value.logo} alt="" />
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default MentoringForm;
