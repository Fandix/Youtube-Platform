import React from "react";
import style from "./Pagination.module.scss";
import { GrCaretNext,GrCaretPrevious } from "react-icons/gr";

class Page extends React.Component
{
    state = {
        currentPage : 1, //當前頁面
        groupPage : 3, //預顯示的頁面數(不包含第一頁與最後一頁)
        startPage : 1, //起始頁面
        totalPage : 10, //總頁數
    }

    //==========================================================
    /*
        Discrbption : 頁面點擊事件
    */
    pageClick = (currentPage) => {
        const {groupPage} = this.state;

        //若點擊的頁面大於預顯示的頁面數則將起始頁面設定為當前頁面前一個
        if(currentPage >= groupPage){
            this.setState({
                startPage:currentPage-1
            })
        }

        //若為第一頁則重新設定起始頁
        if (currentPage === 1) {
            this.setState({
                startPage: 1,
            })
        }

        this.setState({
            currentPage:currentPage
        })
    };

    //==========================================================
    /*
        Discrbption : 上一頁點擊事件
    */
    prePageHandler = () => {
        const {currentPage} = this.state;
        const _currentPage = currentPage - 1;
        if(_currentPage === 0)
            return false;

        this.pageClick(_currentPage)
    };

    //==========================================================
    /*
        Discrbption : 下一頁點擊事件
    */
    nextPageHandler = () => {
        const {currentPage,totalPage} = this.state;
        const _currentPage = currentPage + 1;
        if(_currentPage > totalPage)
            return false;

        this.pageClick(_currentPage)
    };

    //==========================================================
    /*
        Discrbption : 建立分頁標籤
    */
    createPage = () => {
        const {currentPage,groupPage,startPage,totalPage} = this.state;
        const pages = [];

        //Step 1 : 建立上一頁
        pages.push(
            <li 
                className={currentPage === 1 ? style.nomore : null} 
                key={0}
                onClick={this.prePageHandler}
            >
                <GrCaretPrevious />
            </li>)

        //Step 2 : 判斷總頁數是否小於5，若小於5則全部顯示
        if(totalPage <= 5){
            for (let i = 1; i <= totalPage; i++) {
                pages.push(
                    <li 
                        key={i}  
                        className={currentPage === i ? style.activePage : null}
                        onClick={this.pageClick.bind(this,i)}
                    >
                        {i}
                    </li>
                )
            }
        }else{
            //Step 3 : 若大於5個則顯示第一頁
            pages.push(<li className={currentPage === 1 ? style.activePage : null} key={1}
                        onClick={this.pageClick.bind(this, 1)}>1</li>)

            //Step 4 : 判斷當前頁面是否大於預顯示的頁面數
            if(currentPage >= groupPage){
                //Step 4-1 : 大於預顯示的頁面數先加入前方省略符號
                pages.push(<li className="" key={-1}>···</li>)
            }

            //Step 5 : 判斷目前頁面與要顯示的頁面(當前頁面與前後兩個頁面)
            let pageCount = []
            if (groupPage + startPage > totalPage) {
                pageCount = totalPage
            } else {
                pageCount = groupPage + startPage;
            }
            for (let i = startPage; i < pageCount; i++) {
                if (i <= totalPage - 1 && i > 1) {
                    pages.push(
                        <li 
                            key={i}
                            className={currentPage === i ? style.activePage : null}
                            onClick={this.pageClick.bind(this,i)}
                        >
                            {i}
                        </li>
                    )
                }
            }

            //Step 6 : 判斷目前顯示的頁面是否需要顯示後面省略符號
            if(totalPage-startPage >= groupPage+1){
                pages.push(<li className="" key={-2}>···</li>)
            }

            //Step 7 : 顯示最後一頁
            pages.push(<li className={currentPage === totalPage ? style.activePage : null} key={totalPage}
                        onClick={this.pageClick.bind(this, totalPage)}>{totalPage}</li>)
            
        }
        //Step 8 : 建立下一頁
        pages.push(
            <li 
                className={currentPage === totalPage ? style.nomore : null}
                key={totalPage + 1}
                onClick={this.nextPageHandler}
            >    
                <GrCaretNext />
            </li>)

        return pages;
    };

    render()
    {
        const pageList = this.createPage();

        return(
            <div className={style.pagecontainer}>
                {pageList}
            </div>
        )
    }
}



export default Page;