import React from "react";
import style from "./VideoList.module.scss";
import Video from "../Video/Video";
import { CSSTransition,TransitionGroup } from "react-transition-group";

const VideoList = (props) => {
    const { YoutubeDatas } = props;
    return(
        <div className={style.wrap}>
            <div className={style.box}>
                <TransitionGroup component={null}>
                    {
                        YoutubeDatas.map(VideoData => {
                            return(
                                <CSSTransition classNames={style} timeout={500} key = {VideoData.id}>
                                    <div key = {VideoData.id} className={style.videos}>
                                        <Video 
                                            Video={VideoData}
                                        />
                                    </div>
                                </CSSTransition>
                            )
                        })
                    }
                </TransitionGroup>
            </div>
        </div>
    )
}

export default VideoList;