import React from 'react'
import '../asset/style.css';
import '../asset/chat.css';
import '../asset/responsive.css';
import Conversation from './Conversation';
import ActiveUser from './ActiveUser';
import Form from './Form';
import SearchUser from './SearchUser';
import AuthWithLogo from './AuthWithLogo';

function Home() {
    return (
        <div className="app">
            <div className="wrapper">
                <div className="conversation-area">
                    <div className="info-area">
                        <AuthWithLogo />
                        <SearchUser />
                    </div>
                    <ActiveUser />
                    <div className="overlay"></div>
                </div>

                <div className="chat-area">
                    <Conversation />
                    <Form />
                </div>

            </div>
        </div>
    )
}

export default Home;