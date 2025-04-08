<<<<<<< HEAD
import { useState } from 'react'
import './App.css'
import SideBar from './component/SideBar.jsx'
import Header from './component/Header.jsx'
import Container from './component/Container.jsx'

function App() {
  const [inPutItem, setInPutItem] = useState("");

  const handleInputChange = (value) => {
    setInPutItem(value);
  };

  const handleItemSelect = (item) => {
    setInPutItem(item);
  };
  return (
    <div className="app">
      <div className="sidebar">
    <SideBar outPutItem={inPutItem} onItemSelect={handleItemSelect} />
      </div>
      <div className="main-content">
        <div className="header">
          <Header selectedItem={inPutItem}/>
        </div>
        <div className="container">
          <Container inPutItem={inPutItem} onInputChange={handleInputChange} /> 
          {/* this is the routing Function */}
        </div>
      </div>
    </div>
  );
=======
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
