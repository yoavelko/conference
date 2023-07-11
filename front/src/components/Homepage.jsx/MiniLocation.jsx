import './mini-location.css'
function MiniLocation() {
  return (
    <div className='mini-location-container' >
      <h2 className="title-mini-location">
        איפה?
      </h2>
      <div className="mini-location-links">
        <div id="whatsapp-mentor">
          <a target='blank' className='icon-container' id='link-adress-a' href="https://www.waze.com/he/live-map/directions?to=ll.32.071474%2C34.789345">
            <div id="waze-hp-mentor-container">
              <img className="contact-scale-icons" width={35} src="data:image/png;base64,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"></img>
              <div className="mentoring-text" id='contact-inner-text'>
                &nbsp;
                דרך מנחם בגין 121, תל-אביב
              </div>
            </div>
          </a>
        </div>
        <div id="whatsapp-mentor">
          <a target='blank' className='icon-container' href="https://www.google.com/maps/place/Derech+Menachem+Begin+121,+Tel+Aviv-Jaffa/@32.0718027,34.7890235,17z/data=!4m6!3m5!1s0x151d4b9c46209285:0x4aa8c0e33c2116d8!8m2!3d32.0718027!4d34.7890235!16s%2Fg%2F11gbx9_6th">
            <div id="google-hp-mentor-container">
              <img className="contact-scale-icons" width={30} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAAEiElEQVR4nO2ZXYhVVRTHj0QfEmr2BdZEaGYU0ceDBGFR0EMFPiWoE5RDEVT2EPUQRTWaOWNpRg+BRtSjMxZEWg+BZUYv9RDZhxVCZFJESTpZYjn+Ys3897TnzDn77H3vObf7MH+4cO/ea6+zf2etvfc692TZtKY1IeB84H7gHeArYAQ4CuwD3gUeBHqybhVwLrAFOEG1/gG2Ahdk3SRgKXBIkzwObANWAJcBZ+pj31eqz2xQtJZm3SBgle6waRiYHzFmAfCGxowCq2MudBawGfiR5mTp9HALN+ERjR0NRkYQX9K8kiFyMKYjwLysSIqE6QtgMXBKVpOA1+V7uAZfb8rXljKDgzJY3O7Fcn4v0ro4HrMmqgRcIl/m88Iig5MCmRQJ+w30AbuBw8BfwF7gSWBOxIUfld9tAZseYLt2phHd9UsD9rZRmB4o6hxTru0c4KNAvu+37bICxA4708oAhNuOfR0qvOPjY+6Uzc5KEEXCh/hG62itomOhXRaCkB+3Ay4q6bdImHbYxPXZqbahkjF2zpj2xYBYOjm9Apyes4/Kd+CYfMwq6bdUwr/7jK8r0+GSMbPUPxID8qEXiUkQKfJAZpb021aKX1NRDTJT/cdiQH5X0+ac3fdF+RwAOSCbBRXbqaVTjz5uXW0P7FymH2JA/lTTMxEgU+/Mf/aW+6bekv5FwG9FNwdYWDLmLtnsiAH5XE17cnZWzN2nj6sE9gdAVsvmrYCNLfAhpdkRbQALA/a75LMvBsTOCad7CuyvA/5W/9bARc/TOrE66fKsTQFX6MyzjJkdAzLby28b+BpwC3AT8JS3SA3mqoqLvyfbt9uEmOFF48Uyo0kgarsa+JlyGeBDFRfvz43pawPkbvn4FZgbDaL2eXqacxFw+hi4LRLCDs9X9f2PUPlRJu1Ubg6rQoaFIF7/aZbjwJWFuTnVfo0HMVYBaEGbPjV/VT5y1/4ktCVHg6SoCELtZwM/qe/5BH+bvEyY2xGQMgj1LfMedW193Rrh73avMq+eXx0gKihjIFyaHAw9CjD+1Ooi2BmQBAjbAE4FPgs+6WVj46xYNe3pCEgCxBiI2q/RGWRpc32BzyXqO+rVVs2BWC0WCTHsRyV3A94v8LtbfY8lza8VEG8iJ/JPgMAdXgnzdEHboMpx9+B1szfWKghUoJ7RKAiwLjISQxXrxf7fNe3ybD5Q273J80sBSYiEs+kN2LykMt7Ww3zgYn3/xUWjEZCESPTnSpSQrSs9Hgee0PdnW5lflKE5j4Xw2mNhTF/rlYLp2kZAEtJpsGBsf2Sa4S3yGbWDJERiTQ2lS+Eh2TYIsD5yAmtrPDhfrhXEO+yq0mlD5QWmRqYqzQZrAWkCogWYDW2BJEA8lwpRsnn0Vl2DVBBgIDKP17UK0cKZNNAKSKORaCMyySAdg2gFJotw5h4nlwdCvL5uiMhtfrn6RmMcuVdvSzoNUQUD3Kj2AzFOXpDxt8ANeok/sdiahvDmMeDBrBDEd2rbGONgjt7odqv2xryz9GE26T/fib9g/ked1Fw2xvwpOK2si/QvPBvqM7dG19YAAAAASUVORK5CYII="></img>
              <div className="mentoring-text" id='contact-inner-text'>
                &nbsp;
                דרך מנחם בגין 121, תל-אביב
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
  )
}

export default MiniLocation