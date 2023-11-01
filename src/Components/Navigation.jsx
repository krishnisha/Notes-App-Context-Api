import React from "react";
import { NavLink } from "react-router-dom";
import archive from "../Assets/archive.svg";
import search from "../Assets/search.svg";
import bin from "../Assets/bin.svg";
import description from "../Assets/description.svg";
import home from "../Assets/home.svg";
import task_alt from "../Assets/task_alt.svg";

function Navigation() {
  return (
    <div className="Nav-links">
      <NavLink className="link-name" to="/" exact>
        <img
          src={home}
          alt="home"
          className="home-icon"
          style={{ width: "32px", height: "32px" }}
        />{" "}
        Home
      </NavLink>

      <NavLink className="link-name" to="/search">
        <img
          src={search}
          alt="search"
          className="search-icon"
          style={{ width: "32px", height: "32px" }}
        />{" "}
        Search
      </NavLink>

      <NavLink className="link-name" to="/notes">
        <img
          src={description}
          alt="description"
          className="description-icon"
          style={{ width: "32px", height: "32px" }}
        />{" "}
        Notes
      </NavLink>

      <NavLink className="link-name" to="/tasks">
        <img
          src={task_alt}
          alt="task_alt"
          className="task_alt-icon"
          style={{ width: "32px", height: "32px" }}
        />{" "}
        Tasks
      </NavLink>

      <NavLink className="link-name" to="/archive">
        <img
          src={archive}
          alt="archive"
          className="archive-icon"
          style={{ width: "32px", height: "32px" }}
        />{" "}
        Archive
      </NavLink>

      <NavLink className="link-name" to="/bin">
        <img
          src={bin}
          alt="bin"
          className="bin-icon"
          style={{ width: "32px", height: "32px" }}
        />{" "}
        Bin
      </NavLink>
    </div>
  );
}

export default Navigation;
