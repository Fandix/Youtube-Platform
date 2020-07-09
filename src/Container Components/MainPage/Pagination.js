import { connect } from "react-redux";
import Page from ".././../Presentational Components/Main/Pagination/Pagination"

const mapStateToProps = (state) => {
    return{
        Pagination:state.Pagination
    }
};

// const mapDispatchToProps = (dispatch) => {

// };

const PageMart = connect(
    mapStateToProps,
    //mapDispatchToProps
)(Page);

export default PageMart;