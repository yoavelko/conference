import './Homepage.css'
import InvationSummary from './InvationSummary'
import Schedule from './Schedule'
import Logos from './logos'

function Homepage() {
    return (
        <div className='homepage-container'>
            <Logos />
            <InvationSummary />
            <Schedule />
        </div>
    )
}

export default Homepage