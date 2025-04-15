import React from 'react';

const Radio = ({ rating, selected, handleChange }) => {
    return (
        <div>
            <input
                type="radio"
                id={`rating-${rating}`}
                name="rating"
                value={rating}
                checked={selected === rating}
                onChange={handleChange}
            />
            <label htmlFor={`rating-${rating}`}>{rating}</label>
        </div>
    );
};

export default Radio;