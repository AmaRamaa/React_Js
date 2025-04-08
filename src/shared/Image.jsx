import React from 'react';

const Image = ({ src, placeh }) => {
    return (
        <img style={{ width: '100px', height: '100px', objectFit: 'cover', borderRadius: '50%' }} src={src || 'https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png'} alt={placeh} />
    );
};

export default Image;