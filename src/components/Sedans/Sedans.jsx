import React from 'react'
import './sedans.css'
import sedanIcon from '../../assets/images/icon-sedans.svg'
const Sedans = () => {
    return (
        <div className='sedansContainer'>
            <div className="iconContainer"><img src={sedanIcon} alt='icon sedan'/></div>
            <div className='titleContainer'><h1>SEDANS</h1></div>
            <div className="textContainer"><p>Choose a sedan for its affordability and excellent fuel economy. Ideal for cruising in the city or on your next road trip.</p></div>
            <div className="btnSedan"><button>Learn More</button></div>  
        </div>
    )
}

export default Sedans
