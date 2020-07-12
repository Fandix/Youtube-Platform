const CollectFetchInit = {
    CollectDatas : [],
    isFetch : false,
    didInvalidata : false,
    fetchFail : false
}

export const CollectFetchResponseReducer = (state=CollectFetchInit,action) => {
    switch (action.type) {
        case "COLLECT_REQUEST_POSTS":
            return{
                ...state,
                isFetch : true,
            }
        case "COLLECT_FETCH_RESPONSE_SUCCESS":
            return{
                ...state,
                isFetch : false,
                CollectDatas : action.payload,
            }
        case "COLLECT_FETCH_RESPONSE_FAIL":
            return{
                ...state,
                isFetch : false,
                didInvalidata : true,
                fetchFail : true
            }  
    
        default:
            return state;
    }
}

//============================================

const DeleteCollectInit = {
    DeleteSuccess:false,
    DeleteFail:false
}

export const CollectDeleteReducers = (state=DeleteCollectInit,action) => {
    switch (action.type) {
        case "COLLECT_DELETE_SUCCESS":
           return{
               ...state,
               DeleteSuccess:true
           }
        case "COLLECT_DELETE_FAIL":
            return{
                ...state,
                DeleteFail:true
            }    
        case "DELETE_COLLECT_INIT":
            return{
                ...state,
                DeleteSuccess:false,
                DeleteFail:false
            }
    
        default:
            return state;
    }
};