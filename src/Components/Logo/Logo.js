/* eslint-disable jsx-a11y/accessible-emoji */
import React from 'react'
import Tilt from 'react-tilt'
import "./Logo.css"
import brain from './brain.png'

function Logo() {
    return (
        <div className='logo ma4 mt0'>
            
 
               <Tilt className="Tilt br2 shadow-2" options={{ max : 55 }} style={{ height: 150, width: 200 }} >
                 <span className="Tilt-inner pa3" role='img'> <img src={brain} alt='logo' style={{paddingTop:'5px',textAlign:'center'}}></img> </span>
               </Tilt>
        </div>
    )

}

export default Logo
        