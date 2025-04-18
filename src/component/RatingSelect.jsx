import React, { useState } from 'react';
import Radio from './Radio.jsx';
import './RatingSelect.css';

const RatingSelect = ({ onSelect, RatingScale = 5 }) => {
    const [selectedRating, setSelectedRating] = useState(5);

    RatingScale = Array.isArray(RatingScale) ? RatingScale : Array.from({ length: RatingScale }).map((_, i) => i + 1);

    const handleRatingChange = (e) => {
        const value = parseInt(e.target.value, 10);
        if (RatingScale.includes(value)) {
            console.log(`Selected rating: ${value}`);
            setSelectedRating(value);
            if (onSelect) {
                onSelect(value);
            }
        }
    };

    return (
        <div>
            <h3>Select a Rating</h3>
            <ul className="rating-select">
                {RatingScale.map((value) => (
                    <li key={value}>
                        <Radio
                            type="radio"
                            id={`num${value}`}
                            name="rating"
                            value={value}
                            onChange={handleRatingChange}
                            checked={selectedRating === value}
                        />
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default RatingSelect;
