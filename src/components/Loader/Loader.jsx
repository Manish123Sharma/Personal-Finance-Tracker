import React from 'react'
import './Loader.css'

const Loader = () => {
    return (
        <div className="wrapper">
            <div className="lds-ripple">
                <div></div>
                <div></div>
            </div>
        </div>
    );
}

export default Loader
