import React from "react";

function ReviewTabel() {

    const ReviewContainerDiv = {
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "10px",
        borderRadius: "5px",
        width: "min-content",
        color : "black",
        margin: "30px", 
        gap: "10px",
    }
    const ReviewItemDiv = {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "10px",
        borderRadius: "5px",
        backgroundColor: "#f0f0f0",
        width: "min-content",
    }
    const ReviewInfoDiv = {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "10px",
        borderRadius: "5px",
        backgroundColor: "#f0f0f0",
        width: "min-content",
    }
    const ReviewTextDiv = {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "10px",
        borderRadius: "5px",
        backgroundColor: "#f0f0f0",
        width: "min-content",
    }
    const ReviewRatingDiv = {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "10px",
        borderRadius: "5px",
        backgroundColor: "#f0f0f0",
        width: "min-content",
    }
    const ReviewRatingText = {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "10px",
        borderRadius: "5px",
        backgroundColor: "#f0f0f0",
        width: "min-content",
    }
    
    const reviews = JSON.parse(localStorage.getItem("reviews")) || [];
    const reviewList = reviews.map((review, index) => (
        <div key={index} style={ReviewItemDiv}>
            <div style={ReviewRatingDiv}>
                <h2 style={ReviewRatingText}>{review.selectedRate}</h2>
            </div>
            <div style={ReviewInfoDiv}>
                <h1 style={ReviewTextDiv}>{review.review}</h1>
            </div>
        </div>
    ));

    return (
        <>

            {reviewList.length > 0 ? (
                <div style={ReviewContainerDiv}>
                    {reviewList}
                </div>
            ) : (
                <div style={ReviewContainerDiv}>
                    <h1 style={ReviewTextDiv}>No reviews available</h1>
                </div>
            )}

            {/* Example of a static review item */}
            {/* <div style={ReviewContainerDiv}>
                <div style={ReviewItemDiv}>
                    <div style={ReviewRatingDiv}>
                        <h2 style={ReviewRatingText}>3</h2>
                    </div>
                    <div style={ReviewInfoDiv}>
                        <h1 style={ReviewTextDiv}>Review will land here</h1>
                    </div>
                </div>
            </div> */}
        
        </>
    );

    
}

export default ReviewTabel;
