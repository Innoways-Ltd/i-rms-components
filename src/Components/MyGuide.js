import React from 'react'
import { UncontrolledTooltip } from 'reactstrap'

export default function MyGuide({ item }) {
    console.log("MyGuide → item:", item);
    let showData = item?.data?.items?.slice(0, 2)
    return (
        <>
            <div className="it-list-wrap row">
                {showData?.map((obj, index) => {
                    return (
                        <div className="it-list-content">
                            <div className="destination-block cursor-pointer">
                                <div
                                    onClick={() => { }}>
                                    <div className="row">
                                        <div className="col-lg-7 remove-padd">
                                            <div className="img-box-it">
                                                <img
                                                    src={
                                                        obj?.photoUrl
                                                    }
                                                    alt="image"
                                                    width="100%"
                                                />
                                            </div>
                                        </div>

                                        <div className="col-lg-5 guide-title-box">
                                            <div className="guide-box">
                                                <b
                                                    className="item-title-box"
                                                    id={`guideType${index}`}
                                                >
                                                    <p
                                                        className="m-0"
                                                        style={{
                                                            wordBreak:
                                                                'break-word'
                                                        }}
                                                    >
                                                        {obj?.guideType}
                                                    </p>
                                                </b>
                                                <UncontrolledTooltip
                                                    placement="top"
                                                    target={`guideType${index}`}
                                                >
                                                    {obj?.guideType}
                                                </UncontrolledTooltip>
                                                <div className="viewDetails-btn">
                                                    <div>
                                                        <u>View detail</u>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
            {item?.data?.items?.length > 2 &&
                <div className="last-btn-block">
                    <div className="line-border"></div>
                    <div className="see-all-button">
                        <a href="javascript:void(0)">
                            <div>{item?.data?.view_all_text}</div>
                        </a>
                    </div>
                </div>}
        </>
    )
}
