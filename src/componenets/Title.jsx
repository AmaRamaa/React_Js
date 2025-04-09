import React from 'react';

const Title = ({ text }) => {
    return (
        <h1 style={styles.title}>
            {text || 'Default Title'}
        </h1>
    );
};

const styles = {
    title: {
        fontSize: 'clamp(1.5rem, 5vw, 3rem)', // Responsive font size
        textAlign: 'center',
        color: '#333',
        margin: '20px 0',
    },
};

export default Title;
