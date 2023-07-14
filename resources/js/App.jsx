import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './components/Login';
import Home from './components/Home';
import { io } from 'socket.io-client';

const socket = io.connect('http://socket.test:3001');

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/chat" element={<Home />} />
            </Routes>
        </BrowserRouter>
    )
}
export default App



if (document.getElementById('app')) {
    const Index = ReactDOM.createRoot(document.getElementById("app"));
    Index.render(
        <React.StrictMode>
            <App />
        </React.StrictMode>
    )
}
