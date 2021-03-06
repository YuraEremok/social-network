import React from 'react';
import {Link} from "react-router-dom";
import style from "./sidebar.module.scss";


let SideBar = () => {
    return (

            <div className={style.sidebar_block}>


                <nav>
                    <ul>
                        <li><Link to="/content/profile">Профиль</Link></li>
                        <li><Link to="/content/dialogs">Сообщения</Link></li>
                        <li><Link to="/content/photos">Фото</Link></li>
                        <li><Link to="/profile">Настройки</Link></li>
                        <br/>
                        <hr/>
                        <li><Link to="/content/snake">snakeGame</Link></li>
                        <li><Link to="/content/thunkExample">ThunkExample</Link></li>
                        <li><Link to="/content/Users">users</Link></li>




                    </ul>


                </nav>
            </div>


    )
}

export default SideBar;