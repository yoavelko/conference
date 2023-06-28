import './mini-location.css'
function MiniLocation() {
  return (
    <div className='mini-location-container' >
        <div className="title-mini-location">
            איך מגיעים? 
        </div>
        <div className="mini-location-links">
            <div className="adress-mini-location">כתובת: דרך מנחם בגין 121, תל אביב-יפו</div>
            <div className="links-to-address">
               <a className='link-adress-a' href="https://www.waze.com/he/live-map/directions?to=ll.32.071474%2C34.789345">
                <span style={{marginLeft:"2vw"}}><img width="30" height="30" src="https://img.icons8.com/color/48/waze.png" alt="waze"/></span>
                <span> waze </span>
               </a>
               <a className='link-adress-a'  href="https://www.google.com/maps/dir//%D7%93%D7%A8%D7%9A+%D7%9E%D7%A0%D7%97%D7%9D+%D7%91%D7%92%D7%99%D7%9F+121,+%D7%AA%D7%9C+%D7%90%D7%91%D7%99%D7%91-%D7%99%D7%A4%D7%95%E2%80%AD/@32.0718027,34.7912122,17z/data=!4m18!1m8!3m7!1s0x151d4b9c46209285:0x4aa8c0e33c2116d8!2z15PXqNeaINee16DXl9edINeR15LXmdefIDEyMSwg16rXnCDXkNeR15nXkS3Xmdek15U!3b1!8m2!3d32.0718027!4d34.7890235!16s%2Fg%2F11gbx9_6th!4m8!1m0!1m5!1m1!1s0x151d4b9c46209285:0x4aa8c0e33c2116d8!2m2!1d34.7890235!2d32.0718027!3e3?entry=ttu">
                <span  style={{marginLeft:"2vw"}}><img width="30" height="30" src="https://img.icons8.com/color/48/google-maps-new.png" alt="google-maps-new"/></span>
                <span> google </span>
               </a>
            </div>
        </div>
    </div>
  )
}

export default MiniLocation