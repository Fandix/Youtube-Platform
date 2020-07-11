import React from "react"
import Header from "../General/Header/Header"
import VideoContainer from "./VideoConatiner/VideoContainer"

const VideoMain = (props) => {
    return(
        <div>
            <Header />
            <VideoContainer 
                videoInfo = {props.location.state.Video}
            />
        </div>
    )
}

export default VideoMain;