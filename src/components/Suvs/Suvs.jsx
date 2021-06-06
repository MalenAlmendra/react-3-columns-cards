import React from 'react'
import './suvs.css'
import iconSuvs from '../../assets/images/icon-suvs.svg'
const Suvs = () => {
    return (
        <div className='suvsContainer'>
            <div className="iconContainer"><img src={iconSuvs} alt="icon suvs" /></div>
            <div className='titleContainer'><h1>SUVS</h1></div>
            <div className="textContainer"><p>Take an SUV for its spacious interior, power and versatility. Perfect for your next family vacation and off-road adventures.</p></div>
            <div className="btnSuvs"><button>Learn More</button></div>
        </div>
    )
}

export default Suvs
