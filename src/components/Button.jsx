import React from 'react';


const Button = () => {
    const wishlistButtonClass = {
        backgroundColor: "transparent",
        border: "none",
        color: "#e53e3e",
        fontSize: "1.25rem",
        cursor: "pointer",
        marginTop: "1rem",
        transition: "color 0.2s",
        ":hover": {
            color: "#c53030",
        },
    };
    return (
        <>   
            <button style={wishlistButtonClass}>♡</button>
        </>
    );
};

export default Button;