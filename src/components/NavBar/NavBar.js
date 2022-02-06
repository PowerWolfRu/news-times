import React, {useState} from 'react';
import {NavLink} from "react-router-dom";
import "./NavBar.css";

function NavBar () {
    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);
    const Close = () => setClick(false);

    return (
        <div>
            <div className={click ? "main-container" : ""}  onClick={()=>Close()} />
            <nav className="nav-bar" onClick={e => e.stopPropagation()}>
                <div className="nav-container">
                    <NavLink exact to="/" className="nav-logo">
                        NewsTimes
                        <i className="fas fa-newspaper"></i>
                    </NavLink>
                    <ul className={click ? "nav-menu active" : "nav-menu"}>
                        <li className="nav-item">
                            <NavLink
                                exact
                                to="/"
                                activeclassname="active"
                                className="nav-links"
                                onClick={click ? handleClick : null}
                            >
                                Новости
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink
                                exact
                                to="/contact"
                                activeclassname="active"
                                className="nav-links"
                                onClick={click ? handleClick : null}
                            >
                                Контакты
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink
                                exact
                                to="/auth"
                                activeclassname="active"
                                className="nav-links"
                                onClick={click ? handleClick : null}
                            >
                                Авторизация
                            </NavLink>
                
                        </li>
                        <li className="nav-item">
                            <NavLink
                                exact
                                to="/admin"
                                activeclassname="active"
                                className="nav-links"
                                onClick={click ? handleClick : null}
                            >
                                Админ
                            </NavLink>
                        </li>
                    </ul>
                    <div className="nav-icon" onClick={handleClick}>
                        <i className={click ? "fa fa-times" : "fa fa-bars"}></i>
                    </div>
                </div>
            </nav>
        </ div>
    );
};

export default NavBar;