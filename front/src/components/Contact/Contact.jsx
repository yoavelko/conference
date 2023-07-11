import "./Contact.css";
import { useContext, useEffect } from "react";
import { FixedContext } from "../../contexts/FixedContext";
import RegisterForm from "../Homepage.jsx/RegisterForm";

function Contact() {
    const { fix, setFix } = useContext(FixedContext);



    return (
        <div id='contact-container'>
            <div id="contact-mentoring-container">
                <h1 id="contact-header">צור קשר</h1>
                <div className="all-icons-buttons">
                    <div className="only-contact-us-icons">
                        <div id="whatsapp-mentor">
                            <a
                                href="https://api.whatsapp.com/send?phone=972502449054&text=שלום,%20ארצה%20לשמוע%20עוד%20על%20תכנית%20המנטורינג"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <div id="whatsapp-mentor-container">
                                    <img
                                        id="link-logo-mentoring"
                                        src="data:image/jpeg;base64,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"
                                    ></img>
                                    <div className="mentoring-text" id='contact-inner-text'>
                                        &nbsp;
                                        050-2449-054
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div id="whatsapp-mentor">
                            <a
                                className="icon-container"
                                href="mailto:Shanigal@cyberpro-israel.co.il?subject=%D7%A7%D7%94%D7%99%D7%9C%D7%AA%20%D7%94%D7%9E%D7%A0%D7%98%D7%95%D7%A8%D7%99%D7%A0%D7%92&body=%D7%94%D7%99%D7%99%20%D7%A9%D7%A0%D7%99%2C%20%D7%90%D7%A9%D7%9E%D7%97%20%D7%9C%D7%A7%D7%91%D7%9C%20%D7%A4%D7%A8%D7%98%D7%99%D7%9D%20%D7%A0%D7%95%D7%A1%D7%A4%D7%99%D7%9D%20%D7%A2%D7%9C%20%D7%A7%D7%94%D7%99%D7%9C%D7%AA%20%D7%94%D7%9E%D7%A0%D7%98%D7%95%D7%A8%D7%99%D7%A0%D7%92"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <div id="mail-mentor-container">
                                    <img
                                        id="link-logo-mentoring"
                                        src="data:image/png;base64,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"
                                    />
                                    <div className="mentoring-text" id='contact-inner-text'>
                                        &nbsp;
                                        Shanigal@cyberpro-israel.co.il
                                    </div>
                                </div>
                            </a>
                        </div>
                    </div>
                    <div className="only-location-icons">
                        <div id="whatsapp-mentor">
                            <a target='blank' className='icon-container' id='link-adress-a' href="https://www.waze.com/he/live-map/directions?to=ll.32.071474%2C34.789345">
                                <div id="waze-mentor-container">
                                    <img width={40} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAAElUlEQVR4nO1ZzU8rVRSvbtSNG10av2PizvjxH5jowo0Lo0t9C11q3ouaqLw+3sw5d6Dlm/Bh2AAJJHzIV5BvI4QCJm74MEopLQkkJEih+LAMtMwx59rbNC/yZqbtlBfTX3LTycw9c35nzrnnnnvq85VRRhll3A9EfAsAvkLEQQBYQ8Q4IqYyI873AGBA1/UvdV1/0/cwIBgMPo2I3yJiFBHJ5YgCwDeI+FTJidfU1DyBiBWIeE8Rqquro+HhYVpbW6Pd3V06Ojqii4sLOfia762urtLQ0JCcm2PIPQD4zu/3P14S8kKINxDxd0Wgq6uLtre3ybIscgrLsigSiVBnZ2euIb/puv66p+QB4CNEPGOF7e3tFIvFqFDEYjFqa2uTRgBAEhE/9IS8rus3EPGSFQ0ODpJpmlQsnJ+f08jIiDLCAoDPik3+HQBIs4JQKEReYXFxUYUTf6j3ikJe07TnACDBL56amiKvMTs7qzyRMAzj2YINAIApfmF/fz+VApZlUV9fn/LEjwWRR8R3+UWBQIASiQSVCicnJ1In6xZCvF2IAT/zS5aWlqjUCIVCKpTm8iX/CmeEYDBom3G2traoqalJDs7vhc5TmYl1MwdN015ybQAA3OIvMDY2RnZgQmpDam5uLniewujoqPLC5/kYMMzCGxsbdF0GrK+vKwN+cG0AIoZZ+PDw0FYRhwOTY1JcVhQ6T+Hg4EAZ/Ec+HviLhTkWrwumaWb3hHw8IMsGN0VasXF5eak8kHJFvqGh4TEWrK6udqSIs4tdVslFJBJxFEJ5e8AwjGecLjQGbzqGYVAymbSde3Z2RlVVVTJFerYGhBDvs2BPT48jA3p7e6WihYUFxwVbv4PSRGUhPqY6Jk9Ej6j6Z2VlxZEBm5ubUhF7gk9eV2Fvby9bIjgJOVf7gN/vf1QI8Twifs9C9fX1rmp+pYxDiSvK/f19mcF48PXc3JwMHUSk8fFx2/fl7sRCiBevJK5p2gtcbyDiudpkePHu7OyQ24zB5faDDvJCCJqZmZFz7bC8vKzkZh/45TPk5ZdraWmRpUM8Hqd8wV97YmJCHjk5XHjwNd/jZ05wenpKtbW1zqpRADjliVzCPgywLEsu8Ezsj9vGPiL+xJMHBgYcudZrTE9PK/JHnM6dGPAyT1aH9essHRYzKZbP33wO97ns9XArkFpbW4vSLnED0zRlU0x1JYQQn/rcwjCMVxFxVWWM7u5uCofDlE6nPSUfjUazfSFE/FsI8YEvX3B7TwjxNQAcKkM4G3Bm4rbg5OSk9BDnc/7lnTeVSjkiyi3G+fn5rHxjY6MsVZQeANjQdf21vMnfZ8iTiPgFIv5i16RlQlzMcYo8Pj6Wg+sdHgxODNwQ6Ojo+E95AEgLIW571hvNLHJZWng1AOCOJ+RzjIgoZTfvVtGN2wG6WWnkEkgCwK9cNQLANgD8yZkt0ya8QMS0jfyW1wZky4xPKqrp44qAJJFDwPRSvrgeqDQkiVt3/y3MMiPspXzBQMRKmzj2eylflH9kAGDpCuUhfu6lfFGQIXGHFxzHdObX71R5ofJllFHG/wj/AB9zeoFoc/VTAAAAAElFTkSuQmCC"></img>
                                    <div className="mentoring-text" id='contact-inner-text'>
                                        &nbsp;
                                        דרך מנחם בגין 121, תל-אביב
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div id="whatsapp-mentor">
                            <a target='blank' className='icon-container' href="https://www.google.com/maps/place/Derech+Menachem+Begin+121,+Tel+Aviv-Jaffa/@32.0718027,34.7890235,17z/data=!4m6!3m5!1s0x151d4b9c46209285:0x4aa8c0e33c2116d8!8m2!3d32.0718027!4d34.7890235!16s%2Fg%2F11gbx9_6th">
                                <div id="google-mentor-container">
                                    <img width={35} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAAEiElEQVR4nO2ZXYhVVRTHj0QfEmr2BdZEaGYU0ceDBGFR0EMFPiWoE5RDEVT2EPUQRTWaOWNpRg+BRtSjMxZEWg+BZUYv9RDZhxVCZFJESTpZYjn+Ys3897TnzDn77H3vObf7MH+4cO/ea6+zf2etvfc692TZtKY1IeB84H7gHeArYAQ4CuwD3gUeBHqybhVwLrAFOEG1/gG2Ahdk3SRgKXBIkzwObANWAJcBZ+pj31eqz2xQtJZm3SBgle6waRiYHzFmAfCGxowCq2MudBawGfiR5mTp9HALN+ERjR0NRkYQX9K8kiFyMKYjwLysSIqE6QtgMXBKVpOA1+V7uAZfb8rXljKDgzJY3O7Fcn4v0ro4HrMmqgRcIl/m88Iig5MCmRQJ+w30AbuBw8BfwF7gSWBOxIUfld9tAZseYLt2phHd9UsD9rZRmB4o6hxTru0c4KNAvu+37bICxA4708oAhNuOfR0qvOPjY+6Uzc5KEEXCh/hG62itomOhXRaCkB+3Ay4q6bdImHbYxPXZqbahkjF2zpj2xYBYOjm9Apyes4/Kd+CYfMwq6bdUwr/7jK8r0+GSMbPUPxID8qEXiUkQKfJAZpb021aKX1NRDTJT/cdiQH5X0+ac3fdF+RwAOSCbBRXbqaVTjz5uXW0P7FymH2JA/lTTMxEgU+/Mf/aW+6bekv5FwG9FNwdYWDLmLtnsiAH5XE17cnZWzN2nj6sE9gdAVsvmrYCNLfAhpdkRbQALA/a75LMvBsTOCad7CuyvA/5W/9bARc/TOrE66fKsTQFX6MyzjJkdAzLby28b+BpwC3AT8JS3SA3mqoqLvyfbt9uEmOFF48Uyo0kgarsa+JlyGeBDFRfvz43pawPkbvn4FZgbDaL2eXqacxFw+hi4LRLCDs9X9f2PUPlRJu1Ubg6rQoaFIF7/aZbjwJWFuTnVfo0HMVYBaEGbPjV/VT5y1/4ktCVHg6SoCELtZwM/qe/5BH+bvEyY2xGQMgj1LfMedW193Rrh73avMq+eXx0gKihjIFyaHAw9CjD+1Ooi2BmQBAjbAE4FPgs+6WVj46xYNe3pCEgCxBiI2q/RGWRpc32BzyXqO+rVVs2BWC0WCTHsRyV3A94v8LtbfY8lza8VEG8iJ/JPgMAdXgnzdEHboMpx9+B1szfWKghUoJ7RKAiwLjISQxXrxf7fNe3ybD5Q273J80sBSYiEs+kN2LykMt7Ww3zgYn3/xUWjEZCESPTnSpSQrSs9Hgee0PdnW5lflKE5j4Xw2mNhTF/rlYLp2kZAEtJpsGBsf2Sa4S3yGbWDJERiTQ2lS+Eh2TYIsD5yAmtrPDhfrhXEO+yq0mlD5QWmRqYqzQZrAWkCogWYDW2BJEA8lwpRsnn0Vl2DVBBgIDKP17UK0cKZNNAKSKORaCMyySAdg2gFJotw5h4nlwdCvL5uiMhtfrn6RmMcuVdvSzoNUQUD3Kj2AzFOXpDxt8ANeok/sdiahvDmMeDBrBDEd2rbGONgjt7odqv2xryz9GE26T/fib9g/ked1Fw2xvwpOK2si/QvPBvqM7dG19YAAAAASUVORK5CYII="></img>
                                    <div className="mentoring-text" id='contact-inner-text'>
                                        &nbsp;
                                        דרך מנחם בגין 121, תל-אביב
                                    </div>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <br />
            <RegisterForm />
            <iframe src="https://www.google.com/maps/d/embed?mid=1kAGy6WRb-0mp0q7Gce9GCSuYR_DzPYc&ehbc=2E312F" width="100%" height="480" ></iframe>
        </div >
    );

}

export default Contact;
