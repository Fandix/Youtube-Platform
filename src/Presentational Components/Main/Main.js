import React from "react";
import style from "./Main.module.scss"
import VideoList from "./VideoList/VideoList"
import PageMart from "../../Container Components/MainPage/Pagination"

const Main = (props) => {
    const { YoutubeDatas } = props;
    return(
        <div className={style.wrap}>
            <VideoList 
                YoutubeDatas={YoutubeDatas}
            />
            <PageMart />
        </div>
    )
};

export default Main;