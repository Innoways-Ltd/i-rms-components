import React from 'react'
import { Card, CardTitle } from 'reactstrap'
import MyVideos from './MyVideos'
import MySurvey from './MySurvey'
import MyDocuments from './MyDocuments'
import MoveIcon from '../assets/move.png'
import '../assets/style.css'
import MyProgress from './MyProgress'

export default function MyComponent({ provided, item }) {
  const CardLayout = (props) => {
    return <Card className="dashboard-card">
      <div
        className="item-drag-button"
        {...provided.dragHandleProps}
      >
        <img src={MoveIcon} />
      </div>
      <div className="card-item-block">
        <CardTitle className='main-title-box'>{item?.data?.title}</CardTitle>
        {props.children}
      </div>
    </Card>
  }
  switch (item.type) {
    case "MyVideos":
      return <CardLayout><MyVideos item={item}></MyVideos></CardLayout>
    case "MySurvey":
      return <CardLayout><MySurvey item={item}></MySurvey></CardLayout>
    case "MyDocuments":
      return <CardLayout><MyDocuments item={item}></MyDocuments></CardLayout>
    case "MyProgress":
      return <CardLayout><MyProgress item={item}></MyProgress></CardLayout>


    default:
      return <CardLayout><p>Unsupported Component</p></CardLayout>
  }
}
