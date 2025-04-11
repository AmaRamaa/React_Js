import React, { useState } from 'react';

const Filter = ({ items, onFilter }) => {
    const [query, setQuery] = useState('');

    const handleInputChange = (e) => {
        const value = e.target.value;
        setQuery(value);
        const filteredItems = items.filter((item) =>
            item.toLowerCase().includes(value.toLowerCase())
        );
        onFilter(filteredItems);
    };

    const filterStyle = {
        input: {
            padding: '10px',
            fontSize: '16px',
            borderRadius: '4px',
            border: '1px solid #ccc',
            width: '100%',
            boxSizing: 'border-box',
        },
    };

    return (
        <div>
            <input
                className="filter-input"
                style={filterStyle.input}
                type="text"
                placeholder="Filter items..."
                value={query}
                onChange={handleInputChange}
            />
        </div>
    );
};

export default Filter;