import axios from "../../Common/axios"

//====================================  Request Youtube Response
export const RequestPost = () => {
    return{
        type : "REQUEST_POSTS"
    }
};
//====================================  Request Youtube Response
const Fetch_Response_State = (res,err) => {
    console.log(res)
    if(res){
        return{
            type : "FETCH_RESPONSE_SUCCESS",
            payload : res.data,
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
        //axios.get("https://stormy-citadel-71123.herokuapp.com/videos")
        axios.get(`https://www.googleapis.com/youtube/v3/videos?part=snippet,contentDetails&chart=mostPopular&maxResults=12&key=AIzaSyDebFSPt9F9dhBmLoRRlANsWV217WRD11I&pageToken=${PageToken}`)
        .then(res => {
            dispatch(Fetch_Response_State(res,null));
        })
        .catch(err => {
            dispatch(Fetch_Response_State(null,err));
        })
    }
};

//====================================  Post Collect
export const PostIconsState = (id) => {
    return{
        type:"POST_ICON_CHANGE",
        id
    }
}

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
        axios.post("https://stormy-citadel-71123.herokuapp.com/Collect",data)
        .then(res => {
            dispatch(PostCollectState(res,null));
        })
        .catch(err => {
            dispatch(PostCollectState(null,err));
        })
    }
}

//====================================  Delete Collect
export const DeleteCollectInit = () => {
    return{
        type : "DELETE_COLLECT_INIT"
    }
}

const Delete_Collect_State = (res,err) => {
    if(res){
        return{
            type : "COLLECT_DELETE_SUCCESS",
        }
    }
    return{
        type : "COLLECT_DELETE_FAIL",
    }
}

export const Delete_Collect = (id) => {
    return (dispatch) => {
        axios.delete(`https://stormy-citadel-71123.herokuapp.com/Collect/${id}`)
        .then(res => {
            dispatch(Delete_Collect_State(res,null));
        })
        .catch(err => {
            dispatch(Delete_Collect_State(null,err));
        })
    }
}
