import React, { useState } from 'react'
import { ReactComponent as SendIcon } from '../assets/send.svg'
import moment from 'moment'

const MessageBlock = ({ item }) => {
    const [replayText, setReplayText] = useState('')
    let showData = item.data.data

    const getInitials = (str) => {
        const results = []
        const wordArray = str
            ? str.includes('  ')
                ? str.split('  ')
                : str.includes(' ')
                    ? str.split(' ')
                    : str.split('.')
            : []
        wordArray?.slice(0, 2)?.forEach((e) => {
            results?.push(e[0])
        })
        return results?.join('')?.toUpperCase()
    }

    const renderFullMessage = () => {
        return (
            <>
                <div
                    className={`message-right-wrapper scrollable-div messgae-dashboard-block`}
                >
                    <div className="">
                        <div className="message-all-content">
                            {showData?.map((obj) => {
                                return (
                                    <>
                                        {!obj?.userFg && (
                                            <div className="message-item-box">
                                                <div className="user-images">
                                                    <div className="user-logo-box">
                                                        {!obj?.replyBy
                                                            ?.profilePicture ? (
                                                            getInitials(
                                                                obj?.replyBy
                                                                    ?.fullName
                                                            )
                                                        ) : (
                                                            <img
                                                                alt='profile'
                                                                src={
                                                                    obj?.replyBy
                                                                        ?.profilePicture
                                                                }
                                                                className="w-100 h-100 rounded-circle"
                                                            />
                                                        )}
                                                    </div>
                                                </div>
                                                <div className="messages-wrapper-box">
                                                    <div
                                                        className="consultant-name"
                                                        style={{
                                                            minHeight: '17px'
                                                        }}
                                                    >
                                                        {obj?.replyBy?.fullName}
                                                    </div>
                                                    <div className="message-pop-text">
                                                        {obj?.content}
                                                    </div>
                                                    <div className="message-flex-wrapper">
                                                        <div className="message-time-box">
                                                            {obj?.replyDate
                                                                ? moment(
                                                                    obj?.replyDate
                                                                ).format(
                                                                    'DD-MMM-YYYY HH:mm'
                                                                )
                                                                : ''}
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        )}
                                        {obj?.userFg && (
                                            <div className="message-item-box reply-item-box">
                                                <div className="messages-wrapper-box reply-wrapper">
                                                    <div className="message-pop-text reply-color">
                                                        {obj?.content}
                                                    </div>
                                                    <div className="message-flex-wrapper">
                                                        <div className="message-time-box">
                                                            {obj?.replyDate
                                                                ? moment(
                                                                    obj?.replyDate
                                                                ).format(
                                                                    'DD-MMM-YYYY HH:mm'
                                                                )
                                                                : ''}
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        )}
                                    </>
                                )
                            })}
                        </div>
                    </div>
                </div>{' '}
            </>
        )
    }
    const renderMsgBox = () => {
        return (
            <>
                {/* {showData?.length > 0 && ( */}
                <form
                    onSubmit={(e) => {
                        e.preventDefault()
                    }}
                >
                    <div className="message-input-text">
                        <input
                            className="input-text"
                            type="text"
                            placeholder="Enter message"
                            onChange={(e) => {
                                setReplayText(e.target.value)
                            }}
                            value={replayText}
                            disabled={false}
                        />
                        <div className="message-send">
                            <SendIcon
                                className="send-icon"
                                onClick={() => { }}
                                style={{ cursor: 'pointer' }}
                            />
                        </div>
                    </div>{' '}
                </form>
                {/* )} */}
            </>
        )
    }
    return (
        <>
            <div className="message-right">
                <div className="progress-step-two">
                    {renderFullMessage()}
                </div>
                {renderMsgBox()}
            </div>
        </>
    )
}

export default MessageBlock
