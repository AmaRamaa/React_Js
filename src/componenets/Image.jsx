import React, { useState } from 'react';

const InteractiveImage = ({ src }) => {

    return (
        <div style={styles.container}>
            <img src={src || 'https://static.vecteezy.com/system/resources/previews/016/916/479/original/placeholder-icon-design-free-vector.jpg'} alt="Dynamic" style={styles.image} />
        </div>
    );
};

const styles = {
    container: {
        textAlign: 'center',
        marginTop: '20px',
    },
    image: {
        maxWidth: '200px',
        height: 'auto',
        marginBottom: '10px',
    },
    input: {
        padding: '10px',
        width: '80%',
        borderRadius: '5px',
        border: '1px solid #ccc',
    },
};

export default InteractiveImage;