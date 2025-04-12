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
}

export default App
