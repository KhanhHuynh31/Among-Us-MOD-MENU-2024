import React from "react";
import "./Home.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import MangaItem from "../../components/MangaItem/MangaItem";
import MangaMenu from "../../components/MangaMenu/MangaMenu";

import { Pagination } from "swiper/modules";

export default function Home() {
  const renderSlide = () => {
    return (
      <SwiperSlide>
        <div className="slide__content">
          <img
            className="slide__img"
            src={"https://yae.hifive03.com/assets/img/manga_banner/banner1.jpg"}
            alt="slide_image"
          />
          <div className="slide__info">
            <p className="slide__tag">Discuss</p>
            <h3>Title blog content</h3>
            <p className="slide__author">Created by Khanh</p>
          </div>
        </div>
      </SwiperSlide>
    );
  };
  return (
    <div className="home__page">
      <div className="season__content">
        <div className="season__news">
          <p className="news__label">Update News</p>
          <div className="news_race">
            <div className="news__runner">
              <p className="news__title">Latest News:</p>
              <span>newwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww</span>
            </div>
          </div>
        </div>
        <div className="season__main">
          <div className="season__left">
            <div className="season__banner">
              <Swiper
                loop={true}
                slidesPerView={"auto"}
                pagination={{ el: ".swiper-pagination", clickable: true }}
                modules={[Pagination]}
                className="swiper_container"
              >
                {renderSlide()}
                {renderSlide()}
                {renderSlide()}
                <div className="">
                  <div className="swiper-pagination"></div>
                </div>
              </Swiper>
            </div>

          </div>
          <div className="season__release">
            <div className="header__title">
              <h3>Recent release</h3>
            </div>
            {MangaItem()}
            {MangaItem()}
          </div>
        </div>
      </div>
      <div className="season__line"></div>
      {MangaMenu()}
    </div>
  );
}
