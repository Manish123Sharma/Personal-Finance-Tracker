import React, { useEffect } from 'react'
import './Header.css'
import logo from '../../assets/logo.svg'
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../../firebase';
import { useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { toast } from 'react-toastify';

const Header = () => {
    const navigate = useNavigate();
    const handlelogout = () => {

        try {
            signOut(auth).then(() => {
                toast.success("Logged out successfully");
                navigate('/');
                // Sign-out successful.
            }).catch((error) => {
                console.error("Logout error", error);
                toast.error(error.message);
                // An error happened.
            });
        } catch (error) {
            console.log("Error in logout", error);
            toast.error(error.message);

        }

    }
    const [user, loading] = useAuthState(auth);
    useEffect(() => {
        if (user) {
            navigate('/dashboard');
        }
    }, [user, loading, navigate]);
    return (
        <div className='navbar'>
            <div className='logo'>
                <img src={logo} alt="Logo" />
                <div className='logo-text'>
                    <h1>Financy</h1>
                    <span>Personal Finance Tracker</span>
                </div>
            </div>
            {user && <button
                type="button"
                className="logout-button"
                onClick={() => handlelogout()}
            >
                ⏻ Logout
            </button>}

            {/* <p>This is header</p> */}
        </div>
    )
};

export default Header;
