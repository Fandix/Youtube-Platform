import React from "react";
import style from "./CollectVideoList.module.scss";
import CollectVideo from "../Video/CollectVideo"

const CollectVideoList = (props) => {
    console.log(props)
    const { collectVideo,CancelCollect,dispatch} = props;
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
