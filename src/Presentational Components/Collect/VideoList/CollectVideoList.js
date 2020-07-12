import React from "react";
import style from "./CollectVideoList.module.scss";
import CollectVideo from "../Video/CollectVideo"
import { toast } from 'react-toastify';
import { DeleteCollectInit } from "../../../Redux/Action/CollectAction"

const CollectVideoList = (props) => {
    const { collectVideo,CancelCollect,dispatch} = props;
    const { DeleteSuccess,DeleteFail } = props

    if(DeleteSuccess === true){
        dispatch(DeleteCollectInit());
        toast.dark("Delete Success !");
    }
    if(DeleteFail === true){
        dispatch(DeleteCollectInit());
        toast.error("Delete Fail !");
    }

    return(
        <div className={style.wrap}>
            <div className={style.box}>
                    {
                        collectVideo.map(VideoData => {
                            return(
                                <div key={VideoData.id}  className={style.videos}>
                                    <CollectVideo 
                                        Video={VideoData}
                                        CancelCollect = {CancelCollect}
                                        dispatch={dispatch}
                                    />
                                </div>
                            )
                        })
                    }
            </div>
        </div>
    )
}

export default CollectVideoList
