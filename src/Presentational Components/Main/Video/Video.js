import React from "react";
import style from "./Video.module.scss"

const Video = (props) => {
    console.log(props)
    const { Video } = props;
    return(
        <div className={style.wrap}>
            {/*********** img ***********/}
            <div className={style.img}>
                <img src={Video.snippet.thumbnails.medium.url} alt="Cover" />
                <div className={style.length}>
                    {/* <p>{Video.contentDetails.}</p> */}
                </div>
            </div>
            {/*********** Title ***********/}
            <div className={style.title}>
                <span>{Video.snippet.title}</span>
            </div>
            {/*********** img ***********/}
            
        </div>
    )
}

export default Video;