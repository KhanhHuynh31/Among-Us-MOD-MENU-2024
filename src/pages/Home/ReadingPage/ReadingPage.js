import React from "react";
import "./ReadingPage.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBookmark,
  faArrowLeft,
  faArrowRight,
} from "@fortawesome/free-solid-svg-icons";
import Breadcrumb from "../../../components/Breadcrumb/Breadcrumb";

export default function ReadingPage() {
  const renderReadingNav = () => {
    return (
      <div className="reading__nav">
        <select>
          <option>Chapter 00</option>
          <option>Chapter 1 - The Beginning of Everything </option>
        </select>
        <div className="reading__button">
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
      <div className="reading__img">
        <img src="https://yae.hifive03.com/assets/img/chapter/chapter00/2.jpg"></img>
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
    </div>
  );
}
