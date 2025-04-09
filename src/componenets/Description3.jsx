import React from 'react';

const Description = ({ text }) => {
    return (
        <p style={styles.paragraph}>
            {text || 'This is a default description.'}
        </p>
    );
};

const styles = {
    paragraph: {
        fontSize: '16px',
        lineHeight: '1.5',
        color: '#333',
        margin: '10px 0',
    },
};

export default Description;
