import React from "react";
import style from "./Video.module.scss"
import {AiFillHeart } from "react-icons/ai";
import { Link } from "react-router-dom"
import { reactLocalStorage } from 'reactjs-localstorage';

class Video extends React.Component{

    state = {
        CollectIcon : false,
        count:0
    }

    componentDidMount(){
        if(reactLocalStorage.get(this.props.Video.id) === "true"){
            this.setState({
                CollectIcon:Boolean(reactLocalStorage.get(this.props.Video.id))
            })
        }else{
            reactLocalStorage.remove(this.props.Video.id);
        }
        
    }

    PostToLocalStorage = (state,lastState,id,data) => {
        if(state !== lastState){
            reactLocalStorage.remove(id);
            reactLocalStorage.set(id,state);
            if(state === true){
                this.props.onCollectClick(data);
            }else{
                this.props.CollectCancel(id);
            }
        }
    }

    /*
        Description : Collect Icon Click
    */
    CollectClick = (Video,state) => {
        this.PostToLocalStorage(state,this.state.CollectIcon,Video.id,Video);
        this.setState({
            CollectIcon:!this.state.CollectIcon,
        })
    }

    /*
        Description : Deal with length of video
    */
    VideoLength = (duration) => {
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

   
    render(){
        //console.log(this.state.CollectIcon)
        const { Video } = this.props;
        const CollectIcon = {
            true:style.active,
            false:style.nonactive,
            undefined:style.nonactive,
        }
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
                            <p>{this.VideoLength(Video.contentDetails.duration)}</p>
                        </div>
                    </div>
                </Link>
                {/*********** Title ***********/}
                <div className={style.title}>
                    <span>{Video.snippet.title}</span>
                    <div className={style.collect}>
                            <AiFillHeart 
                                className={CollectIcon[this.state.CollectIcon]}
                                onClick={() => this.CollectClick(Video,!this.state.CollectIcon)}
                            />
                    </div>
                </div>
            </div>
        )
    }
}

export default Video;

