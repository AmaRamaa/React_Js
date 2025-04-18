import React from 'react';
import PropTypes from 'prop-types';
import FeedbackItem from './FeedbackItem.jsx';

const FeedbackList = ({ feedbacks, setFeedbacks }) => {
    const handleDelete = async (id) => {
        if (!id) {
            console.error('Invalid feedback id');
            return;
        }

        try {
            const response = await fetch(`http://localhost:5000/FeedbackData/${id}`, {
                method: 'DELETE',
            });

            if (response.ok) {
                setFeedbacks((prevFeedbacks) => prevFeedbacks.filter((feedback) => feedback.id !== id));
                console.log(`Feedback with id: ${id} deleted successfully`);
            } else {
                const errorMessage = await response.text();
                console.error(`Failed to delete feedback with id: ${id}. Server response: ${errorMessage}`);
            }
        } catch (error) {
            console.error(`Error deleting feedback with id: ${id}`, error);
        }
    };

    const handleEdit = async (id) => {
        if (!id) {
            console.error('Invalid feedback id');
            return;
        }

        try {
            const response = await fetch(`http://localhost:5000/FeedbackData/${id}`, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ isEditing: true }),
            });

            if (response.ok) {
                const updatedFeedback = await response.json();
                setFeedbacks((prevFeedbacks) =>
                    prevFeedbacks.map((feedback) =>
                        feedback.id === id ? updatedFeedback : feedback
                    )
                );
                console.log(`Feedback with id: ${id} updated successfully`);
            } else {
                const errorMessage = await response.text();
                console.error(`Failed to update feedback with id: ${id}. Server response: ${errorMessage}`);
            }
        } catch (error) {
            console.error(`Error updating feedback with id: ${id}`, error);
        }
    };

    if (!feedbacks || feedbacks.length === 0) {
        return <p>No feedback available</p>;
    }

    return (
        <div className="feedback-list">
            {feedbacks.map((feedback) => (
                <FeedbackItem
                    key={feedback.id} // Ensure all feedback items have a unique id
                    feedback={feedback}
                    onEdit={() => handleEdit(feedback.id)}
                    onDelete={() => handleDelete(feedback.id)}
                />
            ))}
        </div>
    );
};

FeedbackList.propTypes = {
    feedbacks: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
        })
    ).isRequired,
    setFeedbacks: PropTypes.func.isRequired,
};

export default FeedbackList;
