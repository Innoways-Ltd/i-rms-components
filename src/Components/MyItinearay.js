import React from 'react'
import MapIcon from "../assets/map-icon-new.png"
export default function MyItinearay({ item }) {
    let showData = item?.data?.items?.slice(0, 2)
    return (
        <>
            <div className="itinerary-list">
                <div className="row">
                    {showData?.map((obj) => {
                        return (
                            <>
                                <div
                                    className={`col-lg-12 itnerary-padding`}
                                    onClick={() => { }}
                                >
                                    <a
                                        href="javascript:;"
                                        className="it-list-01"
                                    >
                                        <div className="col-lg-12 itnerary-padd">
                                            <div className="img-box-it-new">
                                                <img
                                                    alt="itinerary-image"
                                                    src={obj?.imgPreview}
                                                    width="100%"
                                                />
                                                {obj?.status && (
                                                    <div className="tag-block">
                                                        {obj?.status}
                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                        <div className="col-lg-12 itnerary-padd">
                                            <div className="it-list-item">
                                                <div className="it-list-title">
                                                    {obj?.itineraryName}
                                                </div>
                                            </div>
                                            <div className="locations-text">
                                                <img src={MapIcon} alt="" />
                                                <span>
                                                    Locations:{' '}
                                                    {obj?.placeCount}
                                                </span>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                            </>
                        )
                    })
                    }
                </div>
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
