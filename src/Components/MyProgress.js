import React from 'react'
import SvgBorder from './svgBorder'
import PlanImg from '../assets/plane.svg'
import originCountryFlag from '../assets/china.svg'
import destinationCountryFlag from '../assets/china.svg'
import { Progress } from 'reactstrap'

export default function MyProgress({ item }) {
    let showData = item?.data?.services?.slice(0, 4)
    return (
        <>
            <div className={`list-box mt-1'`}>
                <div className="mb-2">
                    <div class="conutry-wrapper">
                        <div class="dashed-wrapper">
                            <div class="dashed-wrapper-svg">
                                <SvgBorder />
                                <img
                                    class="plane-svg"
                                    alt=""
                                    src={PlanImg}
                                />
                            </div>
                        </div>

                        <div class="country-name-box">
                            <div class="country-name">
                                <div class="moving-flex">
                                    <img
                                        alt={
                                            item?.data?.originCountryName
                                        }
                                        src={originCountryFlag}
                                    />
                                    <div
                                        class="contry-name-box"
                                        data-i18n="keyNetherlands"
                                    >
                                        {
                                            item?.data?.originCountryName
                                        }
                                    </div>
                                </div>

                                <div class="moving-flex">
                                    <img
                                        alt={
                                            item?.data?.destinationCountryName
                                        }
                                        src={destinationCountryFlag}
                                    />
                                    <div class="contry-name-box">
                                        {
                                            item?.data?.destinationCountryName
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div
                    className={
                        showData?.length > 0 && 'progressbar-block'
                    }
                >
                    {showData?.length > 0 && (
                        <>
                            <div
                                className="pro-box"
                                style={{ cursor: 'default' }}
                            >
                                <div className="pro-title">
                                    <div className="d-flex justify-content-between">
                                        <span
                                            className="title first-title"
                                            data-toggle="tooltip"
                                            data-placement="top"
                                            title="My Overall Progress"
                                        >
                                            My Overall Progress
                                        </span>
                                        <div
                                            style={{ width: '24px' }}
                                        ></div>
                                    </div>
                                </div>
                                <div className="content-line">
                                    <div className="pro-line">
                                        <Progress
                                            value={
                                                item?.data?.totalProgress
                                            }
                                        />
                                    </div>
                                    <div className="my-overall-color">
                                        {item?.data?.totalProgress ||
                                            0}
                                        %
                                    </div>
                                </div>
                            </div>
                        </>
                    )}
                    {showData?.map((obj) => {
                        return (
                            <>
                                <div
                                    className="pro-box"
                                    onClick={() => {
                                    }}
                                >
                                    <div className="pro-title">
                                        <div className="d-flex justify-content-between">
                                            <span
                                                className="title"
                                                data-toggle="tooltip"
                                                data-placement="top"
                                                title={obj?.sevriceName}
                                            >
                                                {obj?.sevriceName}
                                                <span className="title-count">
                                                    (
                                                    {obj?.tasks?.length}
                                                    )
                                                </span>
                                            </span>
                                            <div
                                                style={{
                                                    width: '24px'
                                                }}
                                            ></div>
                                        </div>
                                    </div>
                                    <div className="content-line">
                                        <div className="pro-line">
                                            <Progress
                                                value={obj?.progress}
                                            />
                                        </div>
                                        <div className="pro-per">
                                            {obj?.progress || 0}%
                                        </div>
                                    </div>
                                </div>
                            </>
                        )
                    })}
                </div>
            </div>
            {item?.data?.services?.length > 4 &&
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
