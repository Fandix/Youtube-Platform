import React from "react"
import { Link } from "react-router-dom";
import style from "./Header.module.scss"
import { GrYoutube } from "react-icons/gr";
import { BsCollectionPlayFill } from "react-icons/bs";

const Header = (props) => {
    return(
        <div className={style.wrap}>
            <div className={style.box}>
                <Link to = {"/"} className={style.logo}>
                    <div className={style.home}>
                        <GrYoutube />
                        <p>Youtube</p>
                    </div>
                </Link>
                <Link to={"/collect"} className={style.collectLogo}>
                    <div className={style.collect}>
                        <BsCollectionPlayFill />
                        <div className={style.showMessage}>
                            <p>Collect</p>
                        </div>
                    </div>
                </Link>
            </div>
        </div>
    )
};

export default Header;