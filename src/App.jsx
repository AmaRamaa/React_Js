import React, { useState } from 'react'
import './App.css'
import FeedbackData from './data/feedbackData'
import Card from './components/Card.jsx'
console.log(FeedbackData)



function App() {
  const [feedbackData, setFeedbackData] = useState(FeedbackData)
  const deleteFeedBack = (id) => {
    if (window.confirm(`Are you sure you want to delete feedback with id: ${id}?`)) {
      console.log(`Delete feedback with id: ${id}`);
      setFeedbackData((prevFeedback) => prevFeedback.filter((item) => item.id !== id));
    } else {
      console.log(`Deletion canceled for feedback with id: ${id}`);
    }
  };
  console.log(feedbackData)
  return (
    < >
      <h1>Feedback List</h1>

      <div style={{ gap: '50px', justifyContent: 'Center', alignContent: 'cetner', border: '1px solid #ccc', borderRadius: '8px', padding: '16px' }}>
        {feedbackData.map((item) => (
          console.log(item),
          <Card
            key={item.id}
            title={item.text}
            rating={item.rating}
            src={item.src}
            deleteFeedBack={() => 
              deleteFeedBack(item.id)
              // console.log(`Delete feedback with id: ${item.id}`)
          }
          />
        ))}
      </div>
    </>
  )
>>>>>>> 5bdf3ae (Add feedback feature with prop-types and card component)
}

export default App;
