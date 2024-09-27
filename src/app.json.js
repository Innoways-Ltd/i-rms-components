import { AiOutlineFilePdf, AiTwotoneDelete, AiOutlineDownload, AiOutlineMessage, AiOutlineMail } from "react-icons/ai";

const jsonData = [
  // {
  //   id: `item1`,
  //   type: 'MyVideos',
  //   data: {
  //     title: "My Video Component",
  //     classNames: "col-4"
  //   },
  // },
  // {
  //   id: `item2`,
  //   type: 'MyVideos',
  //   data: {
  //     title: "My Video Componen2",
  //     classNames: "col-8"
  //   },
  // },
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
      classNames: "col-4",
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
      classNames: "col-8",
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
      items: [{
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
        ,
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
  }
]

export default jsonData