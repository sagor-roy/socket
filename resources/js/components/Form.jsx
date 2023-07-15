import React, { useState } from 'react'
import AuthUser from './Auth/Auth';

function Form({receiverId, storeMessage}) {
    const { http } = AuthUser();
    const [message, setMessage] = useState("");

    const messageHandler = (e) => {
        e.preventDefault();
        http.post('message-store', { from: receiverId, message })
            .then(result => {
                storeMessage(result.data);
                setMessage("");
            })
            .catch(error => {
                alert('something is wrong!!');
            })
    }
    return (
        <form className="chat-area-footer" onSubmit={messageHandler}>
            <input type="text" required placeholder="Type something here..." value={message} onChange={(e) => setMessage(e.target.value)} />

            <button type='submit' className='btn'><img className="img-fluid" src="https://www.pngitem.com/pimgs/m/244-2444331_close-button-camera-button-send-button-png-download.png" width="50" alt="" /></button>
        </form>
    )
}

export default Form