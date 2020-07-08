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