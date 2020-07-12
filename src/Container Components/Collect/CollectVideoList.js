import { connect } from "react-redux"
import CollectVideoList from "../../Presentational Components/Collect/VideoList/CollectVideoList"
import { Delete_Collect } from "../../Redux/Action/CollectAction"
import { Collect_Fetch_Response } from "../../Redux/Action/CollectAction"

const mapStateToProps = (state) => {
    return{
        collectVideo:state.CollectFetchResponseReducer.CollectDatas,
        DeleteSuccess:state.CollectDeleteReducers.DeleteSuccess,
        DeleteFail:state.CollectDeleteReducers.DeleteFail
    }
};

const mapDispatchToProps = (dispatch,ownProps) => {
    return{
        CollectDatas:ownProps.CollectDatas,
        CancelCollect:(id) => {
            dispatch(Delete_Collect(id));
            dispatch(Collect_Fetch_Response());
        },
        dispatch,
    }
};

const CollectVideoContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(CollectVideoList)

export default CollectVideoContainer;