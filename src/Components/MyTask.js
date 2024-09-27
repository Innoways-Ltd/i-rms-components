import React from 'react'
import { CgDanger } from 'react-icons/cg'
import { FiCheckCircle } from 'react-icons/fi'

export default function MyTask({ item }) {

    let showData = item?.data?.items?.slice(0, 4)
    return (
        <div className="task-list-dashboard">
            <div className="task-header">
                <div className="title-1 col-sm-6 p-0">Tasks</div>
                <div className="title-2 col-sm-4 p-0">Due Date</div>
                <div className="title-3 col-sm-2 p-0">Status</div>
            </div>
            <div>
                {showData?.map((obj) => {
                    return (
                        <>
                            <div className="task-body-block">
                                <div
                                    className="col-sm-6 p-0 title-1"
                                    onClick={() => {
                                    }}
                                >
                                    <div>
                                        <b>
                                            {obj?.serviceItemName}
                                        </b>
                                    </div>
                                    <p className="task-name mb-0">
                                        {obj?.taskName}{' '}
                                    </p>
                                </div>
                                <div className="col-sm-4 p-0 title-2">
                                    {obj?.dueDate && (
                                        <span
                                            className="task-date"
                                            style={{
                                                color: '#ea5455'
                                            }}
                                        >
                                            {obj?.dueDate}
                                        </span>
                                    )}
                                </div>
                                <div className="col-sm-2 p-0 title-3">
                                    {obj?.isCompleted ? (
                                        <FiCheckCircle
                                            color="var(--primary)"
                                            size={24}
                                        />
                                    ) : (
                                        <CgDanger
                                            color="var(--danger)"
                                            size={24}
                                        />
                                    )}
                                </div>
                            </div>
                        </>
                    )
                })}
            </div>
            {item?.data?.items?.length > 3 &&
                <div className="last-btn-block">
                    <div className="line-border"></div>
                    <div className="see-all-button">
                        <a href="javascript:void(0)">
                            <div>{item?.data?.view_all_text}</div>
                        </a>
                    </div>
                </div>}
        </div>

    )
}
