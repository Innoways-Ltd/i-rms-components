import React from 'react'
import { Tooltip } from 'reactstrap'
import MapIcon from "../assets/map-icon-white.png"
import HeartWhite from "../assets/heart-frame-white.png"
import { FaHeart } from 'react-icons/fa'
export default function MyProperties({ item }) {
    let showData = item?.data?.items?.slice(0, 6)
    return (
        <>
            <div className="pre-selected-block" id="map-content">
                <div className="row" style={{ marginTop: '10px' }}>
                    {showData?.map((obj, index) => {
                        return (
                            <>
                                <div
                                    className={`col-lg-6 itnerary-padd`}
                                    onClick={() => { }}
                                >
                                    <div className="img-box-it-new img-shadow">
                                        <img
                                            src={obj?.imgPreview?.[0]}
                                            className="img-fluid"
                                            alt="property-image"
                                            width="100%"
                                        />

                                        <div className="g-title">

                                            <p className="preselected-overflow text-white mb-0">
                                                {obj?.placeName}
                                            </p>
                                            {obj?.address && (
                                                <div className="inner-title preselected-overflow">
                                                    <img
                                                        src={MapIcon}
                                                        width="18"
                                                        height="18"
                                                        alt=""
                                                    />
                                                    {obj?.address}
                                                </div>
                                            )}
                                        </div>
                                        <div className="herat-icon">
                                            <span>
                                                {obj?.selectFg ? (
                                                    <FaHeart color='var(--primary)'
                                                        size={22}
                                                        onClick={() => { }}
                                                    />
                                                ) : (
                                                    <img
                                                        src={HeartWhite}
                                                        alt=""
                                                        width="24"
                                                        height="24"
                                                        onClick={() => { }}
                                                    />
                                                )}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </>
                        )
                    })}
                </div>
            </div>
            {item?.data?.items?.length > 6 &&
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
