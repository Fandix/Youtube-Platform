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
            payload : res.data.items
        }
    }
    return{
        type : "FETCH_RESPONSE_FAIL",
        payload : err
    }
};

export const Fetch_Response = (PageToken = "") => {
    return(dispatch) => {
        axios.get(`https://www.googleapis.com/youtube/v3/videos?part=snippet,contentDetails&chart=mostPopular&maxResults=12&key=AIzaSyDebFSPt9F9dhBmLoRRlANsWV217WRD11I&pageToken=${PageToken}`)
        .then(res => {
            dispatch(Fetch_Response_State(res,null));
        })
        .catch(err => {
            dispatch(Fetch_Response_State(null,err));
        })
    }
};