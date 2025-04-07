import React from 'react';

const Button = ({ buttonClicked, setButtonClicked }) => {
    const buttonStyle = {
        position: 'relative',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        bottom: '2.6rem',
        left: '85%',
        backgroundColor: buttonClicked ? 'red' : 'grey',
        color: 'white',
        border: 'none',
        padding: '0.5rem 1rem',
        borderRadius: '0.25rem',
        cursor: 'pointer',
    };

    return (
        <button style={buttonStyle} onClick={setButtonClicked}>
            <span style={{ color: buttonClicked ? 'white' : 'grey' }}>
                🤍
            </span>
        </button>
    );
};

export default Button;