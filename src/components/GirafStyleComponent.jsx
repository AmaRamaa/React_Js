import React from 'react';
import Button from './Button.jsx';
import ProductImageClass from './ProductImage.jsx'
import TitleProduct from './ProductTitle.jsx'
import PricingProduct from './ProductPricing.jsx';

const GirafStyleComponent = () => {
    // CSS styles for the component
    const productCardClass = {
        backgroundColor: "white",
        boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
        borderRadius: "0.5rem",
        padding: "1rem",
        maxWidth: "20rem",
        margin: "0 auto",
    };
    const productDetailsClass = {
        marginTop: "1rem",
        textAlign: "center",
    };
    return (
        <>
            <div style={productCardClass}>
                <ProductImageClass />
                <div style={productDetailsClass}>
                    <TitleProduct />
                    <PricingProduct />
                </div>
                <Button />
            </div>
        </>
    );
};

export default GirafStyleComponent;