import React from 'react';
import { useNavigate } from 'react-router-dom';
import Title from './Title';
import Image from './Image';
import Description3 from './Description3';

const InfoPage = ({ card }) => {
    const navigate = useNavigate();

    return (
        <div>
            <Title text={card.title} />
            <Image src={card.src} />
            <Description3 text={card.desc} />
            <button onClick={() => navigate(-1)} style={{ marginTop: '20px' }}>
                Back
            </button>
        </div>
    );
};

export default InfoPage;