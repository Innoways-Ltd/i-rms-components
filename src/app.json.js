import { AiOutlineFilePdf, AiTwotoneDelete, AiOutlineDownload, AiOutlineMessage, AiOutlineMail } from "react-icons/ai";
import Img1 from './assets/img-content-01.jpg'
import Img2 from './assets/img-content-02.jpg'
const jsonData = [
  // {
  //   id: `item1`,
  //   type: 'MyVideos',
  //   data: {
  //     title: "My Video Component",
  //     classNames: "col-4"
  //   },
  // },
  {
    id: `item2`,
    type: 'MyVideos',
    data: {
      title: "My Videos",
      classNames: "col-8",
      data: [
        {
          videoName: "Cannot play a",
          img: "https://a4aaksdisks.file.core.windows.net/dms-dev-react-file/dms/business/irmsdev2/System/upload_1fvagrif3lonzs9c0?sv=2024-05-04&ss=f&srt=sco&se=2024-09-28T11%3A55%3A50Z&sp=r&sig=8OAxSUj60OgpR2WBygbM6jUWwuek6I8207WNENwJj3c%3D",
          videoType: "Link",
          preview: "https://youtu.be/C7c-C6DB5jk?si=LbbjJtLoGuien7Qj"
        },
        {
          videoName: "Cannot play",
          img: "https://a4aaksdisks.file.core.windows.net/dms-dev-react-file/dms/business/irmsdev2/System/upload_1fvagrif3lonzs9c0?sv=2024-05-04&ss=f&srt=sco&se=2024-09-28T11%3A55%3A50Z&sp=r&sig=8OAxSUj60OgpR2WBygbM6jUWwuek6I8207WNENwJj3c%3D",
          videoType: "Link",
          preview: "https://youtu.be/bQYxKMBq3Ts?si=JpidJnikItl-m1-Y"
        },
        {
          videoName: "Watch",
          img: "https://a4aaksdisks.file.core.windows.net/dms-dev-react-file/dms/business/irmsdev2/System/upload_1fvagrif3lonzs9c0?sv=2024-05-04&ss=f&srt=sco&se=2024-09-28T11%3A55%3A50Z&sp=r&sig=8OAxSUj60OgpR2WBygbM6jUWwuek6I8207WNENwJj3c%3D",
          videoType: "Link",
          preview: "https://www.youtube.com/watch?v=417gVAZneBI"
        },
        {
          videoName: "New video",
          img: "https://a4aaksdisks.file.core.windows.net/dms-dev-react-file/dms/business/irmsdev2/System/upload_1fvagrif3lonzs9c0?sv=2024-05-04&ss=f&srt=sco&se=2024-09-28T11%3A55%3A50Z&sp=r&sig=8OAxSUj60OgpR2WBygbM6jUWwuek6I8207WNENwJj3c%3D",
          videoType: "Link",
          preview: "https://youtu.be/C7c-C6DB5jk?si=LbbjJtLoGuien7Qj"
        },
        {
          videoName: "New video",
          img: "https://a4aaksdisks.file.core.windows.net/dms-dev-react-file/dms/business/irmsdev2/System/upload_1fvagrif3lonzs9c0?sv=2024-05-04&ss=f&srt=sco&se=2024-09-28T11%3A55%3A50Z&sp=r&sig=8OAxSUj60OgpR2WBygbM6jUWwuek6I8207WNENwJj3c%3D",
          videoType: "Link",
          preview: "https://youtu.be/C7c-C6DB5jk?si=LbbjJtLoGuien7Qj"
        }
      ]
    },
  },
  {
    id: `item3`,
    type: 'MySurvey',
    data: {
      title: "Bonnie Survey Info",
      classNames: "col-lg-4 col-md-6 col-xs-12",
      subData: [
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
  },
  {
    id: '7',
    type: 'MyDocuments',
    data: {
      title: "Upload My Documents",
      classNames: "col-lg-4 col-md-6 col-xs-12",
      view_all_text: "See all",
      view_all_link: "",
      items: [
        {
          title: "ERES 特殊字段.pptx",
          date: "18-Jun-2024",
          size: "2.54 MB",
          fileIcon: <AiOutlineFilePdf color="red" size={24} />,
          deleteIcon: <AiTwotoneDelete size={20}></AiTwotoneDelete>,
          downloadIcon: <AiOutlineDownload size={20} />,
          deleteAction: (id) => { },
          downloadAction: (id) => { }
        },
        {
          title: "ERES 特殊字段.pptx",
          date: "18-Jun-2024",
          size: "2.54 MB",
          fileIcon: <AiOutlineFilePdf color="red" size={24} />,
          deleteIcon: <AiTwotoneDelete size={20} color="red"></AiTwotoneDelete>,
          downloadIcon: <AiOutlineDownload size={20} />,
          deleteAction: (id) => { },
          downloadAction: (id) => { }
        },
        {
          title: "ERES 特殊字段.pptx",
          date: "18-Jun-2024",
          size: "2.54 MB",
          fileIcon: <AiOutlineFilePdf color="red" size={24} />,
          deleteIcon: <AiTwotoneDelete size={20} color="red"></AiTwotoneDelete>,
          downloadIcon: <AiOutlineDownload size={20} />,
          deleteAction: (id) => { },
          downloadAction: (id) => { }
        }
      ]
    }
  },
  {
    id: `item4`,
    type: 'MyProgress',
    data: {
      title: "",
      classNames: "col-lg-4 col-md-6 col-xs-12",
      view_all_text: "See all",
      view_all_link: "",
      hideTitle: true,
      "originCountryName": "China",
      "destinationCountryName": "China",
      "totalProgress": 70,
      "totalTasks": 6,
      "services": [
        {
          "startId": "03022024042505223453658041496",
          "sevriceName": "Bundled 1 Day - Departure",
          "tasks": [
            {
              "taskName": "Departure 2",
              "completeFg": false
            }
          ],
          "progress": 10
        },
        {
          "startId": "03022024042506481917990552532",
          "sevriceName": "Bundled 2-day - Home Search",
          "tasks": [
            {
              "taskName": "Home search 3",
              "completeFg": false
            }
          ],
          "progress": 20
        },
        {
          "startId": "03022024042506453073672842809",
          "sevriceName": "Car Rental",
          "tasks": [
            {
              "taskName": "Departure 2",
              "completeFg": false
            }
          ],
          "progress": 30
        },
        {
          "startId": "03022024042506504568326427780",
          "sevriceName": "Departure",
          "tasks": [
            {
              "taskName": "Departure 2",
              "completeFg": false
            }
          ],
          "progress": 10
        },
        {
          "startId": "03022024042506340773298420601",
          "sevriceName": "Departure ",
          "tasks": [
            {
              "taskName": "Departure 2",
              "completeFg": false
            }
          ],
          "progress": 0
        },
        {
          "startId": "03022023030808541137449984504",
          "sevriceName": "Departure Service",
          "tasks": [
            {
              "taskName": "Home search 1",
              "completeFg": false
            }
          ],
          "progress": 0
        },
        {
          "startId": "03022024042506323763044267771",
          "sevriceName": "Home Search",
          "tasks": [
            {
              "taskName": "Home search 3",
              "completeFg": false
            }
          ],
          "progress": 0
        },
        {
          "startId": "03022024042506364734766903793",
          "sevriceName": "Home Search",
          "tasks": [
            {
              "taskName": "Home search 3",
              "completeFg": false
            }
          ],
          "progress": 0
        }
      ]
    }
  },
  {
    id: `item7`,
    type: 'HelpDesk',
    data: {
      title: "Help Desk",
      classNames: "col-lg-4 col-md-6 col-xs-12",
      messageIcon: <AiOutlineMessage size={24} />,
      emailIcon: <AiOutlineMail size={24} />,
      items: [
        {
          avatar: "https://a4aportaldiag.blob.core.windows.net/gima/irmsdev2-dev/usermaintenance/2f456c8f-ca90-4f6b-3d6c-9bf08cc75daa.jpg",
          title: "Cherry Consultant",
          subTitile: "Consultant"
        },
        {
          avatar: "https://a4aportaldiag.blob.core.windows.net/gima/irmsdev2-dev/usermaintenance/5a353150-ab33-4043-33de-dcbc3f4b03c9.jpeg",
          title: "John",
          subTitile: "Consultant"
        },
        {
          avatar: "",
          title: "Cherry Consultant",
          subTitile: ""
        },
        {
          avatar: "",
          title: "Logan Lee",
          subTitile: "Tester"
        }
      ]
    }
  },
  {
    id: 'item6',
    type: 'HomeQuest',
    data: {
      title: "Home Quest",
      classNames: "col-lg-8 col-md-6 col-xs-12",
      view_all_text: "See all",
      view_all_link: "",
      items: [
        {
          webName: "Fotocasa",
          url: "https://www.fotocasa.es/en",
          detail: "Find all the best properties and houses for sale in Spain on fotocasa. We provide the best selection of Spain Real Estate."
        },
        {
          webName: "Fundata",
          url: "https://www.funda.nl/",
          detail: "Use funda to find the latest properties to rent in Netherlands.  Search for houses, flats and for rent in Netherlands from the top letting agents."
        },
        {
          webName: "Pararius",
          url: "https://www.pararius.com/",
          detail: "The leading rental website in The Netherlands"
        },
        {
          webName: "Pararius",
          url: "https://www.pararius.com/",
          detail: "Find all the best properties and houses for sale in Spain on fotocasa. We provide the best selection of Spain Real Estate."
        }
      ]
    }
  },
  {
    id: `item9`,
    type: 'MyButtonBlock',
    data: {
      title: "",
      classNames: "col-lg-4 col-md-6 col-xs-12",
      hideTitle: true,
      items: [
        {
          text: "My Profile",
          link: "",
        },
        {
          text: "My Needs Assessment",
          link: "",
        }
      ]
    }
  },
  {
    id: `item10`,
    type: 'MyTask',
    data: {
      title: "",
      classNames: "col-lg-8 col-md-12 col-xs-12",
      hideTitle: true,
      view_all_text: "See all",
      items: [
        {
          "serviceItemName": "Bundled 2-day - Home Search",
          "startId": "03022024042506481917990552532",
          "startDate": "2024-04-25T14:48:19.179Z",
          "workflowId": "65b1dc6e742e4e0019d53cc6",
          "workflowItemId": "cd113ec4-02cf-11ef-8c04-85da7f79feb3",
          "taskName": "Home search 6",
          "dueDate": "",
          "isCompleted": true,
          "completedDate": "",
          "uploadedDocs": [],
          "comments": ""
        },
        {
          "serviceItemName": "Expense Management",
          "startId": "03022024042506383888070876562",
          "startDate": "2024-04-25T14:38:38.880Z",
          "workflowId": "65b1dc6e742e4e0019d53cc6",
          "workflowItemId": "732640a3-02ce-11ef-8c04-85da7f79feb3",
          "taskName": "School search 4",
          "dueDate": "",
          "isCompleted": true,
          "completedDate": "",
          "uploadedDocs": [],
          "comments": ""
        },
        {
          "serviceItemName": "Home Search",
          "startId": "03022024042506323763044267771",
          "startDate": "2024-04-25T14:32:37.630Z",
          "workflowId": "65b1dc6e742e4e0019d53cc6",
          "workflowItemId": "9be23864-02cd-11ef-8c04-85da7f79feb3",
          "taskName": null,
          "dueDate": "",
          "isCompleted": true,
          "completedDate": "",
          "uploadedDocs": [],
          "comments": ""
        },
        {
          "serviceItemName": "Home Search",
          "startId": "03022024042506364734766903793",
          "startDate": "2024-04-25T14:36:47.347Z",
          "workflowId": "65b1dc6e742e4e0019d53cc6",
          "workflowItemId": "30b03eb4-02ce-11ef-8c04-85da7f79feb3",
          "taskName": "Home search 6",
          "dueDate": "",
          "isCompleted": true,
          "completedDate": "",
          "uploadedDocs": [],
          "comments": ""
        }
      ]
    }
  },
  {
    id: `item11`,
    type: 'MyGuide',
    data: {
      title: "My Guides",
      classNames: "col-lg-8 col-md-6 col-xs-12",
      view_all_text: "See all",
      items: [{
        guideType: "Relocating to the UK: Need to know",
        photoUrl: Img1
      },
      {
        guideType: "Guide to Renting a Property in Scotland",
        photoUrl: Img2
      },
      {
        guideType: "Guide to Renting a Property in Scotland",
        photoUrl: Img1
      }
      ]
    }
  },
  {
    id: `item9`,
    type: 'Message',
    data: {
      title: "Sent Out My Message",
      classNames: "col-8",
      data: [
        {
          "replyId": "03022024012406401943903259355",
          "content": "Hii",
          "userFg": false,
          "replyBy": {
            "fullName": "Administrator i-RMS",
            "profilePicture": "https://a4aportaldiag.blob.core.windows.net/gima/irmsdev2-dev/usermaintenance/5a353150-ab33-4043-33de-dcbc3f4b03c9.jpeg",
            "profilePictureThumb": "https://a4aportaldiag.blob.core.windows.net/gima/irmsdev2-dev/usermaintenance/e055cfe9-66a4-43de-3f02-03e8ecfc8cc1.jpeg"
          },
          "replyDate": "2024-01-24T14:40:19.439Z"
        },
        {
          "replyId": "03022024022207323752208996380",
          "content": "Hi",
          "userFg": false,
          "replyBy": {
            "fullName": "Administrator i-RMS",
            "profilePicture": "https://a4aportaldiag.blob.core.windows.net/gima/irmsdev2-dev/usermaintenance/5a353150-ab33-4043-33de-dcbc3f4b03c9.jpeg",
            "profilePictureThumb": "https://a4aportaldiag.blob.core.windows.net/gima/irmsdev2-dev/usermaintenance/e055cfe9-66a4-43de-3f02-03e8ecfc8cc1.jpeg"
          },
          "replyDate": "2024-02-22T15:32:37.523Z"
        },
        {
          "replyId": "03022024022210111117573484140",
          "content": "Hello",
          "userFg": true,
          "replyBy": {
            "fullName": "Yi Li"
          },
          "replyDate": "2024-02-22T18:11:11.175Z"
        },
        {
          "replyId": "03022024022212272882881969817",
          "content": "Hi",
          "userFg": true,
          "replyBy": {
            "fullName": "Yi Li"
          },
          "replyDate": "2024-02-22T20:27:28.828Z"
        },
        {
          "replyId": "03022024022302523072007810257",
          "content": "ddd",
          "userFg": true,
          "replyBy": {
            "fullName": "Yi Li"
          },
          "replyDate": "2024-02-23T10:52:30.720Z"
        },
        {
          "replyId": "03022024022302535411319987837",
          "content": "hhh",
          "userFg": true,
          "replyBy": {
            "fullName": "Yi Li"
          },
          "replyDate": "2024-02-23T10:53:54.113Z"
        },
        {
          "replyId": "03022024022311563992628382236",
          "content": "Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello ",
          "userFg": true,
          "replyBy": {
            "fullName": "Yi Li"
          },
          "replyDate": "2024-02-23T19:56:39.926Z"
        },
        {
          "replyId": "03022024022408552513135663092",
          "content": "Hi",
          "userFg": true,
          "replyBy": {
            "fullName": "Yi Li"
          },
          "replyDate": "2024-02-24T16:55:25.131Z"
        },
        {
          "replyId": "03022024022611265750262696997",
          "content": "Hello",
          "userFg": false,
          "replyBy": {
            "fullName": "Administrator i-RMS",
            "profilePicture": "https://a4aportaldiag.blob.core.windows.net/gima/irmsdev2-dev/usermaintenance/5a353150-ab33-4043-33de-dcbc3f4b03c9.jpeg",
            "profilePictureThumb": "https://a4aportaldiag.blob.core.windows.net/gima/irmsdev2-dev/usermaintenance/e055cfe9-66a4-43de-3f02-03e8ecfc8cc1.jpeg"
          },
          "replyDate": "2024-02-26T19:26:57.502Z"
        },
        {
          "replyId": "03022024022702243980193304804",
          "content": "Hello Consultant A",
          "userFg": true,
          "replyBy": {
            "fullName": "Yi Li"
          },
          "replyDate": "2024-02-27T10:24:39.801Z"
        },
        {
          "replyId": "03022024022702250156914472712",
          "content": "Yes",
          "userFg": false,
          "replyBy": {
            "fullName": "Administrator i-RMS",
            "profilePicture": "https://a4aportaldiag.blob.core.windows.net/gima/irmsdev2-dev/usermaintenance/5a353150-ab33-4043-33de-dcbc3f4b03c9.jpeg",
            "profilePictureThumb": "https://a4aportaldiag.blob.core.windows.net/gima/irmsdev2-dev/usermaintenance/e055cfe9-66a4-43de-3f02-03e8ecfc8cc1.jpeg"
          },
          "replyDate": "2024-02-27T10:25:01.570Z"
        },
        {
          "replyId": "03022024022804495746390306878",
          "content": "Hi",
          "userFg": false,
          "replyBy": {
            "fullName": "Administrator i-RMS",
            "profilePicture": "https://a4aportaldiag.blob.core.windows.net/gima/irmsdev2-dev/usermaintenance/5a353150-ab33-4043-33de-dcbc3f4b03c9.jpeg",
            "profilePictureThumb": "https://a4aportaldiag.blob.core.windows.net/gima/irmsdev2-dev/usermaintenance/e055cfe9-66a4-43de-3f02-03e8ecfc8cc1.jpeg"
          },
          "replyDate": "2024-02-28T12:49:57.463Z"
        },
        {
          "replyId": "03022024031511385990901688247",
          "content": "hi",
          "userFg": true,
          "replyBy": {
            "fullName": "Yi Li"
          },
          "replyDate": "2024-03-15T19:38:59.909Z"
        },
        {
          "replyId": "03022024031606040902573009008",
          "content": "Hello",
          "userFg": true,
          "replyBy": {
            "fullName": "Yi Li"
          },
          "replyDate": "2024-03-16T14:04:09.025Z"
        },
        {
          "replyId": "03022024031606043708248454124",
          "content": "How are you ?",
          "userFg": true,
          "replyBy": {
            "fullName": "Yi Li"
          },
          "replyDate": "2024-03-16T14:04:37.082Z"
        },
        {
          "replyId": "03022024031606050016237197208",
          "content": "Fine",
          "userFg": true,
          "replyBy": {
            "fullName": "Yi Li"
          },
          "replyDate": "2024-03-16T14:05:00.162Z"
        },
        {
          "replyId": "03022024031606053973313610339",
          "content": "Hii",
          "userFg": true,
          "replyBy": {
            "fullName": "Yi Li"
          },
          "replyDate": "2024-03-16T14:05:39.733Z"
        },
        {
          "replyId": "03022024031905084777506810381",
          "content": "Hello",
          "userFg": true,
          "replyBy": {
            "fullName": "Yi Li"
          },
          "replyDate": "2024-03-19T13:08:47.775Z"
        },
        {
          "replyId": "03022024031905103940180559788",
          "content": "How are you ",
          "userFg": true,
          "replyBy": {
            "fullName": "Yi Li"
          },
          "replyDate": "2024-03-19T13:10:39.401Z"
        },
        {
          "replyId": "03022024031905192042186003894",
          "content": "I am fine",
          "userFg": true,
          "replyBy": {
            "fullName": "Yi Li"
          },
          "replyDate": "2024-03-19T13:19:20.421Z"
        },
        {
          "replyId": "03022024040209415121171834210",
          "content": "Hii",
          "userFg": true,
          "replyBy": {
            "fullName": "Yi Li"
          },
          "replyDate": "2024-04-02T17:41:51.211Z"
        },
        {
          "replyId": "03022024050705001167127249180",
          "content": "Hello",
          "userFg": false,
          "replyBy": {
            "fullName": "Administrator i-RMS",
            "profilePicture": "https://a4aportaldiag.blob.core.windows.net/gima/irmsdev2-dev/usermaintenance/5a353150-ab33-4043-33de-dcbc3f4b03c9.jpeg",
            "profilePictureThumb": "https://a4aportaldiag.blob.core.windows.net/gima/irmsdev2-dev/usermaintenance/e055cfe9-66a4-43de-3f02-03e8ecfc8cc1.jpeg"
          },
          "replyDate": "2024-05-07T13:00:11.671Z"
        },
        {
          "replyId": "03022024050705003823812663554",
          "content": "How are you ?",
          "userFg": false,
          "replyBy": {
            "fullName": "Administrator i-RMS",
            "profilePicture": "https://a4aportaldiag.blob.core.windows.net/gima/irmsdev2-dev/usermaintenance/5a353150-ab33-4043-33de-dcbc3f4b03c9.jpeg",
            "profilePictureThumb": "https://a4aportaldiag.blob.core.windows.net/gima/irmsdev2-dev/usermaintenance/e055cfe9-66a4-43de-3f02-03e8ecfc8cc1.jpeg"
          },
          "replyDate": "2024-05-07T13:00:38.239Z"
        },
        {
          "replyId": "03022024051009114026149526987",
          "content": " ",
          "userFg": true,
          "replyBy": {
            "fullName": "Yi Li"
          },
          "replyDate": "2024-05-10T17:11:40.262Z"
        },
        {
          "replyId": "03022024051009115086245353439",
          "content": "Hiii",
          "userFg": true,
          "replyBy": {
            "fullName": "Yi Li"
          },
          "replyDate": "2024-05-10T17:11:50.862Z"
        },
        {
          "replyId": "03022024062807195637680821463",
          "content": "66",
          "userFg": false,
          "replyBy": {
            "fullName": "Administrator i-RMS",
            "profilePicture": "https://a4aportaldiag.blob.core.windows.net/gima/irmsdev2-dev/usermaintenance/5a353150-ab33-4043-33de-dcbc3f4b03c9.jpeg",
            "profilePictureThumb": "https://a4aportaldiag.blob.core.windows.net/gima/irmsdev2-dev/usermaintenance/e055cfe9-66a4-43de-3f02-03e8ecfc8cc1.jpeg"
          },
          "replyDate": "2024-06-28T15:19:56.376Z"
        },
        {
          "replyId": "03022024070704251806832686462",
          "content": "66",
          "userFg": false,
          "replyBy": {
            "fullName": "Administrator i-RMS",
            "profilePicture": "https://a4aportaldiag.blob.core.windows.net/gima/irmsdev2-dev/usermaintenance/5a353150-ab33-4043-33de-dcbc3f4b03c9.jpeg",
            "profilePictureThumb": "https://a4aportaldiag.blob.core.windows.net/gima/irmsdev2-dev/usermaintenance/e055cfe9-66a4-43de-3f02-03e8ecfc8cc1.jpeg"
          },
          "replyDate": "2024-07-07T12:25:18.068Z"
        },
        {
          "replyId": "03022024070704472341162843568",
          "content": "66",
          "userFg": false,
          "replyBy": {
            "fullName": "Administrator i-RMS",
            "profilePicture": "https://a4aportaldiag.blob.core.windows.net/gima/irmsdev2-dev/usermaintenance/5a353150-ab33-4043-33de-dcbc3f4b03c9.jpeg",
            "profilePictureThumb": "https://a4aportaldiag.blob.core.windows.net/gima/irmsdev2-dev/usermaintenance/e055cfe9-66a4-43de-3f02-03e8ecfc8cc1.jpeg"
          },
          "replyDate": "2024-07-07T12:47:23.411Z"
        },
        {
          "replyId": "03022024082113111163591672874",
          "content": "Hi",
          "userFg": true,
          "replyBy": {
            "fullName": "Yi Li"
          },
          "replyDate": "2024-08-21T13:11:11.635Z"
        },
        {
          "replyId": "03022024082203240781268596708",
          "content": "Hello",
          "userFg": true,
          "replyBy": {
            "fullName": "Yi Li"
          },
          "replyDate": "2024-08-22T03:24:07.812Z"
        },
        {
          "replyId": "03022024091305462732083390330",
          "content": "Hi",
          "userFg": true,
          "replyBy": {
            "fullName": "Yi Li"
          },
          "replyDate": "2024-09-13T05:46:27.320Z"
        },
        {
          "replyId": "03022024092612022019928115565",
          "content": "Hi",
          "userFg": true,
          "replyBy": {
            "fullName": "Yi Li"
          },
          "replyDate": "2024-09-26T12:02:20.199Z"
        }
      ]
    }
  }
]

export default jsonData