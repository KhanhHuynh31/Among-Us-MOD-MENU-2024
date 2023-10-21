import React, { Fragment } from "react";
import { Outlet } from "react-router-dom";
import BackToTopButton from "../../components/BackToTopButton/BackToTopButton";
import Footer from "./Layout/Footer/Footer";
import Header from "./Layout/Header/Header";
import Scrolling from "../../components/Scrolling/Scrolling";
import Login from "../../pages/Home/Account/Login";

export default function HomeTemplate() {
  return (
    <Fragment>
        <Login />
        <Scrolling/>
      <div className="container">
        <Header />
        <Outlet />
        <BackToTopButton />
      </div>
      <Footer />
    </Fragment>
  );
}
