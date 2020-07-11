import { connect } from "react-redux"
import CollectVideoList from "../../Presentational Components/Collect/VideoList/CollectVideoList"
import { Delete_Collect } from "../../Redux/Action/CollectAction"

const mapStateToProps = (state) => {
    return{
        collectVideo:state.CollectFetchResponseReducer.CollectDatas
    }
};

const mapDispatchToProps = (dispatch,ownProps) => {
    return{
        CollectDatas:ownProps.CollectDatas,
        CancelCollect:(id) => {
            dispatch(Delete_Collect(id));
        },
        dispatch,
    }
};

const CollectVideoContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(CollectVideoList)

export default CollectVideoContainer;