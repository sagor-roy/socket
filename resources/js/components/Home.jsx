import React, { useEffect, useState } from 'react'
import '../asset/style.css';
import '../asset/chat.css';
import '../asset/responsive.css';
import Conversation from './Conversation';
import ActiveUser from './ActiveUser';
import Form from './Form';
import SearchUser from './SearchUser';
import AuthWithLogo from './AuthWithLogo';
import AuthUser from './Auth/Auth';

function Home() {
    const { http } = AuthUser();
    const [activeUserList, setActiveUserList] = useState([]);

    useEffect(() => {
        http.get('/user')
            .then(result => {
                setActiveUserList(result.data)
            })
            .catch(error => {
                alert('something is wrong!!');
            })
    }, [])

    return (
        <div className="app">
            <div className="wrapper">
                <div className="conversation-area">
                    <div className="info-area">
                        <AuthWithLogo />
                        <SearchUser />
                    </div>
                    <ActiveUser user={activeUserList} />
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