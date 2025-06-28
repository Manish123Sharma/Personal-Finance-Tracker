import React from 'react'
import './Input.css'

const Input = ({ label, state, setState, placeholder, type }) => {
    return (
        // <div className='input_wrapper'>
        //     <input type="text" className='input_field' placeholder='Enter text...' />
        // </div>
        <div className='input_wrapper'>
            <p className='input_label'>
                {label}
            </p>
            <input
                placeholder={placeholder} value={state} onChange={(e) => setState(e.target.value)} className='input_field' type={type} />
        </div>
    );
}

export default Input
