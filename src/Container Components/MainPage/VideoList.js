import { connect } from "react-redux";
import VideoList from "../../Presentational Components/Main/VideoList/VideoList"

import { PostCollect } from "../../Redux/Action/MainAction"

const mapStateToProps = (state) => {
    return{
        PostSuccess:state.CollectState.postSuccess,
        PostFail:state.CollectState.postFail,
    }
};

const mapDispatchToProps = (dispatch,ownProps) => {
    return{
        Videos: ownProps.YoutubeDatas,
        onCollectClick:(data) => {
            dispatch(PostCollect(data));
        },
        dispatch:dispatch,
    }
};

const VideoContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(VideoList);

export default VideoContainer;