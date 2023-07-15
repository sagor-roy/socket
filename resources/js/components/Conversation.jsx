import React, { useEffect, useState } from 'react'
import AuthUser from './Auth/Auth';

function Conversation({ messages }) {
    const { user } = AuthUser();

    return (
        <div className="chat-area-main my-4" style={{ overflow: "auto" }}>
            {messages.map((item, index) => (
                <div className={`chat-msg ${user?.id === item.to ? 'owner' : ''}`} key={index}>
                    <div className="chat-msg-profile">
                        <div className="chat-msg-date">Message seen 1.22pm</div>
                    </div>
                    <div className="chat-msg-content">
                        <div className="chat-msg-text">{item.message}</div>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Conversation