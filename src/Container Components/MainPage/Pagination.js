import { connect } from "react-redux";
import Page from ".././../Presentational Components/Main/Pagination/Pagination"
import { RequestPost,Fetch_Response } from "../../Redux/Action/MainAction";

const ScrollTop = (number = 0,time) => {
    if(!time){
        document.body.scrollTop = document.documentElement.scrollTop = number;
        return number;
    }

    const spacingTime = 20;
    let spacingInex = time / spacingTime;
    let nowTop = document.body.scrollTop + document.documentElement.scrollTop;
    let everTop = (number - nowTop) / spacingInex;

    let scrollTimer = setInterval(() => {
        if (spacingInex > 0) {
            spacingInex--;
            this.ScrollTop(nowTop += everTop);
        } else {
            clearInterval(scrollTimer); 
        }
    }, spacingTime);
};

const mapStateToProps = (state) => {
    return{
        next:state.FetchResponseReducer.next,
        prev:state.FetchResponseReducer.prev,
    }
};

const mapDispatchToProps = (dispatch) => {
    return{
        onNextClick:(next) => {
            dispatch(RequestPost());
            dispatch(Fetch_Response(next));
            ScrollTop();
        },
        onPrevClick:(prev) => {
            dispatch(RequestPost());
            dispatch(Fetch_Response(prev));
            ScrollTop();
        }
    }
};

const PageMart = connect(
    mapStateToProps,
    mapDispatchToProps
)(Page);

export default PageMart;