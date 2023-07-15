import React from 'react';
import AuthUser from './Auth/Auth';

function AuthWithLogo() {
    const {user} = AuthUser();
    return (
        <>
            <div className="chat-logo px-5">
                <img className="img-fluid" src="https://images.squarespace-cdn.com/content/v1/5f0770791aaf57311515b23d/1594323097093-T0ZKL126WLLITS38XH7L/logo.png" width="100%" alt="" />
            </div>
            <div className="msg online p-0 mt-3">
                <img className="msg-profile" src="https://uxwing.com/wp-content/themes/uxwing/download/peoples-avatars/corporate-user-icon.png" alt="" />
                <div className="msg-detail">
                    <div className="msg-username">{user.name} </div>
                    <span className="active-online">Online</span>
                </div>
            </div>
        </>
    )
}

export default AuthWithLogo