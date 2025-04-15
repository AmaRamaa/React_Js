import react from 'react';
import { useState } from 'react';
import Button from './Button';
import RatingSelect from './RatingSelect';

function FeedbackForm() {
    const [feedback, setFeedback] = useState('');
    const [isDisabled, setIsDisabled] = useState(true);
    const [error, setError] = useState('');

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
`x`
    return (
        <>
            <form>
                <h2>Give us Feedback</h2>
                <RatingSelect />
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
        </>
    );
}

export default FeedbackForm;