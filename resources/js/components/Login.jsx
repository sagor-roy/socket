import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import AuthUser from './Auth/Auth';

function Login() {
    const navigate = useNavigate();
    const { http, saveUser } = AuthUser();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const loginHandler = (e) => {
        e.preventDefault();
        http.post('/login', { email, password })
            .then(result => {
                saveUser(result.data)
                navigate('/chat')
            })
            .catch(error => {
                alert('something is wrong!!');
            })
    }


    return (
        <div className="container">
            <div className="row justify-content-center align-items-center" style={{ height: '100vh' }}>
                <div className="col-md-4">
                    <div className="card">
                        <h3 className="card-header text-center">Login</h3>

                        <div className="card-body p-4">
                            <form onSubmit={loginHandler}>
                                <div className="form-group">
                                    <label>Email</label>
                                    <input type="email" className='form-control' placeholder='Email...' value={email} onChange={(e) => setEmail(e.target.value)} />
                                </div>
                                <div className="my-3">
                                    <label>Password</label>
                                    <input type="password" className='form-control' placeholder='Password...' value={password} onChange={(e) => setPassword(e.target.value)} />
                                </div>
                                <button type="submit" className='btn btn-primary'>Login</button>
                                <br /><br />
                                <Link to="/register">Register</Link>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Login;