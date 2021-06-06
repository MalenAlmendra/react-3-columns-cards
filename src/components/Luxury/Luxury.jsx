import React from 'react'
import './luxury.css'
import iconLuxury from '../../assets/images/icon-luxury.svg'
const Luxury = () => {
    return (
        <div className='luxuryContainer'>
            <div className="iconContainer"><img src={iconLuxury} alt="Icon Luxury" /></div>
            <div className='titleContainer'><h1>LUXURY</h1></div>
            <div className="textContainer"><p>Cruise in the best car brands without the bloated prices. Enjoy the enhanced confort of a luxury rental and arrive in style. </p></div>
            <div className="btnLuxury"><button>Learn More</button></div>
        </div>
    )
}

export default Luxury
