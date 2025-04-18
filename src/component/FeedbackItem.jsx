import PropTypes from 'prop-types';
import './feedbackitem.css';

const FeedbackItem = ({ feedback, onDelete, onEdit }) => {
    return (
        <div className="feedback-item">
            <button className="buttonFeedback" onClick={() => onEdit(feedback.id)}>Edit</button>
            <p>{feedback.text}</p>
            <small>Rating: {feedback.rating}</small>
            <button className="buttonFeedback" onClick={() => onDelete(feedback.id)}>Delete</button>
        </div>
    );
};

export default FeedbackItem;

FeedbackItem.propTypes = {
    feedback: PropTypes.shape({
        id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
        text: PropTypes.string.isRequired,
        rating: PropTypes.number.isRequired,
    }).isRequired,
    onDelete: PropTypes.func.isRequired,
    onEdit: PropTypes.func.isRequired,
};