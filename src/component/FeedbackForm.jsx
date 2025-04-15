import react from 'react';
import { useState } from 'react';

function FeedbackForm() {
    const [feedback, setFeedback] = useState('');
    const handleOnChange = (e) => {
        setFeedback(e.target.value);
    }
    return(

        <>
            <form> 
                <h2>Give us Feedback</h2>
                <div>
                    <input type="text" placeholder='Feedback' onChange={handleOnChange}
                    value={feedback} />
                    <button type='Sumbit'>
                        Send
                    </button>
                </div>

            </form>
        </>
    )
}

export default FeedbackForm;