import React, { useState } from 'react'
import './LoginRegister.css'
import Input from '../Input/Input';
import Button from '../Buttons/Button';

const LoginRegister = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    return (
        <div className='register_wrapper'>
            <h2 className='title'>
                Register on{' '}
                <span style={{ color: "var(--theme)" }}>
                    Financy
                </span>
            </h2>
            <form>
                <Input type={'text'} label={"Full Name"} state={name} setState={setName} placeholder={"John Doe"} />
                <Input type={'email'} label={"Email"} state={email} setState={setEmail} placeholder={"john@gmail.com"} />
                <Input type={'number'} label={"Phone Number"} state={phone} setState={setPhone} placeholder={"9865324578"} />
                <Input type={'password'} label={"Password"} state={password} setState={setPassword} placeholder={"********"} />
                <Input type={'password'} label={"Confirm Password"} state={confirmPassword} setState={setConfirmPassword} placeholder={"********"} />
                <Button text={'Sign-Up using E-mail and Password'} />
                <p style={{ textAlign: "center", margin: "0.5rem" }}>or</p>
                <Button blue={true} text={'Sign-Up using Google'} />
            </form>
            {/* <div className='btn_container'>
                <button className='btn register_btn'>Register</button>
                <hr />
                <button className='btn login_btn'>Login</button>
            </div> */}
        </div>
    );
}

export default LoginRegister
