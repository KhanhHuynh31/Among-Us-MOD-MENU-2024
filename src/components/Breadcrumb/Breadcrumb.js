import React from "react";
import { NavLink } from "react-router-dom";
import "./Breadcrumb.css";

export default function Breadcrumb() {
  return (
    <div className="page__breadcrumb">
      <ul>
        <li>
          <NavLink
            to="/home"
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "active" : ""
            }
          >
            Home
          </NavLink>
        </li>
        <span>/</span>
        <li>
          <NavLink
            to="/manga"
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "active" : ""
            }
          >
            Manga
          </NavLink>
        </li>
        <span>/</span>
        <li>
          <NavLink
            to="/manga/chapter"
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "active" : ""
            }
          >
            Chapter
          </NavLink>
        </li>
      </ul>
    </div>
  );
}
