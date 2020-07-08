import React from "react"
import { Link } from "react-router-dom";
import style from "./Header.module.scss"
import { GrYoutube } from "react-icons/gr";

const Header = (props) => {
    return(
        <div className={style.weap}>
            <div className={style.box}>
                <Link to = {"/"}>
                    <div className={style.home}>
                        <GrYoutube />
                        <p>Youtube</p>
                    </div>
                </Link>
            </div>
        </div>
    )
};

export default Header;