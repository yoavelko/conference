import './Contact.css'
import { useContext, useEffect } from 'react'
import { FixedContext } from '../../contexts/FixedContext'

function Contact() {

    const {fix, setFix} = useContext(FixedContext)

    useEffect (() => {
        setFix(false)
    },[])

    return (
        <div id='contact-container'>
            <div id='contact-row'>
                <div>
                    <div id="contact-header">
                        <h1>
                            צור קשר
                        </h1>
                    </div>
                    <div id="contact-links">
                        <div className="contact-link-section">
                            <a className='icon-container' href="https://api.whatsapp.com/send?phone=972502449054&text=שלום,%20ארצה%20לשמוע%20עוד%20על%20הכנס%20שיקרה%20ב-2.8" target="_blank" rel="noopener noreferrer">
                                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAACXBIWXMAAAsTAAALEwEAmpwYAAAC7UlEQVR4nM3XW4hWVRQH8MlGHTPwUiSBYBfRlxCDXiK8zOiTlzIhEATBB8EXlRKffCkCSauBoIcUZVS8QCqKWkkopowkPvVQZEVBhCM+jNNF0cz6xWJWdubznG/m+2aCNhz4ztpr7/86a//Xf6+vpeX/PjAOS/EO9uNcPvH7bSxB20gCPoW9uIFefIh38Wo+8fsQrqfPbjw5HMCx6MTvOI52tNbxb0UHTuaayMzYRkGn4AIuY04TQc/Dt+jGY42A/oBTmNgoaGGfSfgU3w8Knum9kKCVaW0AvDXBuzGmnmNnpnfAl+JxzA5mN/nl3wTz67E3SDG3xr4Wf+gfXzSTCczH7VK2Z8mcqLE9mwtexMP4GcsaBc69PsKeMnGIGmyvsX8QARXe34szaxJ4AX4bIDKpSL21aUxl2lB4n4k/Ma0J4NEpMouLxpC8QyXOR7Gl8L4ct6LkGgWOgSPYVjQcCKW5Z/jXvjEZOSqYjl+xrqXJoV9e9xcNZ/FaieMjmZ5g9hj8iDeHAbwxsIqGKPD1Fc6r8QumpxYHy1eOFPAJvF5nwUF8nWKwMut9Mx7M+fYM7iJeiaMZaqq34XAd4Ci3z3PjR/FSHsGlzEhUxJZ8+lL9FlaQa2vR8DJ6qiJNn4lZXrHp0yH8KbHXsBMPpN8E7IvjKymnPiwqGh9KAZlfBZx+bdkIBLs3VN232FUUnrQtvE9AcmIHjtUDLviuwk+ZpdCA55L1T+Sx3cELNWs+RlfZZjPwVyweInhbBnA61eyf8WWwv8a3I6vh/r3xfE6OHwpwCfmewdSSucn4bgCpahzewJlGQQcJaHRm5HxlI5ClsmkEQScnaHXro18a72JWWdRNgHZkes/X7bewAleiFrPZC/V5P4kSxDmWXcSoQdIaJfNJcmVr3T4rRjbhV/FVMrMnb6y4HOZgO26mz+GQ19D2bOg7U5H6sk67hnxf62++Q23WRFlV+ITILMNb2eDHxfJZrovaXTSif2H+q/E3X6RprW2LWagAAAAASUVORK5CYII=" />
                            </a>
                            <a href="https://api.whatsapp.com/send?phone=972502449054&text=שלום,%20ארצה%20לשמוע%20עוד%20על%20הכנס%20שיקרה%20ב-2.8" target="_blank" rel="noopener noreferrer">
                                <h2 id='contact-phone-text'>
                                    050-244-9054
                                </h2>
                            </a>
                        </div>
                    </div>
                    <div className="contact-link-section">
                        <a className='icon-container' href="http://" target="_blank" rel="noopener noreferrer">
                            <img width={40} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAACXBIWXMAAAsTAAALEwEAmpwYAAAEa0lEQVR4nO2cW4hVVRjHl2ZXw5kpSsyoTIPKwnyIoijMKIIInyR6KBOrl4jemupB5s16lOihInopfCkrUOmeYERaRhdo7GKkXaynMcbnfrHG/4HdZib3nLOv6/x/MDCcs8+31vr+a69v7bXXt0IwxhhjjDHGGGOMMcYYY4wxxhhjjDHGmBCAMWAz8BZwCDhB+pxQW99U28ca7wvA2cBTwPGmvdMCpoAngbOaEuMi4HNV5h/gHeAB4PIoVEgcTnbGlWrzuxlhDkTfNCHG0UwltoUhB9iW8cfR2kRRz+jdGZ8B64AjwNPAgjBkAAvU9iPyRfRJZH8tw5diRuR7YESfLVMFXm1sDG2A2Fa1ObZ9mT4bAX6Qj8brmE0dV8y4bZY7ZwfwKbA0JA6wVG3dkY+ZwHr5aKrS2Zemd5GP/uf23Qr8AqwJiQKsURu3zjVMRx/JV5uqrEicc0e2nOK6jcBfwIaQGMAGtW3jKa57WL56o8rK9MbGqwtce5160URIBOBx4Ffg+gLXXiNfHaqyQtMqZMk8pscHZhtnuwRwBvAK8BVwScHfLJGvpqus2Ax9zERe62qwB84H9gKvA+dU7a9QRwEK9uOaq68NHYGTw87PwDPAwj5+305BuhjsgbtU1/sHsNFuQWRjre6UiZYH79+AGwa0035BZGe5ll9ejgEztARgEfA88DVwaQn2uiGIbC0GdgKfABeWYXMQgPP0MLe76CwyKUEywX4COAysLstuH/W4Qi+btvcTvJMRJGP3XgXQe8q2XaDsO4E/q1ji6Kwgsn0j8HvlK6T/LfMR4Bhwa0X2uytIJtgfBF4CTq84eD8HfANcVmE53RYkApyrRcx9wAWhmuD9IbCnrOCdtCC5YP8TcFUoCWAVMFl28E5ekB7AfQr2d4cBAe5Q8H5wUFtDK0gEuGnQYJ8J3uv6tdFnuekJEgEuBr4EXphPsAdO0/D0LbAi1EyygmSC/dvA+0XeU+t9xC7tF5vZjFE3SQuS6fFxKfxH4MowB9rA9p3uqEWhIZIXpEd8p68Affss390C/AE8GhpmaASJADfL8Y/lNhYcy29RaoqhEiQ3NG3XX/x/ZWgJyQgCLFSseLHAtSNaMt9dJHhrWeZZPxi2a+nkAy+dFF9c/MKLi8V7l5ffhyGG+AVVSwTJrequLstuH/XwK1xvcmjRHZLJT/Q2oKYF8Ua5FgniraQtEaTjm60PJ7XZOpMY6XSEsnHCDvNJ2BlV//27dCEyhcRUaIo8MziljWvlq8k6kj4fSiUPpOtJn7206I/n+N5p0SL6qI606DElw8ek+PW573xwgIivljMHB4yGKtERRChFeqYwH61B9miNUW3CiDxRqRiZaWxMdY748BkaPnxGovh4phx6eKz/eKacKLEX9Hgv7pvVhubOHhJQFMXMVWpz3LzXY3/tYuSGr3EFr2FnKsYM4MxGxMgJEwPZJiVxTmaO4EiZabV1p9pe7WzKGGOMMcYYY4wxxhhjjDHGGGOMMcYYEzrCvyqqvlpKlYRqAAAAAElFTkSuQmCC" />
                        </a>
                        <a className='icon-container' href="mailto: Shanigal@cyberpro-israel.co.il?subject=%D7%9B%D7%A0%D7%A1%20%D7%91%D7%95%D7%92%D7%A8%D7%99%D7%9D%20%D7%A1%D7%99%D7%99%D7%91%D7%A8%D7%A4%D7%A8%D7%95%202.8&body=%D7%A9%D7%9C%D7%95%D7%9D%20%D7%A9%D7%A0%D7%99%2C%0D%0A%D7%90%D7%A0%D7%99%20%D7%9E%D7%A2%D7%95%D7%A0%D7%99%D7%99%D7%9F%20%D7%9C%D7%A7%D7%91%D7%9C%20%D7%9E%D7%99%D7%93%D7%A2%20%D7%A2%D7%9C%20%D7%94%D7%9B%D7%A0%D7%A1%20%D7%94%D7%A7%D7%A8%D7%95%D7%91.">
                            <h2 id='contact-email-text'>
                                Shanigal@cyberpro-israel.co.il
                            </h2>
                        </a>
                    </div>
                </div>
                <div>

                    <div id='contact-travel'>
                        <h1>דרכי הגעה</h1>
                        <div id="contact-travel-icons">
                            <a className='icon-container' id='link-adress-a' href="https://www.waze.com/he/live-map/directions?to=ll.32.071474%2C34.789345">
                                <img width={60} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAAElUlEQVR4nO1ZzU8rVRSvbtSNG10av2PizvjxH5jowo0Lo0t9C11q3ouaqLw+3sw5d6Dlm/Bh2AAJJHzIV5BvI4QCJm74MEopLQkkJEih+LAMtMwx59rbNC/yZqbtlBfTX3LTycw9c35nzrnnnnvq85VRRhll3A9EfAsAvkLEQQBYQ8Q4IqYyI873AGBA1/UvdV1/0/cwIBgMPo2I3yJiFBHJ5YgCwDeI+FTJidfU1DyBiBWIeE8Rqquro+HhYVpbW6Pd3V06Ojqii4sLOfia762urtLQ0JCcm2PIPQD4zu/3P14S8kKINxDxd0Wgq6uLtre3ybIscgrLsigSiVBnZ2euIb/puv66p+QB4CNEPGOF7e3tFIvFqFDEYjFqa2uTRgBAEhE/9IS8rus3EPGSFQ0ODpJpmlQsnJ+f08jIiDLCAoDPik3+HQBIs4JQKEReYXFxUYUTf6j3ikJe07TnACDBL56amiKvMTs7qzyRMAzj2YINAIApfmF/fz+VApZlUV9fn/LEjwWRR8R3+UWBQIASiQSVCicnJ1In6xZCvF2IAT/zS5aWlqjUCIVCKpTm8iX/CmeEYDBom3G2traoqalJDs7vhc5TmYl1MwdN015ybQAA3OIvMDY2RnZgQmpDam5uLniewujoqPLC5/kYMMzCGxsbdF0GrK+vKwN+cG0AIoZZ+PDw0FYRhwOTY1JcVhQ6T+Hg4EAZ/Ec+HviLhTkWrwumaWb3hHw8IMsGN0VasXF5eak8kHJFvqGh4TEWrK6udqSIs4tdVslFJBJxFEJ5e8AwjGecLjQGbzqGYVAymbSde3Z2RlVVVTJFerYGhBDvs2BPT48jA3p7e6WihYUFxwVbv4PSRGUhPqY6Jk9Ej6j6Z2VlxZEBm5ubUhF7gk9eV2Fvby9bIjgJOVf7gN/vf1QI8Twifs9C9fX1rmp+pYxDiSvK/f19mcF48PXc3JwMHUSk8fFx2/fl7sRCiBevJK5p2gtcbyDiudpkePHu7OyQ24zB5faDDvJCCJqZmZFz7bC8vKzkZh/45TPk5ZdraWmRpUM8Hqd8wV97YmJCHjk5XHjwNd/jZ05wenpKtbW1zqpRADjliVzCPgywLEsu8Ezsj9vGPiL+xJMHBgYcudZrTE9PK/JHnM6dGPAyT1aH9essHRYzKZbP33wO97ns9XArkFpbW4vSLnED0zRlU0x1JYQQn/rcwjCMVxFxVWWM7u5uCofDlE6nPSUfjUazfSFE/FsI8YEvX3B7TwjxNQAcKkM4G3Bm4rbg5OSk9BDnc/7lnTeVSjkiyi3G+fn5rHxjY6MsVZQeANjQdf21vMnfZ8iTiPgFIv5i16RlQlzMcYo8Pj6Wg+sdHgxODNwQ6Ojo+E95AEgLIW571hvNLHJZWng1AOCOJ+RzjIgoZTfvVtGN2wG6WWnkEkgCwK9cNQLANgD8yZkt0ya8QMS0jfyW1wZky4xPKqrp44qAJJFDwPRSvrgeqDQkiVt3/y3MMiPspXzBQMRKmzj2eylflH9kAGDpCuUhfu6lfFGQIXGHFxzHdObX71R5ofJllFHG/wj/AB9zeoFoc/VTAAAAAElFTkSuQmCC"></img>
                            </a>
                            <a className='icon-container' href="https://www.google.com/maps/place/Derech+Menachem+Begin+121,+Tel+Aviv-Jaffa/@32.0718027,34.7890235,17z/data=!4m6!3m5!1s0x151d4b9c46209285:0x4aa8c0e33c2116d8!8m2!3d32.0718027!4d34.7890235!16s%2Fg%2F11gbx9_6th">
                                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAAEiElEQVR4nO2ZXYhVVRTHj0QfEmr2BdZEaGYU0ceDBGFR0EMFPiWoE5RDEVT2EPUQRTWaOWNpRg+BRtSjMxZEWg+BZUYv9RDZhxVCZFJESTpZYjn+Ys3897TnzDn77H3vObf7MH+4cO/ea6+zf2etvfc692TZtKY1IeB84H7gHeArYAQ4CuwD3gUeBHqybhVwLrAFOEG1/gG2Ahdk3SRgKXBIkzwObANWAJcBZ+pj31eqz2xQtJZm3SBgle6waRiYHzFmAfCGxowCq2MudBawGfiR5mTp9HALN+ERjR0NRkYQX9K8kiFyMKYjwLysSIqE6QtgMXBKVpOA1+V7uAZfb8rXljKDgzJY3O7Fcn4v0ro4HrMmqgRcIl/m88Iig5MCmRQJ+w30AbuBw8BfwF7gSWBOxIUfld9tAZseYLt2phHd9UsD9rZRmB4o6hxTru0c4KNAvu+37bICxA4708oAhNuOfR0qvOPjY+6Uzc5KEEXCh/hG62itomOhXRaCkB+3Ay4q6bdImHbYxPXZqbahkjF2zpj2xYBYOjm9Apyes4/Kd+CYfMwq6bdUwr/7jK8r0+GSMbPUPxID8qEXiUkQKfJAZpb021aKX1NRDTJT/cdiQH5X0+ac3fdF+RwAOSCbBRXbqaVTjz5uXW0P7FymH2JA/lTTMxEgU+/Mf/aW+6bekv5FwG9FNwdYWDLmLtnsiAH5XE17cnZWzN2nj6sE9gdAVsvmrYCNLfAhpdkRbQALA/a75LMvBsTOCad7CuyvA/5W/9bARc/TOrE66fKsTQFX6MyzjJkdAzLby28b+BpwC3AT8JS3SA3mqoqLvyfbt9uEmOFF48Uyo0kgarsa+JlyGeBDFRfvz43pawPkbvn4FZgbDaL2eXqacxFw+hi4LRLCDs9X9f2PUPlRJu1Ubg6rQoaFIF7/aZbjwJWFuTnVfo0HMVYBaEGbPjV/VT5y1/4ktCVHg6SoCELtZwM/qe/5BH+bvEyY2xGQMgj1LfMedW193Rrh73avMq+eXx0gKihjIFyaHAw9CjD+1Ooi2BmQBAjbAE4FPgs+6WVj46xYNe3pCEgCxBiI2q/RGWRpc32BzyXqO+rVVs2BWC0WCTHsRyV3A94v8LtbfY8lza8VEG8iJ/JPgMAdXgnzdEHboMpx9+B1szfWKghUoJ7RKAiwLjISQxXrxf7fNe3ybD5Q273J80sBSYiEs+kN2LykMt7Ww3zgYn3/xUWjEZCESPTnSpSQrSs9Hgee0PdnW5lflKE5j4Xw2mNhTF/rlYLp2kZAEtJpsGBsf2Sa4S3yGbWDJERiTQ2lS+Eh2TYIsD5yAmtrPDhfrhXEO+yq0mlD5QWmRqYqzQZrAWkCogWYDW2BJEA8lwpRsnn0Vl2DVBBgIDKP17UK0cKZNNAKSKORaCMyySAdg2gFJotw5h4nlwdCvL5uiMhtfrn6RmMcuVdvSzoNUQUD3Kj2AzFOXpDxt8ANeok/sdiahvDmMeDBrBDEd2rbGONgjt7odqv2xryz9GE26T/fib9g/ked1Fw2xvwpOK2si/QvPBvqM7dG19YAAAAASUVORK5CYII="></img>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <iframe src="https://www.google.com/maps/d/embed?mid=1kAGy6WRb-0mp0q7Gce9GCSuYR_DzPYc&ehbc=2E312F" width="100%" height="480" ></iframe>
        </div >
    )
}

export default Contact