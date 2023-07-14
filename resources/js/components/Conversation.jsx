import React from 'react'

function Conversation() {
    return (
        <>
            <div className="chat-area-header">
                <div className="chat-area-title">Eerna Help Centre</div>
            </div>
            <div className="chat-area-main my-4">
                <div className="chat-msg">
                    <div className="chat-msg-profile">
                        <div className="chat-msg-date">Message seen 1.22pm</div>
                    </div>
                    <div className="chat-msg-content">
                        <div className="chat-msg-text">Neque gravida in fermentum et sollicitudin ac orci phasellus egestas. Pretium lectus quam id leo.</div>
                    </div>
                </div>
                <div className="chat-msg owner">
                    <div className="chat-msg-profile">
                        <div className="chat-msg-date">Message seen 1.22pm</div>
                    </div>
                    <div className="chat-msg-content">
                        <div className="chat-msg-text">Sit amet risus nullam eget felis eget. Dolor sed viverra ipsum😂😂😂</div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Conversation