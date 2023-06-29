import './speakers.css'
import SpeakersData from './speakers.json'
function Speakers() {
    const speaker = SpeakersData.speakers
    return (
        <div className='speakers-container'>
            <br />
            <br />
            <div className="speakers-title"> הדוברים באירוע: </div>
            <br />
            <br />
            <div className="all-speakers">
                {
                    speaker?.map((speaker,index) =>{
                        return(
                            <div key={index} className="speaker-box">
                            <div className="speaker-image">
                                <img className='speaker-img' src={speaker.image} alt="" />
                            </div>
                            <div className="speaker-details">
                                <div className="speaker-name">{speaker.fullName}</div>
                                <div className="speaker-background">{speaker.description}</div>
                            </div>
                        </div>
                        )
                    })

                }
            </div>

        </div>
    )
}

export default Speakers