import React from "react";
import style from "./CollectVideo.module.scss"
import {AiFillHeart } from "react-icons/ai";
import { Link } from "react-router-dom"

const CollectVideo = (props) => {
    console.log(props)
    const VideoLength = (duration) => {
        let tmp = [];
        for (let i = 0; i < duration.length; i++) {
            if(duration[i] === "P" || duration[i] === "T" || duration[i] === "S")
              continue;
            if(duration[i] === "M"){
              tmp.push(":")
              continue;
            }
            tmp.push(duration[i]);
        }
        
        const second = tmp.indexOf(":")
        if(second !== -1){
          if(tmp[second+1] === undefined){
            for (let i = 0; i < 2; i++) {
              tmp.push("0");
            }
          }else{
            let Tmp = "";
            Tmp = tmp[second+1];
            tmp[second+1] = "0";
            tmp[second+2] = Tmp;
          }
          const result = tmp.toString();
          return result.replace(/,/g,"");
        }else{
          if(tmp.length === 1){
            let Tmp = "";
            Tmp = tmp[0];
            console.log(Tmp)
            tmp[0] = "0";
            tmp[1] = Tmp;
          }
          tmp.unshift(":");
          tmp.unshift("0");
          const result = tmp.toString();
          return result.replace(/,/g,"");
        }
    }

    const { Video,CancelCollect } = props;
    return(
        <div className={style.wrap}>
            {/* ********** img ***********/}
            <Link 
                to={{
                        pathname:`/video/${Video.id}`,
                        state: { Video:Video },
                    }} 
                className={style.link}
            >
                <div className={style.img}>
                    <img src={Video.snippet.thumbnails.medium.url} alt="Cover" />
                    {/*********** Video Length ***********/}
                    <div className={style.length}>
                        <p>{VideoLength(Video.contentDetails.duration)}</p>
                    </div>
                </div>
            </Link>
            {/*********** Title ***********/}
            <div className={style.title}>
                <span>{Video.snippet.title}</span>
                <div className={style.collect}>
                        <AiFillHeart 
                            className={style.active}  
                            onClick={() => CancelCollect(Video.id)}
                        />
                </div>
            </div>    
        </div>
    )
} 

export default CollectVideo;