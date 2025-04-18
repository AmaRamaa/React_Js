import React, { useState } from "react";

const RatingSelect = ({ onSelect, RatingScale = 5 }) => {
    const [selectedRating, setSelectedRating] = useState(5);

    // Ensure RatingScale is an array
    const ratingArray = Array.isArray(RatingScale) ? RatingScale : Array.from({ length: RatingScale }).map((_, i) => i + 1);

    const handleRatingChange = (e) => {
        const value = parseInt(e.target.value, 10);
        if (ratingArray.includes(value)) {
            setSelectedRating(value);
            if (onSelect) {
                onSelect(value); // Pass the selected rating to the parent
            }
        }
    };

    const styles = {
        ratingSelect: {
            listStyle: "none",
            padding: 0,
            display: "flex",
            gap: "10px",
            justifyContent: "center",
            alignItems: "center",
            color: "#333",
            margin: "20px 0",
        },
        listItem: {
            display: "inline-block",
        },
        radioInput: {
            display: "none",
        },
        label: {
            display: "inline-block",
            padding: "10px 15px",
            borderWidth: "2px", // Define border properties explicitly
            borderStyle: "solid",
            borderColor: "#ccc",
            borderRadius: "5px",
            cursor: "pointer",
            transition: "all 0.3s ease",
            backgroundColor: "#f9f9f9",
        },
        labelChecked: {
            backgroundColor: "#007bff",
            color: "white",
            borderColor: "#007bff", // Explicitly set borderColor
            fontWeight: "bold",
        },
        labelHover: {
            backgroundColor: "#e0e0e0",
            borderColor: "#aaa", // Explicitly set borderColor
        },
    };

    return (
        <div>
            <h3>Select a Rating</h3>
            <ul style={styles.ratingSelect}>
                {ratingArray.map((value) => (
                    <li key={value} style={styles.listItem}>
                        <input
                            type="radio"
                            id={`num${value}`}
                            name="rating"
                            value={value}
                            onChange={handleRatingChange}
                            checked={selectedRating === value}
                            style={styles.radioInput}
                        />
                        <label
                            htmlFor={`num${value}`}
                            style={{
                                ...styles.label,
                                ...(selectedRating === value ? styles.labelChecked : {}),
                            }}
                        >
                            {value}
                        </label>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default RatingSelect;