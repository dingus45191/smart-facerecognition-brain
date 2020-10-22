import React from 'react'

function Navigation({onRouteBack}) {
    return (
        <div className='navigation'>
            <nav style={{ display: "flex",justifyContent:"flex-end"}}>
                <p
                   className='f3 link dim black underline pa3 pointer'
                   role="button"
                   onClick={onRouteBack}

                >Sign Out</p>
            </nav>
        </div>
    )
}

export default Navigation
