import React, { useEffect, useState } from "react";
import "./ReadingPage.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBookmark,
  faArrowLeft,
  faArrowRight,
} from "@fortawesome/free-solid-svg-icons";
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
  const renderReadingImg = () => {
    return (
      <div className="reading__content">
        <div className="reading__img">
          <img src="https://yae.hifive03.com/assets/img/chapter/chapter00/2.jpg"></img>
        </div>
        <div
          className="translate__img"
          contenteditable="true"
          style={{ display: toggleCC ? "block" : "none" }}
        >
          Trường THPT Thành Phố Chong Nam là một trường nữ sinh Không chỉ việc
          giáo dục tuyệt vời, hầu hết học sinh đều xinh đẹp và lớp học rất tốt,
          nơi đây là thiên đường với những đứa con trai
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
          {renderReadingImg()}
          {renderReadingImg()}
          {renderReadingImg()}
          {renderReadingImg()}
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
