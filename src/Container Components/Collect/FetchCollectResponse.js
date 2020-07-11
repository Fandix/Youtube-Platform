import React from "react";
import { connect } from "react-redux";
import { CollectRequestPost,Collect_Fetch_Response } from "../../Redux/Action/CollectAction"
import CollectMain from "../../Presentational Components/Collect/App";

class Collect extends React.Component{
    state = {
        CollectDatas : [],
        isFetch : false
    }

    componentDidMount(){
        this.props.dispatch(CollectRequestPost());
        this.props.dispatch(Collect_Fetch_Response());
    }

    componentDidUpdate(prevProps){
        if(this.props.isFetch !== prevProps.isFetch){
            this.setState({
                isFetch : this.props.isFetch
            })
        }
        if(this.props.CollectDatas !== prevProps.CollectDatas){
            this.setState({
                CollectDatas : this.props.CollectDatas
            })
        }
    }

    render(){
        return(
            <div>
                <CollectMain 
                    isFetch={this.state.isFetch}
                    CollectDatas={this.state.CollectDatas}
                />
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    const { isFetch,CollectDatas } = state.CollectFetchResponseReducer
    return{
        isFetch,
        CollectDatas
    }
};

const mapDispatchToProps = (dispatch,ownProps) => {
    return{
       dispatch:dispatch,
    }
};

const FetchCollectResponse = connect(
    mapStateToProps,
    mapDispatchToProps
)(Collect)

export default FetchCollectResponse;