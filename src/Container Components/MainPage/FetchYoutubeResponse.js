import React from "react";
import { connect } from "react-redux";
import APP from "../../Presentational Components/App";

//Action
import { RequestPost,Fetch_Response } from "../../Redux/Action/MainAction";

class FetchYoutubeSponse extends React.Component{
    state = {
        YoutubeDatas : [],
        isFetch : false
    }

    componentDidMount(){
        this.props.dispatch(RequestPost());
        this.props.dispatch(Fetch_Response());
    }

    componentDidUpdate(prevProps){
        if(this.props.isFetch !== prevProps.isFetch){
            this.setState({
                isFetch : this.props.isFetch
            })
        }
        if(this.props.YoutubeDatas !== prevProps.YoutubeDatas){
            this.setState({
                YoutubeDatas : this.props.YoutubeDatas
            })
        }
    }


    render(){
        console.log(this.state.YoutubeDatas)
        return(  
            <div>
                <APP 
                    isFetch={this.state.isFetch}
                    YoutubeDatas={this.state.YoutubeDatas}
                />
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    const { YoutubeDatas,isFetch,fetchFail } = state.FetchResponseReducer;
    return{
        YoutubeDatas,
        isFetch,
        fetchFail
    }

};

export default connect(
    mapStateToProps
)(FetchYoutubeSponse);