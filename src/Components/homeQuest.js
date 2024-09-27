import React, { Fragment } from 'react'

const HomeQuest = ({ item }) => {
    let showData = item?.data?.items?.slice(0, 3)
    return (
        <Fragment>
            <div className="it-list-wrap row homeQuest-block">
                <div className="it-list-content">
                    <div className="col-lg-12 remove-padd">
                        {showData?.length > 0 && (
                            <div className="scrapy-title-bg">
                                <div className="scrapy-websites">
                                    Websites
                                </div>
                                <div className="scrapy-detail">Detail </div>
                            </div>
                        )}
                        {showData?.map((obj, index) => {
                            return (
                                <>
                                    <div className="scrapy-websites-list">
                                        <div className="scrapy-websites">
                                            <a
                                                href={obj?.url}
                                                rel="noreferrer"
                                                target="_blank"
                                                style={{ color: "#636362" }}
                                            >
                                                <u>{obj?.webName}</u>
                                            </a>
                                        </div>
                                        <div className="scrapy-detail">
                                            {obj?.detail}
                                        </div>
                                    </div>
                                </>
                            )
                        })}
                    </div>
                </div>
            </div>
            <div className="last-btn-block">
                <div className="line-border"></div>
                <div className="see-all-button">
                    <a href="#">
                        <div>{item?.data?.view_all_text}</div>
                    </a>
                </div>
            </div>
        </Fragment>
    )
}

export default HomeQuest
