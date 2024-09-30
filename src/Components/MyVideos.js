import React from 'react'
import { FiPlay } from 'react-icons/fi'
import {
  Player,
  BigPlayButton,
  FullscreenToggle,
  ControlBar,
  PlayToggle,
  VolumeMenuButton,
  ProgressControl
} from 'video-react'
import 'video-react/dist/video-react.css'

const VideoBlock = ({ item }) => {
  let showData = item.data.data?.slice(0, 4)

  return (
    <>
      <div className="videos-list">
        <div className="row">
          {showData?.map((obj) => {
            return (
              <>
                <div
                  className={`col-lg-6 remove-padd`}
                >
                  <div className="mar-rg">
                    <div>
                      <div className="video-box">
                        {/* <img src={obj?.img} /> */}
                        {obj?.videoType ==
                          'Link' ? (
                          <>
                            <div className="custom-upper-layer"></div>
                            <iframe
                              frameborder="0"
                              allowfullscreen=""
                              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                              referrerpolicy="strict-origin-when-cross-origin"
                              title="EVERYDAY LIFE IN HONG KONG"
                              width="100%" height="100%"
                              src={obj?.preview}
                              id="widget2"></iframe>
                            <div className="play-video-entry">
                              <div className="play-btn-block">
                                <div className="play-btn-inner">
                                  <FiPlay fill="var(--primary)" />
                                </div>
                              </div>
                            </div>
                          </>
                        ) : (
                          <>
                            <div className="custom-upper-layer"></div>
                            <Player
                              fluid={false}
                              width="100%"
                              height="100%"
                              playsInline
                              src={
                                obj?.preview
                              }
                            >
                              <BigPlayButton position="center" />
                              <ControlBar
                                autoHide={true}
                                disableDefaultControls={false}
                              >
                                <PlayToggle
                                  order={
                                    1
                                  }
                                />
                                <VolumeMenuButton
                                  order={
                                    2
                                  }
                                />
                                <ProgressControl
                                  order={
                                    3
                                  }
                                />
                                <FullscreenToggle
                                  disabled
                                />
                              </ControlBar>
                            </Player>
                          </>
                        )}
                        <div className="video-icon">
                          {/* <img
                                                        src={
                                                            obj?.isLike
                                                                ? HeartYellow
                                                                : HeartWhite
                                                        }
                                                        alt=""
                                                        width="22"
                                                        height="22"
                                                    /> */}
                        </div>
                      </div>
                    </div>
                    <div className="video-title">
                      {obj?.videoName}
                    </div>
                  </div>
                </div>
              </>
            )
          })}
        </div>
      </div>

      {item?.data?.data?.length > 4 &&
        <div className="last-btn-block">
          <div className="line-border"></div>
          <div className="see-all-button">
            <a href="javascript:void(0)">
              <div>See all</div>
            </a>
          </div>
        </div>}
    </>
  )
}

export default VideoBlock
