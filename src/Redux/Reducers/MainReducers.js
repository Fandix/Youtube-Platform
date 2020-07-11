//=============================== Fetch Youtube Response
const FetchResponseInit = {
    YoutubeDatas : [],
    isFetch : false,
    didInvalidata : false,
    fetchFail : false
};

export const FetchResponseReducer = (state=FetchResponseInit,action) => {
    switch (action.type) {
        case "REQUEST_POSTS":
           return{
                ...state,
                isFetch : true,
                didInvalidata : false,
                fetchFail : false
            } 
        case "FETCH_RESPONSE_SUCCESS":
            return{
                ...state,
                isFetch : false,
                didInvalidata : false,
                YoutubeDatas : action.payload,
                fetchFail : false
            }
        case "FETCH_RESPONSE_FAIL":
            return{
                ...state,
                isFetch : false,
                didInvalidata : true,
                fetchFail : true
            }
    
        default:
            return state;
    }
};

//=============================== Pagination
const PaginationInit = {
    currentPage : 1, //當前頁面
    groupPage : 3, //預顯示的頁面數(不包含第一頁與最後一頁)
    startPage : 1, //起始頁面
    totalPage : 10, //總頁數
}

export const Pagination = (state=PaginationInit,action) => {
    switch (action.type) {
        
    
        default:
            return state;
    }
}

//=============================== Collect
const CollectInit = {
    postSuccess : false,
    postFail : false
}

export const CollectState = (state=CollectInit,action) => {
    switch (action.type) {
        case "POST_COLLECT_SUCCESS":
            return{
                ...state,
                postSuccess:true
            }
        case "POST_COLLECT_FAIL":
            return{
                ...state,
                postFail:true
            }
        case "POST_COLLECT_INIT":    
            return{
                ...state,
                postSuccess:false,
                postFail:false
            }

        default:
            return state;
    }
}
