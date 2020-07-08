import React from "react";
import Header from "./General/Header/Header";

class APP extends React.Component{
    
    render(){
        console.log(this.props)
        return(
            <div>
                <Header />
                APP
            </div>
        )
    }
}

export default APP;