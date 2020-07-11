import axios from "../../Common/axios"

//====================================  Request Youtube Response
export const RequestPost = () => {
    return{
        type : "REQUEST_POSTS"
    }
};
//====================================  Request Youtube Response
const Fetch_Response_State = (res,err) => {
    if(res){
        return{
            type : "FETCH_RESPONSE_SUCCESS",
            payload : res.data[0].items
        }
    }
    return{
        type : "FETCH_RESPONSE_FAIL",
        payload : err
    }
};
//https://stormy-citadel-71123.herokuapp.com/
export const Fetch_Response = (PageToken = "") => {
    return(dispatch) => {
        axios.get("https://stormy-citadel-71123.herokuapp.com/videos")
        // axios.get(`https://www.googleapis.com/youtube/v3/videos?part=snippet,contentDetails&chart=mostPopular&maxResults=1&key=AIzaSyDebFSPt9F9dhBmLoRRlANsWV217WRD11I&pageToken=${PageToken}`)
        .then(res => {
            dispatch(Fetch_Response_State(res,null));
        })
        .catch(err => {
            dispatch(Fetch_Response_State(null,err));
        })
    }
};

//====================================  Collect
export const PostCollectInit = () => {
    return{
        type : "POST_COLLECT_INIT"
    }
}

const PostCollectState = (res,err) => {
    if(res){
        return{
            type : "POST_COLLECT_SUCCESS",
        }
    }
    return{
        type : "POST_COLLECT_FAIL",
    }
}

export const PostCollect = (data) => {
    return (dispatch) => {
        axios.post("http://localhost:3004/Collect",data)
        .then(res => {
            dispatch(PostCollectState(res,null));
        })
        .catch(err => {
            dispatch(PostCollectState(null,err));
        })
    }
}