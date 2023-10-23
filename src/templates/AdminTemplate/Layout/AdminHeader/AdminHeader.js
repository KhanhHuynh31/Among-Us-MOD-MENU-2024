import React, { useState } from "react";
import "./AdminHeader.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useTranslation } from 'react-i18next';
import { faHouse, faBook, faBookOpen } from '@fortawesome/free-solid-svg-icons'
import { NavLink } from "react-router-dom";

export default function AdminHeader() {
  const { t, i18n } = useTranslation();
  const [language, setLanguage] = useState("en");

  const handleChange = (value) => {
    i18n.changeLanguage(value);
    setLanguage(value);
  }
  return (
    <div className='admin__top'>
      <div className='language__content'>
        <div className="header__icon">
          <div className="icon__admin">
            <NavLink to="/" className={({ isActive }) => "admin__link" + (isActive ? " active" : "")}><FontAwesomeIcon icon={faHouse} /><span className="link__text"> {t("home")}</span> </NavLink>
            <NavLink to="manage-post" className={({ isActive }) => "admin__link" + (isActive ? " active" : "")}><FontAwesomeIcon icon={faBook} /><span className="link__text"> {t("posting")}</span> </NavLink>
            <NavLink to="list-post" className={({ isActive }) => "admin__link" + (isActive ? " active" : "")}><FontAwesomeIcon icon={faBookOpen} /><span className="link__text"> {t("list post")}</span> </NavLink>
          </div>
        </div>
        <div>
          <a className={language === "vn" ? 'active' : null} onClick={() => handleChange("vn")}>VN</a>
          <label> / </label>
          <a className={language === "en" ? 'active' : null} onClick={() => handleChange("en")}>EN</a>
        </div>

      </div>
    </div>
  )
}
