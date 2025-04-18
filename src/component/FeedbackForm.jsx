import React, { useState, useEffect } from 'react';
import RatingSelect from './RatingSelect';
import './FeedbackForm.css';

function FeedbackForm() {
    const [feedback, setFeedback] = useState('');
    const [isDisabled, setIsDisabled] = useState(true);
    const [error, setError] = useState('');
    const [rating, setRating] = useState(0);
    const [feedbackList, setFeedbackList] = useState([]);
    const [editingId, setEditingId] = useState(null);

    useEffect(() => {
        const fetchFeedback = async () => {
            try {
                const response = await fetch('http://localhost:5000/FeedbackData');
                const data = await response.json();
                setFeedbackList(data);

                // Check if any item has isEditing: true
                const editingItem = data.find(item => item.isEditing);
                if (editingItem) {
                    setFeedback(editingItem.text);
                    setRating(editingItem.rating);
                    setEditingId(editingItem.id);
                    setIsDisabled(false);
                }
            } catch (err) {
                console.error('Error fetching feedback data:', err);
            }
        };

        fetchFeedback();
    }, []);

    const handleOnChange = (e) => {
        const value = e.target.value;
        setFeedback(value);

        if (value === '') {
            setIsDisabled(true);
            setError('Please enter feedback');
        } else if (value.trim().length < 10) {
            setIsDisabled(true);
            setError('Feedback must be at least 10 characters long');
        } else {
            setIsDisabled(false);
            setError('');
        }
    };

    const handleRatingChange = (selectedRating) => {
        setRating(selectedRating);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (feedback.trim().length >= 10) {
            const newFeedback = { text: feedback, rating };

            try {
                if (editingId) {
                    // Update existing feedback
                    const response = await fetch(`http://localhost:5000/FeedbackData/${editingId}`, {
                        method: 'PUT',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify(newFeedback),
                    });

                    if (response.ok) {
                        const updatedFeedback = await response.json();
                        setFeedbackList(feedbackList.map(item =>
                            item.id === editingId ? updatedFeedback : item
                        ));
                        setEditingId(null);
                    }
                } else {
                    // Add new feedback
                    const response = await fetch('http://localhost:5000/FeedbackData', {
                        method: 'POST',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify(newFeedback),
                    });

                    if (response.ok) {
                        const savedFeedback = await response.json();
                        setFeedbackList([...feedbackList, savedFeedback]);
                    }
                }

                setFeedback('');
                setIsDisabled(true);
                setError('');
                setRating(0);
            } catch (err) {
                console.error('Error submitting feedback:', err);
            }
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Give us Feedback</h2>
            <RatingSelect onSelect={handleRatingChange} RatingScale={10} selectedRating={rating} />
            <div className="input-group">
                <input
                    type="text"
                    placeholder="Feedback"
                    value={feedback}
                    onChange={handleOnChange}
                />
                <button type="submit" disabled={isDisabled}>
                    {editingId ? 'Update' : 'Send'}
                </button>
            </div>
            {error && <div className="error">{error}</div>}
        </form>
    );
}

export default FeedbackForm;