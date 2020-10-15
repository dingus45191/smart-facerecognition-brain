/* eslint-disable jsx-a11y/accessible-emoji */
import React from 'react'
import Tilt from 'react-tilt'
import "../Logo.css"
import brain from '../brain.png'

function Logo() {
    return (
        <div className='logo ma4 mt0'>
            
 
               <Tilt className="Tilt br2 shadow-2" options={{ max : 55 }} style={{ height: 250, width: 250 }} >
                 <span className="Tilt-inner" role='img'> <img src={brain} alt='logo'></img> </span>
               </Tilt>
        </div>
    )
}

export default Logo
        