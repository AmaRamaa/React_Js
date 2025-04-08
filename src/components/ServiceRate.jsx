import React, { useState } from "react";

function ServiceRate() {
    const [selectedRate, setSelectedRate] = useState(null);
    const rateScale = Array.from({ length: 10 }, (_, i) => i + 1);
    console.log(Math.min(...rateScale), Math.max(...rateScale));
    const rateScaleContainer = {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: '20px',
        marginBottom: '20px'
    };
    const rateItemStyle = {
        backgroundColor: '#f0f0f0',
        borderRadius: '5px',
        padding: '10px',
        textAlign: 'center',
        flexGrow: 1,
        margin: '0 5px',
        cursor: 'pointer',
        transition: 'background-color 0.3s ease',
        color: 'black',
    };
    const checkedStyle = {
        ...rateItemStyle,
        backgroundColor: 'grey', // Highlighted background for the selected item
        fontWeight: 'bold',
        color: 'white',
    };

    const handleRateClick = (rate) => {
        setSelectedRate(rate);
        console.log("Selected rate:", rate);
        localStorage.setItem("selectedRate", rate); // Store the selected rate in local storage
    };

    return (
        <>
            <div>
                <h1>How Would You Rate Your Service With Us</h1>
                <p>Rate the service from {Math.min(...rateScale)} to {Math.max(...rateScale)}</p>
                <div style={rateScaleContainer}>
                    {rateScale.map((rate, index) => {
                        return (
                            <div
                                key={index}
                                id={rate + "_" + index}
                                style={selectedRate === rate ? checkedStyle : rateItemStyle}
                                onClick={() => handleRateClick(rate)}
                            >
                                <h2>{rate}</h2>
                            </div>
                        );
                    })}
                </div>
            </div>
        </>
    );
}

export default ServiceRate;
