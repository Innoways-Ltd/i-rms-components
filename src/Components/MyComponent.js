import React from 'react'
import { Card, CardTitle } from 'reactstrap'
import MyVideos from './MyVideos'
import MoveIcon from '../assets/move.png'
import '../assets/style.css'

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
        { props.children }
      </div>
    </Card>
  }
  switch (item.type) {
    case "MyVideos" :
      return <CardLayout><MyVideos item={item}></MyVideos></CardLayout>
    default:
      return <CardLayout><p>Unsupported Component</p></CardLayout>  
  }
}
