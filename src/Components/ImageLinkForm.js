import React from 'react'
import "./ImageLinkForm.css"

function ImageLinkForm({onInputChange, onSubmit}) {
    return (
        <div>
            <p className='f3'>
                {'This Magic brain will detect faces in your pictures. Give it a try'}
            </p>
            <div className='center'>
                <div className="center form pa4 br3 shadow-5">
                    <input
                        type='text'
                        className='f4 pa2 w-70 center'
                        onChange={onInputChange}
                    /><br />
                    <button
                        className=
                        'w-30 grow f4 link ph-3 pv-2 dib white bg-light-purple'
                        onClick={onSubmit}
                    >
                        Detect
                    </button>
                </div>     
                
            </div>
        </div>
    )
}

export default ImageLinkForm
