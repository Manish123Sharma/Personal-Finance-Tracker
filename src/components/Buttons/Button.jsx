import React from 'react'
import PropTypes from 'prop-types';
import './Button.css'

const Button = ({text, onClick, blue, disabled}) => {
    return (
        <button className={blue ? 'btn btn_blue': 'btn'} onClick={onClick} type="button" disabled={disabled}>
            {text}
        </button>
    );
}

Button.propTypes = {
    text: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
    blue: PropTypes.bool,
    disabled: PropTypes.bool
};

export default Button;
