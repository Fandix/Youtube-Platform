import React from "react";
import style from "./Main.module.scss"
import VideoContainer from "../../Container Components/MainPage/VideoList"
import PageMart from "../../Container Components/MainPage/Pagination"

const Main = (props) => {
    const { YoutubeDatas } = props;
    return(
        <div className={style.wrap}>
            <VideoContainer 
                YoutubeDatas={YoutubeDatas}
            />
            <PageMart />
        </div>
    )
};

export default Main;