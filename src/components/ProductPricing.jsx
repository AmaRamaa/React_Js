import React from 'react';

const priceing = () => {
    const productPricingClass = {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: "1rem",
        marginTop: "0.5rem",
    };
    const currentPriceClass = {
        color: "#38a169",
        fontWeight: "700",
        fontSize: "1.125rem",
    };
    const originalPriceClass = {
        color: "#a0aec0",
        textDecoration: "line-through",
        fontSize: "0.875rem",
    };
    const discountClass = {
        color: "#e53e3e",
        fontSize: "0.875rem",
        fontWeight: "500",
    };
    return (
        <>
            <div style={productPricingClass}>
                <span style={currentPriceClass}>179.50 €</span>
                <span style={originalPriceClass}>309.50 €</span>
                <span style={discountClass}>-42%</span>
            </div>

        </>
    );
};

export default priceing;

