import React, { useEffect } from 'react'
import './Header.css'
import logo from '../../assets/logo.svg'
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../../firebase';
import { useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { toast } from 'react-toastify';
import userSvg from '../../assets/user.svg'

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
            {user && <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '0.5rem' }}>
                <span className='navbar-link' style={{ marginRight: "1rem" }}>
                    <img alt=''
                        src={user.photoURL ? user.photoURL : userSvg}
                        width={user.photoURL ? "35" : "24"}
                        style={{ borderRadius: "50%" }}
                    />
                </span>
                <button
                    style={{
                        fontSize: '25px',
                    }}
                    type="button"
                    className="logout-button"
                    onClick={() => handlelogout()}
                >
                    ⏻ Logout
                </button>
            </div>
            }

            {/* <p>This is header</p> */}
        </div>
    )
};

export default Header;
