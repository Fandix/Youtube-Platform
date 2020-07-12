import { connect } from "react-redux";
import Page from ".././../Presentational Components/Main/Pagination/Pagination"
import { RequestPost,Fetch_Response } from "../../Redux/Action/MainAction";

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
        },
        onPrevClick:(prev) => {
            dispatch(RequestPost());
            dispatch(Fetch_Response(prev));
        }
    }
};

const PageMart = connect(
    mapStateToProps,
    mapDispatchToProps
)(Page);

export default PageMart;