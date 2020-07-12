//=============================== Fetch Youtube Response
const FetchResponseInit = {
    YoutubeDatas : [],
    isFetch : false,
    didInvalidata : false,
    fetchFail : false,
    next:null,
    prev:null
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
                YoutubeDatas : action.payload.items,
                fetchFail : false,
                next:action.payload.nextPageToken,
                prev:action.payload.prevPageToken
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

//=============================== Post Collect
const CollectInit = {
    postSuccess : false,
    postFail : false,
    postIconState:false,
    postIcon:{}
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

//=============================== Post Collect
const MainDeleteCollectInit = {
    DeleteSuccess:false,
    DeleteFail:false
}

export const MainCollectDeleteReducers = (state=MainDeleteCollectInit,action) => {
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