import React from 'react'

export default function MyDocuments(props) {
  const { item } = props
  return (
    <div className='document-list'>
      {
        item.data?.items?.map((i, index) => {
          return <div className="task-item" key={index}>
            <div className="doc-ment">
              <span className="small-icon">
                {
                  i.fileIcon ? i.fileIcon : null
                }
              </span>
              <div
                style={{
                  marginLeft: '10px'
                }}
              >
                {
                  i.title
                }
                <div className="doc-date">
                  {i.date}
                  <span className="pl-1">
                    {i.size}
                  </span>
                </div>
              </div>
            </div>
            <div className="update-icon">
              {i.downloadIcon ? i.downloadIcon : null }
              <span
                style={{
                  color: '#ddd',
                  margin: '0 8px'
                }}
              >
                |
              </span>
              {i.deleteIcon ? i.deleteIcon : null}
            </div>
          </div>
        })
      }
      <div className="last-btn-block">
        <div className="line-border"></div>
        <div className="see-all-button">
          <a href="javascript:void(0)">
            <div>{item?.data?.view_all_text}</div>
          </a>
        </div>
      </div>
    </div>
  )
}
