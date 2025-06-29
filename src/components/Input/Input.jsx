import React from 'react'
import PropTypes from 'prop-types';
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

Input.propTypes = {
    label: PropTypes.string.isRequired,
    state: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    setState: PropTypes.func.isRequired,
    placeholder: PropTypes.string,
    type: PropTypes.string
};

export default Input
