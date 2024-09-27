import { useState, useEffect, useRef } from "react";
import Card from './Card'
// import IRMSDashboard from 'dashboard-i-irms'
import IRMSDashboard from "./IRMSDashboard";

function App() {
  const classes = ['col-8 mb-4', 'col-4 mb-4']

  const [items, setItems] = useState([]);
  const dragComp = useRef()
  function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  
  useEffect(() => {
    const newItems = []
    newItems.push(
      { 
        id: `item1`,
        type: 'MyVideos',
        data: {
          title: "My Video Component",
          classNames: "col-4"
        },
      })
    newItems.push(
      {
        id: `item2`,
        type: 'MyVideos',
        data: {
          title: "My Video Componen2",
          classNames: "col-8"
        },
      },
      {
        id: `item3`,
        type: 'MySurvey',
        data: {
          title: "Bonnie Survey Info",
          classNames: "col-lg-4 col-md-6 col-xs-12",
          subData :[
            {
                "fileSurveyId": "03022023062607204845151961407",
                "masterSurveyName": "Customer Satisfaction Feedback",
                "submitFg": false,
                "submitDate": null,
                "refName": "Pulse Survey"
            },
            {
                "fileSurveyId": "03022023112204531059960736132",
                "masterSurveyName": "Survey",
                "submitFg": true,
                "submitDate": "2024-01-02T14:51:21.688Z",
                "refName": "Pulse Survey"
            },
            {
                "fileSurveyId": "03022023112710344563209117463",
                "masterSurveyName": "Pulse Survey",
                "submitFg": true,
                "submitDate": "2023-11-27T18:35:34.081Z",
                "refName": "Pulse Survey"
            },
            {
                "fileSurveyId": "03022024010207240458881845770",
                "masterSurveyName": "Customer Satisfaction Feedback",
                "submitFg": true,
                "submitDate": "2024-06-27T16:57:32.243Z",
                "refName": "Pulse Survey"
            },
            {
                "fileSurveyId": "03022023042005075051975559991",
                "masterSurveyName": "Relocation Services _ 2023",
                "submitFg": true,
                "submitDate": "2023-08-01T16:55:58.000Z",
                "refName": "Ad Hoc Services"
            }
        ]
        },
      })
    setItems(newItems)
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
