import axios from "../../Common/axios"

//====================================  Request Collect Response
export const CollectRequestPost = () => {
    return{
        type : "COLLECT_REQUEST_POSTS"
    }
};
//====================================  Request Collect Response
const Fetch_Response_State = (res,err) => {
    if(res){
        return{
            type : "COLLECT_FETCH_RESPONSE_SUCCESS",
            payload : res.data
        }
    }
    return{
        type : "COLLECT_FETCH_RESPONSE_FAIL",
        payload : err
    }
};

export const Collect_Fetch_Response = () => {
    return(dispatch) => {
        axios.get("http://localhost:3004/Collect")
        .then(res => {
            dispatch(Fetch_Response_State(res,null));
        })
        .catch(err => {
            dispatch(Fetch_Response_State(null,err));
        })
    }
};

//====================================  Delete Collect Video
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
        axios.delete(`http://localhost:3004/Collect/${id}`)
        .then(res => {
            dispatch(Delete_Collect_State(res,null));
            dispatch(Collect_Fetch_Response());
        })
        .catch(err => {
            dispatch(Delete_Collect_State(null,err));
        })
    }
}