import React from 'react';

const Title = ({ text }) => {
    return (
        <h1>{text || 'Placeholder Title'}</h1>
    );
};

export default Title;