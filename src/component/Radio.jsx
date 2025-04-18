import React from 'react';

const Radio = ({ type = "radio", id, name, value, onChange, checked }) => {
    return (
        <input
            type={type}
            id={id}
            name={name}
            value={value}
            onChange={onChange}
            checked={checked}
        />
    );
};

export default Radio;
