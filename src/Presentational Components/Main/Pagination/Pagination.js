import React from "react";
import style from "./Pagination.module.scss";
import { GrCaretNext,GrCaretPrevious } from "react-icons/gr";

class Page extends React.Component
{
    //==========================================================
    /*
        Discrbption : 建立分頁標籤
    */
    createPage = () => {
        const pages = [];
        //建立上一頁
        pages.push(
            <li 
                className={this.props.prev === undefined?style.nomore:style.action} 
                key={0}
                onClick={() => this.props.onPrevClick(this.props.prev)}
            >
                <GrCaretPrevious />
            </li>)
        //建立下一頁
        pages.push(
            <li 
                className={this.props.next === undefined?style.nomore:style.action}
                key={1}
                onClick={() => this.props.onNextClick(this.props.next)}
            >    
                <GrCaretNext />
            </li>)

        return pages;
    };

    render()
    {
        const pageList = this.createPage();
        console.log(this.props)
        return(
            <div className={style.pagecontainer}>
                {pageList}
            </div>
        )
    }
}



export default Page;