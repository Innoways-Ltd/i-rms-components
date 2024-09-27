import { useState, useEffect, useRef } from "react";
import Card from './Card'
// import IRMSDashboard from 'dashboard-i-irms'
import IRMSDashboard from "./IRMSDashboard";
import jsonData from "./app.json";

function App() {
  const classes = ['col-8 mb-4', 'col-4 mb-4']

  const [items, setItems] = useState([]);
  const dragComp = useRef()
  function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  
  useEffect(() => {
    const newItems = []
    
    setItems(jsonData)
  }, [])
  const onDragEnd = (result) => {
    if (!result.destination) return;
    const reorderedItems = Array.from(items);
    const [movedItem] = reorderedItems.splice(result.source.index, 1);
    reorderedItems.splice(result.destination.index, 0, movedItem);
    setItems(reorderedItems);
  }
  return (
    <div className="App" style={{
      maxWidth: '1200px',
      margin: '0 auto'
    }}>
      <IRMSDashboard items={items} onDragEnd={onDragEnd} ref={dragComp}></IRMSDashboard>
    </div>
  );
}

export default App;
