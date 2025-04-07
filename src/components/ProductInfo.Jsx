import React from 'react';

const Info = () => {
    const productImageClass = {
        width: "100%",
        height: "12rem",
        objectFit: "cover",
        borderTopLeftRadius: "0.5rem",
        borderTopRightRadius: "0.5rem",
    };
    return (
        <>
            <img
                src="https://iqq6kf0xmf.gjirafa.net/images/7396dbda-82f7-4ceb-a189-4b07a74cb7a8/7396dbda-82f7-4ceb-a189-4b07a74cb7a8.webp?w=400"
                alt="Monitor AOC 25G3ZM/BK"
                style={productImageClass}
            />

        </>
    );
};

export default Info;