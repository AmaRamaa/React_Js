// filepath: c:\Users\HP\Desktop\amari working time\React_Js\src\componenets\Card.jsx
import React from 'react';
import Image from './Image';
import Title from './Title';
import DeleteButton from './DeleteButton';
import Description from './Description3';

const Card = ({ title, desc, src, onClickFunction, dataKey }) => {

    const handleDelete = () => {
        console.log("Card deleted");
        // Logic to delete the card
        const cardElement = document.querySelector(`[data-key="${dataKey}"]`);
        if (cardElement) {
            cardElement.parentElement.removeChild(cardElement);
        }
    };

    

    const cardStyle = {
        border: '1px solid #ccc',
        borderRadius: '8px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        padding: '16px',
        margin: '16px',
        maxWidth: '300px',
        backgroundColor: '#fff',
    };

    const cardContentStyle = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center',
    };

    return (
        <div style={{ position: 'relative' }} data-key={dataKey}>
            <div className="card" style={cardStyle} onClick={onClickFunction}>
                <Image src={src} />
                <div className="card-content" style={cardContentStyle}>
                    <Title text={title} />
                    <Description text={desc} />
                </div>
            </div>
            <DeleteButton onDelete={handleDelete} style={{ position: 'absolute', top: '8px', right: '8px' }} />
        </div>
    );
};

export default Card;