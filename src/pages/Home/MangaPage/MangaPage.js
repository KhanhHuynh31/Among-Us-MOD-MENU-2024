import React, { useState } from "react";
import { Rating } from "react-simple-star-rating";
import "./MangaPage.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComments, faBookmark } from "@fortawesome/free-solid-svg-icons";
import MangaItem from "../../../components/MangaItem/MangaItem";
import commentPic from "../../../assets/img/home/commentPic.png";
import { NavLink } from "react-router-dom";
import Breadcrumb from "../../../components/Breadcrumb/Breadcrumb";

export default function MangaPage() {
  const [rating, setRating] = useState(0); // initial rating value

  // Catch Rating value
  const handleRating = (rate) => {
    setRating(rate);
    // Some logic
  };
  return (
    <div className="manga__page">
      {Breadcrumb()}
      <div className="manga__header">
        <h3>The Boy in the All-Girls School</h3>
        <div className="manga__intro">
          <img src="https://yae.hifive03.com/assets/img/manga_single/single1.jpg"></img>
          <div className="manga__info">
            <div className="info__left">
              <div className="info__text">
                <Rating
                  onClick={handleRating}
                  ratingValue={rating}
                  size={40}
                  label
                  transition
                  fillColor="orange"
                  emptyColor="gray"
                  className="foo" // Will remove the inline style if applied
                />
                {/* Use rating value */}
                <span className="rating__value">{rating}</span>
                <div className="info__block">
                  <p>Rating</p>
                  <span>Average 4 / 5 out of 56</span>
                </div>
                <div className="info__block">
                  <p>Alternative</p>
                  <span>
                    女子学院的男生 ; Boy in A Girls' School ; Nuzi Xueyuan de
                    Nansheng
                  </span>
                </div>
                <div className="info__block">
                  <p>Author(s)</p>
                  <span>Sikinbungeo</span>
                </div>
                <div className="info__block">
                  <p>Genre(s)</p>
                  <span>Average 4 / 5 out of 56</span>
                </div>
                <div className="info__block">
                  <p>Type</p>
                  <span>Author(s) Chu dao manhua</span>
                </div>
              </div>
            </div>
            <div className="info__right">
              <div className="info__block">
                <p>Release</p>
                <span>2022</span>
              </div>
              <div className="info__block">
                <p>Status</p>
                <span>On going</span>
              </div>
              <div className="info__function">
                <a href="" className="function__block">
                  <span>
                    <FontAwesomeIcon icon={faComments} />
                  </span>
                  <p>Comments</p>
                </a>
                <a href="" className="function__block">
                  <span>
                    <FontAwesomeIcon icon={faBookmark} />
                  </span>
                  <p>Bookmark</p>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="info__button">
          <NavLink
            to="/manga/chapter"
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "active" : ""
            }
          >
            Read Now
          </NavLink>

          <NavLink
            to="/manga/chapter"
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "active" : ""
            }
          >
            Read Lasted Chapter
          </NavLink>
        </div>
      </div>
      <div className="manga__about">
        <div className="about__left">
          <div className="summary__content">
            <div className="header__title">
              <h3>summary</h3>
            </div>
            <p>
              In an all-girls school full of jaw-dropping beauties, a male
              student suddenly transfers in!!! Perhaps in the eyes of others,
              this would be a dream-like paradise, but in reality, the future is
              completely unimaginable
            </p>
          </div>
          <div className="chapter__content">
            <div className="header__title">
              <h3>Chapter</h3>
            </div>
          </div>
          <ul className="chapter__box">
            <li>
              <NavLink
                to="/manga/chapter"
                className={({ isActive, isPending }) =>
                  isPending ? "pending" : isActive ? "active" : "manga__chapter"
                }
              >
                <p>Chapter 1</p>
                <span>17/7/2023</span>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/manga/chapter"
                className={({ isActive, isPending }) =>
                  isPending ? "pending" : isActive ? "active" : "manga__chapter"
                }
              >
                <p>Chapter 2</p>
                <span>17/7/2023</span>
              </NavLink>
            </li>
          </ul>
          <div className="manga__comments">
            <div className="header__title">
              <h3>comment</h3>
            </div>
            <div className="comment__content">
              <div className="comment__form">
                <form>
                  <h3>Leave a Reply</h3>
                  <p>
                    You must <a href="">Register</a> or <a href="">Login</a> to
                    post a comment.
                  </p>
                </form>
              </div>
              <div className="comment__box">
                <div className="comment__avt">
                  <img src={commentPic}></img>
                </div>
                <div className="comment__info">
                  <span className="comment__date">25/8/2023</span>
                  <p className="comment__name">Khanh Huynh</p>
                  <p className="comment__text">
                    I'm usually an anime-only type person but watching the first
                    3 episodes of this show made me read the manga its actually
                    amazing
                  </p>
                  <div className="comment__button">
                    <a href="">Like</a>
                    <a href="">Reply</a>
                  </div>
                </div>
              </div>
              <div className="comment__box comment__reply">
                <div className="comment__avt">
                  <img src={commentPic}></img>
                </div>
                <div className="comment__info">
                  <span className="comment__date">25/8/2023</span>
                  <p className="comment__name">Khanh Huynh</p>
                  <p className="comment__text">
                    I'm usually an anime-only type person but watching the first
                    3 episodes of this show made me read the manga its actually
                    amazing
                  </p>
                  <div className="comment__button">
                    <a href="">Like</a>
                    <a href="">Reply</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="about__right">
          <div className="header__title">
            <h3>Related manga</h3>
          </div>
          <div className="season__release">
            {MangaItem()}
            {MangaItem()}
            {MangaItem()}
            {MangaItem()}
          </div>
        </div>
      </div>
    </div>
  );
}
