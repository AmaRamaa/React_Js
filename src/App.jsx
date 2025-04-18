import { useState, useEffect } from 'react';
import FeedbackForm from './component/FeedbackForm';
import FeedbackList from './component/FeedbackIList';

function App() {
  const [feedbackData, setFeedbackData] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/FeedbackData')
      .then((response) => response.json())
      .then((data) => setFeedbackData(data))
      .catch((error) => console.error('Error fetching feedback data:', error));
  }, []);

  return (
    <>
      <FeedbackForm />
      <FeedbackList feedbacks={feedbackData} setFeedbacks={setFeedbackData} />

    </>
  );
}

export default App;
