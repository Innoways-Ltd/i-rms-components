import React from 'react'
import { Card, CardTitle } from 'reactstrap'
import MyVideos from './MyVideos'
import MySurvey from './MySurvey'
import MyDocuments from './MyDocuments'
import HomeQuest from "./homeQuest"
import MoveIcon from '../assets/move.png'
import MyProgress from './MyProgress'
import MyButtonBlock from './MyButtonBlock'
import MyTask from './MyTask'
import HelpDesk from './HelpDesk'
import MessageBlock from './messageBlock'
import '../assets/style.css'
import MyGuide from './MyGuide'
import MyItinearay from './MyItinearay'
import MyProperties from './MyProperties'

export default function MyComponent({ provided, item }) {
  const CardLayout = (props) => {
    return <Card className={`dashboard-card ${item?.type == "MyButtonBlock" && "buttons-block"}`}>
      <div
        className="item-drag-button"
        {...provided.dragHandleProps}
      >
        <img src={MoveIcon} />
      </div>
      <div className="card-item-block">
        {!item?.data?.hideTitle && <CardTitle className='main-title-box'>{item?.data?.title}</CardTitle>}
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
    case "MyButtonBlock":
      return <CardLayout><MyButtonBlock item={item}></MyButtonBlock></CardLayout>
    case "MyTask":
      return <CardLayout><MyTask item={item}></MyTask></CardLayout>
    case "HelpDesk":
      return <CardLayout><HelpDesk item={item}></HelpDesk></CardLayout>
    case "HomeQuest":
      return <CardLayout><HomeQuest item={item}></HomeQuest></CardLayout>
    case "MyGuide":
      return <CardLayout><MyGuide item={item}></MyGuide></CardLayout>
    case "Message":
      return <CardLayout><MessageBlock item={item}></MessageBlock></CardLayout>
    case "MyItinearay":
      return <CardLayout><MyItinearay item={item}></MyItinearay></CardLayout>
    case "MyProperties":
      return <CardLayout><MyProperties item={item}></MyProperties></CardLayout>
    default:
      return <CardLayout><p>Unsupported Component</p></CardLayout>
  }
}
