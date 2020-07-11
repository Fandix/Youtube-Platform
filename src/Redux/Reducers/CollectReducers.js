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