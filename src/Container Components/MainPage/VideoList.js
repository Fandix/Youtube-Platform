import { connect } from "react-redux";
import VideoList from "../../Presentational Components/Main/VideoList/VideoList"

import { PostCollect,Delete_Collect } from "../../Redux/Action/MainAction"

const mapStateToProps = (state) => {
    return{
        PostSuccess:state.CollectState.postSuccess,
        PostFail:state.CollectState.postFail,
        DeleteSuccess:state.MainCollectDeleteReducers.DeleteSuccess,
        DeleteFail:state.MainCollectDeleteReducers.DeleteFail,
    }
};

const mapDispatchToProps = (dispatch,ownProps) => {
    return{
        Videos: ownProps.YoutubeDatas,
        onCollectClick:(data) => {
            dispatch(PostCollect(data));
        },
        dispatch:dispatch,
        CollectCancel:(id) => {
            dispatch(Delete_Collect(id))
        }
    }
};

const VideoContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(VideoList);

export default VideoContainer;