import React from "react";
import "./Footer.css";
import faFacebook from "../../../../assets/img/footer/facebook-f.svg";
import faGithub from "../../../../assets/img/footer/github.svg";
import faDiscord from "../../../../assets/img/footer/discord.svg";

export default function Footer() {
  return (
    <>
      <div className="footer__content">
        <div className="footer__intro">
          <h1>Trans Manga</h1>
          <p>
            My blog about create website with ReactJS framework, sharing tips,
            tricks, techniques to build websites. Hope everyone likes my posts
            and applies it successfully.
          </p>
          <div className="footer__socials">
            <a
              href="https://www.facebook.com/huynhkhanh2k/"
              target="_blank"
              rel="noopener noreferrer"
              className="footer__facebook"
            >
              <img className="socials__icon" src={faFacebook}></img>
            </a>
            <a
              href="https://github.com/KhanhHuynh31"
              target="_blank"
              rel="noopener noreferrer"
              className="footer__github"
            >
              <img className="socials__icon" src={faGithub}></img>
            </a>
            <a
              href="https://github.com/KhanhHuynh31"
              target="_blank"
              rel="noopener noreferrer"
              className="footer__github"
            >
              <img className="socials__icon" src={faDiscord}></img>
            </a>
          </div>
        </div>
        <div className="footer__menu">
          <h2>FEATURES</h2>
        </div>

        <div className="footer__contact">
          <h2>CONTACT</h2>
          <p>
            Email:<label> khanhhuynh0318@gmail.com</label>
          </p>
        </div>
      </div>
    </>
  );
}
