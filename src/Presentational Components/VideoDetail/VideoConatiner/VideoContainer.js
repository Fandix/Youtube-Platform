import React from "react"
import style from "./VideoComtainer.module.scss"
import { Player } from "video-react"
import "video-react/dist/video-react.css";
import Media from 'react-media';

class VideoContainer extends React.Component{
    state = {
        DescriOpen:false
    }

    MobilOnTitleClick = () => {
        this.setState({
            DescriOpen:!this.state.DescriOpen
        })
    }

    PcDecriOpen = () => {
        this.setState({
            DescriOpen:true
        })
    }
    PcDecriClose = () => {
        this.setState({
            DescriOpen:false
        })
    }

    render(){
        const { videoInfo } = this.props;
        const DescriOpen = {
            true:style.open,
            false:style.close,
        }
        const ShowMore = {
            true:style.nonShow,
            false:style.Show,
        }

        return(
            <div className={style.wrap}>
                <div className={style.box}>
                    <div className={style.video}>
                        <Player
                            fluid={false}
                            width="100%"
                            height="100%"
                            muted={true}
                            autoPlay={true}
                        >
                            <source src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4" />
                        </Player>
                    </div>
                    <div className={style.describe}>
                        <Media 
                            queries={{
                                small: "(max-width: 958px)",
                                medium: "(min-width: 959px)",
                            }}
                        >
                            {matches => (
                                <React.Fragment>
                                    {matches.small && 
                                        <React.Fragment>
                                            <div className={style.title} onClick={this.MobilOnTitleClick}>
                                                <span>{videoInfo.snippet.title}</span>
                                            </div>
                                            <div className={DescriOpen[this.state.DescriOpen]}>
                                                <span>{videoInfo.snippet.description}</span>
                                            </div>
                                       </React.Fragment>
                                    }
                                    {matches.medium && 
                                        <React.Fragment>
                                            <div className={style.title}>
                                                <span>{videoInfo.snippet.title}</span>
                                                <p 
                                                    className={ShowMore[this.state.DescriOpen]} 
                                                    onClick={this.PcDecriOpen}>
                                                        Show More...
                                                </p>
                                            </div>
                                            <div className={DescriOpen[this.state.DescriOpen]}>
                                                <span>{videoInfo.snippet.description}</span>
                                                <p onClick={this.PcDecriClose}>Show Less...</p>
                                            </div>
                                        </React.Fragment>
                                    }
                                </React.Fragment>
                            )}
                        </Media> 
                    </div>
                </div>
            </div>
        )
    }
}

export default VideoContainer