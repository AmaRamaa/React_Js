import React from "react";

function InputReview() {
    const inputContainerDiv = {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "10px",
        borderRadius: "5px",
        backgroundColor: "#f0f0f0",
        width: "min-content",
    }
    const inputStyle = {
        width: "300px",
        padding: "10px",
        borderRadius: "5px",
        border: "1px solid #ccc",
        marginRight: "10px",
    }
    const buttonStyle = {
        backgroundColor: "#4CAF50",
        color: "white",
        padding: "10px 20px",
        border: "none",
        borderRadius: "5px",
        cursor: "pointer",
    }

    const handleSubmit = () => {
        const inputValue = document.getElementById("reviewInput").value;
        const reviewData = {
            review: inputValue,
            selectedRate: localStorage.getItem("selectedRate"),
        };
        const existingReviews = JSON.parse(localStorage.getItem("reviews")) || [];
        existingReviews.push(reviewData);
        localStorage.setItem("reviews", JSON.stringify(existingReviews));
        alert("Review saved!");
        window.location.reload(); // Refresh the page
        inputValue = ""; // Clear the input field
    };

    const savedReview = localStorage.getItem("review") || "";

    return (
        <>
            <div style={inputContainerDiv}>
                <input
                    id="reviewInput"
                    type="text"
                    placeholder="Write a Review"
                    style={inputStyle}
                    defaultValue={savedReview}
                />
                <button style={buttonStyle} onClick={handleSubmit}>
                    Send
                </button>
            </div>
        </>
    );
}

export default InputReview;
