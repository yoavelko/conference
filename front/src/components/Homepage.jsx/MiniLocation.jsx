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
            <div id="google-hp-mentor-container">
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
  )
}

export default MiniLocation