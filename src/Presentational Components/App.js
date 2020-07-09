import React from "react";
import Header from "./General/Header/Header";
import Loading from "./General/Loading/Loading"
import Main from "./Main/Main";
import style from "./App.module.scss"

class APP extends React.Component{
    render(){
        const { isFetch,YoutubeDatas } = this.props;
        return(
            <div className={style.wrap}>
                <Header />
                {
                    isFetch === true?<Loading />
                    :<Main 
                        YoutubeDatas = {YoutubeDatas}
                    />
                }
            </div>
        )
    }
}

export default APP;