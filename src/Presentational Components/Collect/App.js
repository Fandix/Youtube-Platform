import React from "react";
import Header from "../General/Header/Header"
import Loading from "../General/Loading/Loading"
import CollectVideoContainer from "../../Container Components/Collect/CollectVideoList"

const CollectMain = (props) => {
    const { isFetch,CollectDatas } = props;
    return(
        <div>
            <Header />
            {
                isFetch === true?<Loading />
                :<CollectVideoContainer 
                    CollectDatas = {CollectDatas}
                />
            }
        </div>
    )
}
 
export default CollectMain;