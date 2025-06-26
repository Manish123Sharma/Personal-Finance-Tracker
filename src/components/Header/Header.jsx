import React from 'react'
import './Header.css'
import logo from '../../assets/logo.svg'

const Header = () => {
    const handlelogout = () => {
        console.log(`Logging out...`);
        alert('Logout successful');
    }
    return (
        <div className='navbar'>
            <div className='logo'>
                <img src={logo} alt="Logo" />
                <div className='logo-text'>
                    <h1>Financy</h1>
                    <span>Personal Finance Tracker</span>
                </div>
            </div>
            <button
                type="button"
                className="logout-button"
                onClick={() => handlelogout()}
            >
                ⏻ Logout
            </button>
            {/* <p>This is header</p> */}
        </div>
    )
}

export default Header
