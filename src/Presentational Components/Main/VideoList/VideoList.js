import React from "react";
import style from "./VideoList.module.scss";
import Video from "../Video/Video"
import { PostCollectInit } from "../../../Redux/Action/MainAction"
import { toast } from 'react-toastify';
import { CSSTransition,TransitionGroup } from "react-transition-group";

const VideoList = (props) => {
    const { Videos,onCollectClick,dispatch,PostSuccess,PostFail } = props;

    if(PostSuccess === true){
        dispatch(PostCollectInit());
        toast.dark("Collect Success !");
    }
    if(PostFail === true){
        dispatch(PostCollectInit());
        toast.error("Collect Fail !");
    }

    return(
        <div className={style.wrap}>
            <div className={style.box}>
                    {
                        Videos.map(VideoData => {
                            return(
                                <div key={VideoData.id}  className={style.videos}>
                                    <Video 
                                        Video={VideoData}
                                        onCollectClick = {onCollectClick}
                                    />
                                </div>
                            )
                        })
                    }
            </div>
        </div>
    )
}

export default VideoList;