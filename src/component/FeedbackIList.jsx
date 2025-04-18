import React from 'react';
import FeedbackItem from './FeedbackItem.jsx';

const FeedbackList = ({ feedbacks }) => {
    if (!feedbacks || feedbacks.length === 0) {
        return <p>No feedback available</p>;
    }

    return (
        <div className="feedback-list">
            {Array.isArray(feedbacks) && feedbacks.map((feedback) => (
                <FeedbackItem key={feedback.id || Math.random()} feedback={feedback} 
                onDelete={() => console.log(`Delete feedback with id: ${feedback.id}`)}
                onEdit={() => console.log(`Edit feedback with id: ${feedback.id}`)}
                />
            ))}
        </div>
    );
};

export default FeedbackList;