import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './components/Login';
import Home from './components/Home';
import Register from './components/Register';
import { PublicOutlet, PrivateOutlet } from './components/Auth/PrivateRoute'


function App() {
    return (
        <BrowserRouter>
            <Routes>

                <Route path="/register" element={<Register />} />
                {/* Public Route */}
                <Route element={<PublicOutlet />}>
                    <Route path="/" element={<Login />} />
                </Route>

                {/* Private Route */}
                <Route path="/*" element={<PrivateOutlet />}>
                    <Route path="chat" element={<Home />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}
export default App



if (document.getElementById('app')) {
    const Index = ReactDOM.createRoot(document.getElementById("app"));
    Index.render(<App />);
}

