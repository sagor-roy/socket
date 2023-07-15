import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function AuthUser() {
    const navigate = useNavigate();

    const getToken = () => {
        const tokenString = sessionStorage.getItem('user');
        const userToken = JSON.parse(tokenString);
        return userToken?.token;
    }

    const getUser = () => {
        const userString = sessionStorage.getItem('user');
        const user = JSON.parse(userString);
        return user;
    }

    const [user, setUser] = useState(getUser());

    const saveUser = (user) => {
        sessionStorage.setItem('user', JSON.stringify(user));
        setUser(user);
        navigate('/chat');
    }

    const logout = () => {
        sessionStorage.clear();
    }

    const http = axios.create({
        baseURL: "http://socket.test/api/",
        headers: {
            "Content-type": "application/json",
            "Authorization": `Bearer ${getToken()}`
        }
    });

    return {
        saveUser,
        user,
        http,
        logout
    }
}