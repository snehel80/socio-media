import "./Register.scss";
import React from 'react'
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div className='register'>
            <div className='card'>
                <div className='left'>
                    <h1>Socio Media.</h1>
                    <p>Welcome to the brand new and latest social media app. Which is fully functional and totally secure. Hope you like using it 😄.</p>
                    <span>Do you have an Account?</span>
                    <Link to="/login">
                    <button>Login</button>
                    </Link>
                    <span>Created with ❤️ by Snehel Nandy ©️</span>
                </div>
                <div className='right'>
                    <h1>Register</h1>
                    <form>
                        <input type="text" placeholder="Username" />
                        <input type="text" placeholder="Full Name" />
                        <input type="email" placeholder="Email" />
                        <input type="password" placeholder="password" />
                        <button>Register</button>
                    </form>
                </div>
            </div>
        </div>
  )
}

export default Register