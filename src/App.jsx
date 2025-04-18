import FeedbackForm from './component/FeedbackForm'
import FeedbackList from './component/FeedbackIList'
import feedbackData from './data/db.json'

function App() {

  return (
    <>
      <FeedbackForm />
      <FeedbackList feedbacks={feedbackData}/>
    </>
  )
}

export default App
