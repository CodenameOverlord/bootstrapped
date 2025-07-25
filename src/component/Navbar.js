import React from "react";
import PropTypes from "prop-types";
// import { Link } from "react-router-dom";

export default function Navbar(props) {
  return (
    <>
      <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            {props.title}
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <a className="nav-link" href="#">
                  {props.homeText}
                </a>
              </li>
              {/* <li className="nav-item">
                <a className="nav-link" href="/about">
                  About
                </a>
              </li> */}
            </ul>
            {/* <form className="form-inline d-flex">
            <input
              className="form-control mr-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-success" type="submit">
              Search
            </button>
          </form> */}

            <div className={`form-check form-switch text-${props.mode=== 'light' ? 'dark' : 'light'}`}>
              <input
                className="form-check-input"
                type="checkbox"
                role="switch"
                id="switchCheckDefault"
                onClick={props.toggleMode}
              />
              <label className="form-check-label" onClick={props.toggleMode}
              htmlFor="switchCheckDefault" >
                Enable {props.mode==='light'?'dark':'light'} Mode
              </label>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  homeText: PropTypes.string,
};

Navbar.defaultProps = {
  title: "Set Title Here",
  homeText: "Home",
  AboutText: "About Us",
};
