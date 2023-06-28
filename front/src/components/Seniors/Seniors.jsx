import MentoringForm from './MentoringForm'
import OurSeniors from './OurSeniors'
import './Seniors.css'

function Seniors() {
    return (
        <div className='seniors-container'>
            <OurSeniors />
            <MentoringForm />
        </div>
    )
}

export default Seniors