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
import { useNavigate } from 'react-router';
import { io } from 'socket.io-client';



function Home() {
    const { http, logout, user } = AuthUser();
    const navigate = useNavigate();
    const [activeUserList, setActiveUserList] = useState([]);
    const [selectedUserInfo, setSelectedUserInfo] = useState(null);
    const [messages, setMessages] = useState([]);

    const socket = io.connect('http://socket.test:3001');

    useEffect(() => {
        http.get('/user')
            .then(result => {
                setActiveUserList(result.data)
            })
            .catch(error => {
                alert('something is wrong!!');
            })
    }, [])

    useEffect(() => {
        http.get(`selected-user-message/${selectedUserInfo?.id}`)
            .then(result => {
                setMessages(result.data);
            })
            .catch(error => {
                alert('something is wrong!!');
            })
    }, [selectedUserInfo])

    const storeMessageHandler = (sendMessage) => {
        socket.emit('userMessage', sendMessage);
        setMessages((prev) => [...prev, sendMessage]);
    };

    useEffect(() => {
        const socket = io.connect('http://socket.test:3001');
        console.log(socket);
    }, [])


    const logoutHandler = () => {
        http.get('/logout')
            .then(result => {
                logout();
                navigate('/')
            })
            .catch(error => {
                alert('something is wrong!!');
            })
    }

    const selectUserHandler = (userInfo) => {
        setSelectedUserInfo(userInfo)
    }

    console.log("HI");

    return (
        <div className="app">
            <div className="wrapper">
                <div className="conversation-area">
                    <div className="info-area">
                        <AuthWithLogo />
                        <SearchUser />
                    </div>
                    <ActiveUser user={activeUserList} selectUser={selectUserHandler} />
                    <div className="overlay"></div>
                </div>

                <div className="chat-area">
                    <div className="chat-area-header">
                        <div className="chat-area-title">{selectedUserInfo?.name}</div>
                        <button className='btn btn-danger' onClick={logoutHandler}>Logout</button>
                    </div>
                    {selectedUserInfo ? (
                        <>
                            <Conversation messages={messages} />
                            <Form receiverId={selectedUserInfo?.id} storeMessage={storeMessageHandler} />
                        </>
                    ) : (
                        <div className='d-flex justify-content-center align-items-center' style={{ height: '100vh' }}>
                            <h3 className='text-muted'>No Conversation</h3>
                        </div>
                    )}

                </div>

            </div>
        </div>
    )
}

export default Home;