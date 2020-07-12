import React from "react";
import style from "./VideoList.module.scss";
import Video from "../Video/Video"
import { PostCollectInit,DeleteCollectInit } from "../../../Redux/Action/MainAction"
import { toast } from 'react-toastify';

const VideoList = (props) => {
    const { Videos,onCollectClick,CollectCancel,dispatch,PostSuccess,DeleteSuccess,PostFail,DeleteFail } = props;

    if(PostSuccess === true){
        dispatch(PostCollectInit());
        toast.dark("Collect Success !");
    }else if(PostFail === true){
        dispatch(PostCollectInit());
        toast.error("Collect Fail !");
    }else if(DeleteSuccess === true){
        dispatch(DeleteCollectInit());
        toast.dark("Delete Success !");
    }else if(DeleteFail === true){
        dispatch(DeleteCollectInit());
        toast.error("Delete Fail !");
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
                                        CollectCancel = {CollectCancel}
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