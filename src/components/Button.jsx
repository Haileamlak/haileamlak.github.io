
import React from 'react';
import '../styles/Button.css';

const Button = ({ text, onClick, imageSrc }) => {
    return (
        <button className="btn btn-brown" onClick={onClick}>
            {imageSrc && <img src={imageSrc} alt="Arrow Icon" width={10} />}
            {text}
        </button>
    );
};

export default Button;
