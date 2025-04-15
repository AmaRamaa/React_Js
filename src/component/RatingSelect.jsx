import React, { useState } from 'react';
import Radio from './Radio.jsx'

const RatingSelect = ({ onSelect, RatingScale = 5 ,}) => {
    const [selected, setSelected] = useState(5);

    const handleChange = (e) => {
        const value = parseInt(e.target.value, 10);
        console.log(`Selected rating: ${value}`)
        setSelected(value);
        if (onSelect) {
            onSelect(value);
        }
    }
    RatingScale = Array.isArray(RatingScale) ? RatingScale : Array.from({ length: RatingScale }).map((_, i) => i + 1);
    return (
        <div>
            <h3>Select a Rating</h3>
            <ul className="rating-select">
                {RatingScale.map((rating) => (
                    <li key={rating}>
                        <Radio 
                            rating={rating}
                            selected={selected}
                            handleChange={handleChange}
                        />
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default RatingSelect;