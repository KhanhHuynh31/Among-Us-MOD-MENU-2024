import { useEffect, useState } from "react";
import "./MangaItem.css";
import { Rating } from "react-simple-star-rating";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";
export default function MangaItem() {
  const [mousePos, setMousePos] = useState({});
  const [windowSize, setWindowSize] = useState([
    window.innerWidth,
    window.innerHeight,
  ]);
  useEffect(() => {
    const handleWindowResize = () => {
      setWindowSize([window.innerWidth, window.innerHeight]);
    };
    const handleMouseMove = (event) => {
      setMousePos({ x: event.clientX, y: event.clientY });
      // top-right
      if (
        event.clientX > windowSize[0] / 2 &&
        event.clientY < windowSize[1] / 2
      ) {
        setMousePos({
          x: event.clientX - windowSize[0] / 2 + 240,
          y: event.clientY,
        });
      }
      //bottom-right
      else if (
        event.clientX > windowSize[0] / 2 &&
        event.clientY > windowSize[1] / 2
      ) {
        setMousePos({
          x: event.clientX - windowSize[0] / 2 + 240,
          y: event.clientY - 380,
        });
      }
      //bottom-left
      else if (
        event.clientX < windowSize[0] / 2 &&
        event.clientY > windowSize[1] / 2
      ) {
        setMousePos({
          x: event.clientX,
          y: event.clientY - windowSize[1] / 2 - 15,
        });
      }
    };
    window.addEventListener("resize", handleWindowResize);
    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("resize", handleWindowResize);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);
  return (
    <div className="manga__item">
      <NavLink
        to="/manga"
        className={({ isActive, isPending }) =>
          isPending ? "pending" : isActive ? "active" : "manga__box"
        }
      >
        <img
          className="manga__pic"
          src="https://coffeemanga.io/wp-content/uploads/2023/06/ad62ce15378fd99681a0a60bd513aca39a0006d2_1991_2864_979585-175x238.jpeg"
        ></img>
      </NavLink>
      <div className="item__about">
        <NavLink
          to="/manga"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "active" : ""
          }
        >
          <h3>The Youngest Princess</h3>
        </NavLink>
        <div className="start__rating">
          <div className="rating__icon">
            <FontAwesomeIcon icon={faStar} className="checked" />
            <FontAwesomeIcon icon={faStar} className="checked" />
            <FontAwesomeIcon icon={faStar} className="checked" />
            <FontAwesomeIcon icon={faStar} className="checked" />
            <FontAwesomeIcon icon={faStar} className="checked" />
          </div>
          <div className="rating__number">(5.0)</div>
        </div>
        <div className="manga__genre">
          <div className="genre__content">
            <span>
              <b>Genre:</b>
            </span>
            <a className="list__genre" href="">
              Action
            </a>
            <span>,</span>
            <a className="list__genre" href="">
              Drama
            </a>
            <span>,</span>
            <a className="list__genre" href="">
              Comedy
            </a>
          </div>
        </div>
          <NavLink
            to="/manga/chapter"
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "active" : "newest_chapter"
            }
          >
            Chapter 1
          </NavLink>
          <span className="chapter__date">7/15/2023</span>
        </div>
      <div className="hover__manga">
        <div
          className="manga__header"
          style={{ left: mousePos.x + 20, top: mousePos.y }}
        >
          <h3>The Youngest Princess</h3>
          <div className="manga__intro">
            <img src="https://coffeemanga.io/wp-content/uploads/2023/06/ad62ce15378fd99681a0a60bd513aca39a0006d2_1991_2864_979585-175x238.jpeg"></img>
            <div className="manga__info">
              <div className="info__text">
                <Rating
                  initialValue={4}
                  ratingValue={4}
                  size={40}
                  label
                  transition
                  fillColor="orange"
                  emptyColor="gray"
                  className="foo" // Will remove the inline style if applied
                />
                {/* Use rating value */}
                <span className="rating__value">{4}</span>
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
              </div>
            </div>
          </div>
          <p>
            <b>Summary</b>
          </p>
          <span>
            In an all-girls school full of jaw-dropping beauties, a male student
            suddenly transfers in!!! Perhaps in the eyes of others, this would
            be a dream-like paradise, but in reality, the future is completely
            unimaginable
          </span>
        </div>
      </div>
    </div>
  );
}
