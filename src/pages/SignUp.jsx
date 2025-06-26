import React from 'react'
import Header from '../components/Header/Header'
import '../App.css'
import LoginRegister from '../components/Login_Register/LoginRegister'

const SignUp = () => {
    return (
        <div>
            <Header />
            <div className="wrapper">
                <LoginRegister />
            </div>
        </div>
    )
}

export default SignUp
