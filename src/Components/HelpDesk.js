import React from 'react'

export default function HelpDesk({item}) {
  return (
    <div className='help-desk-block'>
      <div className="row">
          {
          item?.data?.items.map((i) => {
            return <div className="col-lg-12 itnerary-padd">
              <div className="it-list-item help-list-item">
                <div className="width-a">
                  <div className="flex-box padd-b">
                    <div className="avatar-faq avatar-box">
                      {!i.avatar ? `${i?.title.charAt(0).toUpperCase()}${i?.title.charAt(1).toUpperCase() }`  : (
                        <img
                          className="w-100 round"
                          src={
                            i.avatar
                          }
                          alt="avatar"
                          height="65"
                          width="65"
                        />
                      )}
                    </div>
                    <div className="help-title">
                      {i?.title}
                      <br />
                      <span
                        style={{
                          fontSize:
                            '14px',
                          color: '#ffdb39'
                        }}
                      >
                        {i?.subTitile}
                      </span>
                    </div>
                  </div>
                </div>
                
                  <span>
                    <div className="cursor-pointer">
                      {item?.data?.messageIcon }
                    </div>
                  </span>
                
                <span
                  style={{
                    margin: '0 10px'
                  }}
                ></span>
                <span>
                    {item?.data?.emailIcon}
                </span>
              </div>
            </div>
          })
          }
      </div>
    </div>
  )
}
