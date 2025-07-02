import React, { useState } from 'react'
import './LoginRegister.css'
import Input from '../Input/Input';
import Button from '../Buttons/Button';
// import { createUserWithEmailAndPassword } from "firebase/auth";
// import { toast } from 'react-toastify';
// import { auth } from '../../firebase';
import emailSignupHandler from '../../utils/emailSignupHandler';
import googleSignupHandler from '../../utils/googleSignupHandler';
import emailLoginHandler from '../../utils/emailLoginHandler';
// import createDoc from '../../utils/createDoc';
import { useNavigate } from "react-router-dom";
// import { toast } from 'react-toastify';
// import { doc, getDoc, setDoc } from 'firebase/firestore';
// import { db } from '../../firebase';

const LoginRegister = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const [loginForm, setLoginForm] = useState(false);
    const navigate = useNavigate();


    const resetFields = () => {
        setName('');
        setEmail('');
        setPhone('');
        setPassword('');
        setConfirmPassword('');
    };

    const handleEmailSignup = (e) => {
        e.preventDefault();
        setLoading(true);
        emailSignupHandler({
            name,
            email,
            phone,
            password,
            confirmPassword,
            setLoading,
            resetFields,
            navigate
        });
        // createDoc(user)
    };

    const handleGoogleSignup = (e) => {
        e.preventDefault();
        setLoading(true);
        googleSignupHandler({ setLoading, navigate });
    }

    const handleEmailLogin = (e) => {
        e.preventDefault();
        setLoading(true);
        emailLoginHandler({
            email,
            password,
            setLoading,
            resetFields,
            navigate
        });
    };

    return (
        <>
            {loginForm
                ?
                <div className='lr_wrapper'>
                    <h2 className='title'>
                        Login in{' '}
                        <span style={{ color: "var(--theme)" }}>
                            Financy
                        </span>
                    </h2>
                    <form>
                        <Input type={'email'} label={"Email"} state={email} setState={setEmail} placeholder={"john@gmail.com"} />
                        <Input type={'password'} label={"Password"} state={password} setState={setPassword} placeholder={"********"} />
                        <Button disabled={loading} onClick={handleEmailLogin} text={loading ? 'Loading...' : 'Login using E-mail and Password'} />
                        <p style={{ textAlign: "center", margin: "0.5rem" }}>or</p>
                        <Button disabled={loading} onClick={handleGoogleSignup} blue={true} text={loading ? 'Loading...' : 'Login using Google'} />
                        <p style={{ textAlign: "center", margin: "1rem", fontSize: "0.9rem" }}>
                            Doesn't have an account? <button
                                type="button"
                                className='link'
                                onClick={() => {
                                    setLoginForm(false);
                                    console.log("Switch to Create Account");
                                }}
                                style={{ background: "none", border: "none", padding: 0, color: "var(--theme)", cursor: "pointer", textDecoration: "none" }}
                            >Create Here</button>
                        </p>
                    </form>
                </div>
                : <div className='lr_wrapper'>
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
                        <Button disabled={loading} onClick={handleEmailSignup} text={loading ? 'Loading...' : 'Sign-Up using E-mail and Password'} />
                        <p style={{ textAlign: "center", margin: "0.5rem" }}>or</p>
                        <Button disabled={loading} onClick={handleGoogleSignup} blue={true} text={loading ? 'Loading...' : 'Sign-Up using Google'} />
                        <p style={{ textAlign: "center", margin: "1rem", fontSize: "0.9rem" }}>
                            Already have an account? <button
                                type="button"
                                className='link'
                                onClick={() => {
                                    setLoginForm(true);
                                    console.log("Switch to Login");
                                }}
                                style={{ background: "none", border: "none", padding: 0, color: "var(--theme)", cursor: "pointer", textDecoration: "none" }}
                            >Login Here</button>
                        </p>
                    </form>

                </div>}

        </>
    );
};

export default LoginRegister;
