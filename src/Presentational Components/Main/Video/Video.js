import React from "react";
import style from "./Video.module.scss"

const Video = (props) => {
    console.log(props)
    const { Video } = props;

    const VideoLength = (duration) => {
        const Reg = new RegExp('[0-9]+[A-Z][0-9]+');
        const tmp = duration.match(Reg);
        const Result = tmp[0].replace('M',":");
        return Result
      }

    return(
        <div className={style.wrap}>
            {/*********** img ***********/}
            <div className={style.img}>
                <img src={Video.snippet.thumbnails.medium.url} alt="Cover" />
                <div className={style.length}>
                    <p>{VideoLength(Video.contentDetails.duration)}</p>
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