
import React from 'react';
import '../styles/Button.css';

const Button = ({ text, onClick, imageSrc, isIconAfter = false }) => {
    return (
        <button className="btn btn-primary" onClick={onClick}>
            {!isIconAfter && imageSrc && <img src={imageSrc} alt="" width={10} />}
            {text}
            {isIconAfter && imageSrc && <img src={imageSrc} alt="" width={10} />}
        </button>
    );
};

export default Button;
