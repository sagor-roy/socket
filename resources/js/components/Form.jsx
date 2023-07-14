import React from 'react'

function Form() {
    return (
        <form className="chat-area-footer">
            <input type="text" placeholder="Type something here..." />

            <button type='submit' className='btn'><img className="img-fluid" src="https://www.pngitem.com/pimgs/m/244-2444331_close-button-camera-button-send-button-png-download.png" width="50" alt="" /></button>
        </form>
    )
}

export default Form