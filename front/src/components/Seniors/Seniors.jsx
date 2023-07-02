import { FixedContext } from '../../contexts/FixedContext'
import MentoringForm from './MentoringForm'
import OurSeniors from './OurSeniors'
import './Seniors.css'
import { useContext, useEffect } from 'react'

function Seniors() {

    const {fix, setFix} = useContext(FixedContext)

    useEffect (() => {
        setFix(false)
    },[])
    
    return (
        <div className='seniors-container'>
            <OurSeniors />
            <MentoringForm />
        </div>
    )
}

export default Seniors