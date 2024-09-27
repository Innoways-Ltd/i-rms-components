import React from 'react'
import moment from 'moment'
import RightArrow from '../assets/big-arrow-right.svg'

export default function MySurvey({ item }) {
    let showData = item?.data?.subData?.slice(0, 5)
    return (
        <>
            <div className="my-guide">
                <div className="myguide-content">
                    <div className="my-guide-card-inner">
                        <div className="doc-box">
                            <div className="com-box">
                                {showData
                                    ?.slice()
                                    ?.sort((a, b) => {
                                        if (a?.submitDate === null) return 1
                                        if (b?.submitDate === null)
                                            return -1
                                        return (
                                            new Date(a?.submitDate) -
                                            new Date(b?.submitDate)
                                        )
                                    })

                                    ?.map((innObj, index) => {
                                        return (
                                            <>
                                                <div
                                                    className="it-list-item"
                                                    key={index}
                                                    onClick={() => {
                                                        // setIsopen(true)
                                                        // setDetails(
                                                        //     innObj?.fileSurveyId
                                                        // )
                                                    }}
                                                >
                                                    <div className="width-a">
                                                        {
                                                            innObj?.masterSurveyName
                                                        }
                                                        <br />
                                                        <span className="c-green">
                                                            <span
                                                                style={{
                                                                    color: 'var(--primary)'
                                                                }}
                                                            >
                                                                {`${innObj?.refName}  `}
                                                            </span>
                                                            <span className="c-green">
                                                                {innObj?.submitDate
                                                                    ? moment(
                                                                        innObj?.submitDate
                                                                    ).format(
                                                                        'DD-MMM-YYYY'
                                                                    )
                                                                    : ''}
                                                            </span>
                                                        </span>
                                                    </div>
                                                    <span>
                                                        <img
                                                            src={RightArrow}
                                                            width="20"
                                                            height="20"
                                                            alt="Arrow"
                                                        />
                                                    </span>
                                                </div>
                                            </>
                                        )
                                    })}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="last-btn-block">
                <div className="line-border"></div>
                <div className="see-all-button">
                    <a href="javascript:void(0)">
                        <div>See all</div>
                    </a>
                </div>
            </div>
        </>
    )
}
