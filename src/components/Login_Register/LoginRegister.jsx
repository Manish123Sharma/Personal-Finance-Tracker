import React from 'react'
import './LoginRegister.css'

const LoginRegister = () => {
    return (
        <div className='register_wrapper'>
            <h2 className='title'>
                Register on{' '}
                <span style={{ color: "var(--theme)" }}>
                    Financy
                </span>
            </h2>
            <form action="#" method="post">
                <label htmlFor="name">Name: </label>
                <input id="name" type="text" placeholder='Enter your name' />
            </form>
        </div>
    );
}

export default LoginRegister
