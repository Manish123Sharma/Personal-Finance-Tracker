import React from 'react'
import './Button.css'

const Button = ({text, onCLick, blue}) => {
    return (
        <button className={blue ? 'btn btn_blue': 'btn'} onClick={onCLick} type="button">
            {text}
        </button>
    );
}

export default Button;
