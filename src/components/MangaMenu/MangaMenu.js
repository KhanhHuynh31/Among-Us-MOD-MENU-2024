import React from 'react'
import MangaItem from "../MangaItem/MangaItem";
import "./MangaMenu.css";

export default function MangaMenu() {
  return (
    <div className="manga__list">
        <div className="list__header">
          <div className="header__title">
            <h3>latest manga</h3>
          </div>
          <div className="list__menu">
            <a href="">recently updated</a>
            <a href="">most viewed</a>
            <a href="" className="menu__active">
              top rated
            </a>
          </div>
        </div>
        <div className="list__content">
          {MangaItem()}
          {MangaItem()}
          {MangaItem()}
          {MangaItem()}
          {MangaItem()}
          {MangaItem()}
          {MangaItem()}
          {MangaItem()}
        </div>
        <div className="list__pagination">
          <a href="" className="page__active">
            1
          </a>
          <a href="">2</a>
          <a href="">3</a>
        </div>
      </div>
  )
}
