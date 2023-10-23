import React from "react";
import { useDispatch } from "react-redux";
import { LoginModalAction } from "../../../../redux/actions/ModalAction";
import picIconHori from "../../../../assets/img/icon/logo_hori.png";
import picIconHoriColor from "../../../../assets/img/icon/logo_hori_color-transformed.png";

import "./Header.css";
import { NavLink } from "react-router-dom";

export default function Header() {
  const dispatch = useDispatch();
  const renderListHeader = () => {
    return (
      <ul className="header__menu">
        <li className="list__item">
          <NavLink
            to="/manga"
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "active" : ""
            }
          >
            Manga
          </NavLink>
        </li>
        <li className="list__item">
          <NavLink
            to="/manga/chapter"
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "active" : ""
            }
          >
            chapter
          </NavLink>
        </li>
        <li className="list__item">
          <NavLink
            to="/admin"
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "active" : ""
            }
          >
            Admin
          </NavLink>
        </li>
        <li className="list__item">
          <a
            onClick={() => {
              dispatch(LoginModalAction(true));
            }}
            className="menu__link button__modal"
          >
            login
          </a>
        </li>
        
      </ul>
    );
  };
  return (
    <div>
      <div className="header">
        <div className="header__top">
          <NavLink
            to="/home"
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "active" : ""
            }
          >
            <div className="header__logo">
              <img className="pic__icon" src={picIconHori}></img>
              <img className="pic__icon__color" src={picIconHoriColor}></img>
            </div>
          </NavLink>
        </div>
        <div className="header__bottom">
          <div className="header__left">{renderListHeader()}</div>
          <div className="header__right">
            <span className="home__search">
              <form>
                <input type="text" className="search__input" />
                <button type="submit" className="manga__button">
                  Search
                </button>
              </form>
            </span>
          </div>
          <div className="dropdown__content">{renderListHeader()}</div>
        </div>
      </div>
    </div>
  );
}
