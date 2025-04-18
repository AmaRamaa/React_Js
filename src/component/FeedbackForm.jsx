import React, { useState, useEffect } from 'react';
import Button from './Button';
import RatingSelect from './RatingSelect';
import './FeedbackForm.css';

function FeedbackForm() {
    const [feedback, setFeedback] = useState('');
    const [isDisabled, setIsDisabled] = useState(true);
    const [error, setError] = useState('');
    const [rating, setRating] = useState(0);
    const [feedbackList, setFeedbackList] = useState([]);

    useEffect(() => {
        // Fetch existing feedback data
        const fetchFeedback = async () => {
            try {
                const response = await fetch('http://localhost:5000/FeedbackData');
                const data = await response.json();
                setFeedbackList(data);
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

        const newFeedback = {
            feedback,
            rating,
        };

        try {
            const response = await fetch('http://localhost:5000/FeedbackData', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(newFeedback),
            });

            if (response.ok) {
                const savedFeedback = await response.json();
                setFeedbackList([...feedbackList, savedFeedback]);
                setFeedback('');
                setRating(0);
                setIsDisabled(true);
            } else {
                console.error('Failed to submit feedback');
            }
        } catch (err) {
            console.error('Error submitting feedback:', err);
        }
    };

    return (
        <>
            <form onSubmit={handleSubmit}>
                <h2>Give us Feedback</h2>
                <RatingSelect select={handleRatingChange} RatingScale={10}/>
                <div>
                    <input
                        type="text"
                        placeholder="Feedback"
                        onChange={handleOnChange}
                        value={feedback}
                    />
                    <Button
                        isDisabled={isDisabled}
                        type="primary"
                        version="solid"
                    >
                        Send
                    </Button>
                </div>
            </form>
            {error && <p className="error">{error}</p>}
            <div>
                <h3>Feedback List</h3>
                <ul>
                    {feedbackList.map((item) => (
                        <li key={item.id}>
                            {item.feedback} - Rating: {item.rating}
                        </li>
                    ))}
                </ul>
            </div>
        </>
    );
}

export default FeedbackForm;