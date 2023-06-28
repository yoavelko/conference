import './Contact.css'

function Contact() {
    return (
        <div id='contact-container'>
            <div id="contact-header">
                <h1>
                    צור קשר
                </h1>
            </div>
            <div id="contact-links">
                <div className="contact-link-section">
                    <a href="https://api.whatsapp.com/send?phone=972502449054&text=שלום,%20ארצה%20לשמוע%20עוד%20על%20הכנס%20שיקרה%20ב-2.8" target="_blank" rel="noopener noreferrer">
                        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAACXBIWXMAAAsTAAALEwEAmpwYAAAC7UlEQVR4nM3XW4hWVRQH8MlGHTPwUiSBYBfRlxCDXiK8zOiTlzIhEATBB8EXlRKffCkCSauBoIcUZVS8QCqKWkkopowkPvVQZEVBhCM+jNNF0cz6xWJWdubznG/m+2aCNhz4ztpr7/86a//Xf6+vpeX/PjAOS/EO9uNcPvH7bSxB20gCPoW9uIFefIh38Wo+8fsQrqfPbjw5HMCx6MTvOI52tNbxb0UHTuaayMzYRkGn4AIuY04TQc/Dt+jGY42A/oBTmNgoaGGfSfgU3w8Knum9kKCVaW0AvDXBuzGmnmNnpnfAl+JxzA5mN/nl3wTz67E3SDG3xr4Wf+gfXzSTCczH7VK2Z8mcqLE9mwtexMP4GcsaBc69PsKeMnGIGmyvsX8QARXe34szaxJ4AX4bIDKpSL21aUxl2lB4n4k/Ma0J4NEpMouLxpC8QyXOR7Gl8L4ct6LkGgWOgSPYVjQcCKW5Z/jXvjEZOSqYjl+xrqXJoV9e9xcNZ/FaieMjmZ5g9hj8iDeHAbwxsIqGKPD1Fc6r8QumpxYHy1eOFPAJvF5nwUF8nWKwMut9Mx7M+fYM7iJeiaMZaqq34XAd4Ci3z3PjR/FSHsGlzEhUxJZ8+lL9FlaQa2vR8DJ6qiJNn4lZXrHp0yH8KbHXsBMPpN8E7IvjKymnPiwqGh9KAZlfBZx+bdkIBLs3VN232FUUnrQtvE9AcmIHjtUDLviuwk+ZpdCA55L1T+Sx3cELNWs+RlfZZjPwVyweInhbBnA61eyf8WWwv8a3I6vh/r3xfE6OHwpwCfmewdSSucn4bgCpahzewJlGQQcJaHRm5HxlI5ClsmkEQScnaHXro18a72JWWdRNgHZkes/X7bewAleiFrPZC/V5P4kSxDmWXcSoQdIaJfNJcmVr3T4rRjbhV/FVMrMnb6y4HOZgO26mz+GQ19D2bOg7U5H6sk67hnxf62++Q23WRFlV+ITILMNb2eDHxfJZrovaXTSif2H+q/E3X6RprW2LWagAAAAASUVORK5CYII=" />
                    </a>
                    <a href="https://api.whatsapp.com/send?phone=972502449054&text=שלום,%20ארצה%20לשמוע%20עוד%20על%20הכנס%20שיקרה%20ב-2.8" target="_blank" rel="noopener noreferrer">
                        <h2 id='contact-phone-text'>
                            050-244-9054
                        </h2>
                    </a>
                </div>
                <div className="contact-link-section">
                    <a href="http://" target="_blank" rel="noopener noreferrer">
                        <img width={40} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAACXBIWXMAAAsTAAALEwEAmpwYAAAEa0lEQVR4nO2cW4hVVRjHl2ZXw5kpSsyoTIPKwnyIoijMKIIInyR6KBOrl4jemupB5s16lOihInopfCkrUOmeYERaRhdo7GKkXaynMcbnfrHG/4HdZib3nLOv6/x/MDCcs8+31vr+a69v7bXXt0IwxhhjjDHGGGOMMcYYY4wxxhhjjDHGmBCAMWAz8BZwCDhB+pxQW99U28ca7wvA2cBTwPGmvdMCpoAngbOaEuMi4HNV5h/gHeAB4PIoVEgcTnbGlWrzuxlhDkTfNCHG0UwltoUhB9iW8cfR2kRRz+jdGZ8B64AjwNPAgjBkAAvU9iPyRfRJZH8tw5diRuR7YESfLVMFXm1sDG2A2Fa1ObZ9mT4bAX6Qj8brmE0dV8y4bZY7ZwfwKbA0JA6wVG3dkY+ZwHr5aKrS2Zemd5GP/uf23Qr8AqwJiQKsURu3zjVMRx/JV5uqrEicc0e2nOK6jcBfwIaQGMAGtW3jKa57WL56o8rK9MbGqwtce5160URIBOBx4Ffg+gLXXiNfHaqyQtMqZMk8pscHZhtnuwRwBvAK8BVwScHfLJGvpqus2Ax9zERe62qwB84H9gKvA+dU7a9QRwEK9uOaq68NHYGTw87PwDPAwj5+305BuhjsgbtU1/sHsNFuQWRjre6UiZYH79+AGwa0035BZGe5ll9ejgEztARgEfA88DVwaQn2uiGIbC0GdgKfABeWYXMQgPP0MLe76CwyKUEywX4COAysLstuH/W4Qi+btvcTvJMRJGP3XgXQe8q2XaDsO4E/q1ji6Kwgsn0j8HvlK6T/LfMR4Bhwa0X2uytIJtgfBF4CTq84eD8HfANcVmE53RYkApyrRcx9wAWhmuD9IbCnrOCdtCC5YP8TcFUoCWAVMFl28E5ekB7AfQr2d4cBAe5Q8H5wUFtDK0gEuGnQYJ8J3uv6tdFnuekJEgEuBr4EXphPsAdO0/D0LbAi1EyygmSC/dvA+0XeU+t9xC7tF5vZjFE3SQuS6fFxKfxH4MowB9rA9p3uqEWhIZIXpEd8p68Affss390C/AE8GhpmaASJADfL8Y/lNhYcy29RaoqhEiQ3NG3XX/x/ZWgJyQgCLFSseLHAtSNaMt9dJHhrWeZZPxi2a+nkAy+dFF9c/MKLi8V7l5ffhyGG+AVVSwTJrequLstuH/XwK1xvcmjRHZLJT/Q2oKYF8Ua5FgniraQtEaTjm60PJ7XZOpMY6XSEsnHCDvNJ2BlV//27dCEyhcRUaIo8MziljWvlq8k6kj4fSiUPpOtJn7206I/n+N5p0SL6qI606DElw8ek+PW573xwgIivljMHB4yGKtERRChFeqYwH61B9miNUW3CiDxRqRiZaWxMdY748BkaPnxGovh4phx6eKz/eKacKLEX9Hgv7pvVhubOHhJQFMXMVWpz3LzXY3/tYuSGr3EFr2FnKsYM4MxGxMgJEwPZJiVxTmaO4EiZabV1p9pe7WzKGGOMMcYYY4wxxhhjjDHGGGOMMcYYEzrCvyqqvlpKlYRqAAAAAElFTkSuQmCC" />
                    </a>
                    <a href="http://" target="_blank" rel="noopener noreferrer">
                        <h2 id='contact-email-text'>
                            shani@gmail.com
                        </h2>
                    </a>
                </div>
            </div>
            <div id='contact-travel'>
                <h1>דרכי הגעה</h1>
                <a className='link-adress-a' href="https://www.waze.com/he/live-map/directions?to=ll.32.071474%2C34.789345">
                    <span style={{ marginLeft: "2vw" }}><img width="30" height="30" src="https://img.icons8.com/color/48/waze.png" alt="waze" /></span>
                </a>
            </div>
        </div >
    )
}

export default Contact