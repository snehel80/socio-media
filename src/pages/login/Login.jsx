import React from 'react'
import "./Login.scss";
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Context/authContext';
import { useContext } from 'react';

const Login = () => {

    const {login} = useContext(AuthContext);

    const handleLogin = ()=>{
        login();
    };

    return (
        <div className='login'>
            <div className='card'>
                <div className='left'>
                    <h1>Hello User.</h1>
                    <p>Welcome to the brand new and latest social media app. Which is fully functional and totally secure. Hope you like using it 😄.</p>
                    <span>Dont you have an Account?</span>
                    <Link to="/register">
                    <button>Register</button>
                    </Link>
                    <span>Created with ❤️ by Snehel Nandy ©️</span>
                </div>
                <div className='right'>
                    <h1>Login</h1>
                    <form>
                        <input type="text" placeholder="Username" />
                        <input type="password" placeholder="Password" />
                        <button onClick={handleLogin}>Login</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login