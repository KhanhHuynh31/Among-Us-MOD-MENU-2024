import React, { useEffect, useState } from "react";
import "./ReadingPage.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBookmark,
  faArrowLeft,
  faArrowRight,
  faCheck,
} from "@fortawesome/free-solid-svg-icons";
import {
  faPenToSquare,
  faFlag,
} from "@fortawesome/free-regular-svg-icons";
import Breadcrumb from "../../../components/Breadcrumb/Breadcrumb";

export default function ReadingPage() {
  const [toggleCC, settoggleCC] = useState(false);
  const renderReadingNav = () => {
    return (
      <div className="reading__nav">
        <select>
          <option>Chapter 00</option>
          <option>Chapter 1 - The Beginning of Everything </option>
        </select>
        <div className="reading__button">
          <div className="toggle__button">
            <button
              className={toggleCC ? "active manga__button" : "manga__button"}
              onClick={() => {
                settoggleCC(!toggleCC);
              }}
            >
              CC
            </button>
          </div>
          <a href="" className="manga__button">
            <FontAwesomeIcon className="fa__prev" icon={faArrowLeft} />
            Prev
          </a>
          <a href="" className="manga__button">
            Next
            <FontAwesomeIcon className="fa__next" icon={faArrowRight} />
          </a>
        </div>
      </div>
    );
  };
  const renderReadingImg = (link) => {
    return (
      <div className="reading__content">
        <div className="reading__img">
          <img src={link}></img>
        </div>
        <div
          className="translate__img"
          contenteditable="true"
          style={{ display: toggleCC ? "block" : "none" }}
        >
         <span>Không quan trọng tôi nghĩ như thế nào, tôi nghĩ tôi đã xuyên vào một cuốn tiểu thuyết</span>
          <div className="translate__button">
              <button data-balloon="Save" data-balloon-pos="up"><FontAwesomeIcon icon={faCheck} /></button>
              <button data-balloon="Edit" data-balloon-pos="up"><FontAwesomeIcon icon={faPenToSquare} /></button>
              <button data-balloon="Report" data-balloon-pos="up"><FontAwesomeIcon icon={faFlag} /></button>
          </div>
        </div>
      </div>
    );
  };
  return (
    <div className="reading__page">
      {Breadcrumb()}
      <div className="reading__header">
        <div className="reading__info">
          <div className="reading__title">
            <h3>Manga Name</h3>
            <div className="bookmark__icon">
              <FontAwesomeIcon icon={faBookmark} />
            </div>
          </div>
          {renderReadingNav()}
        </div>
        <div className="reading__body">
          {renderReadingImg("https://i.postimg.cc/kgnmRr83/01.jpg")}
          {renderReadingImg("https://i.postimg.cc/mrWgRKc1/02.webp")}
          {renderReadingImg("https://i.postimg.cc/9XgXzDRh/03.webp")}
          {renderReadingImg("https://i.postimg.cc/ZnQJQQtR/04.webp")}
        </div>
        {renderReadingNav()}
      </div>
      <div className="popup__button">
        <div
          className={toggleCC ? "active toggle__sub" : "toggle__sub"}
          onClick={() => {
            settoggleCC(!toggleCC);
          }}
        >
          CC
        </div>
      </div>
    </div>
  );
}
