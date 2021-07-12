import React, { useState } from "react";
import { withRouter } from "react-router";
import { Link } from "react-router-dom";
import Button from "./components/button/button.component";
import { SearchBox } from "./components/search-box/search-box.component";

const Navbar = (props) => {
  // let searchStr = "";
  // const handleChange = (e) => {
  //   searchStr = e.target.value;
  // };

  // const handleSubmit = () => {
  //   props.fun(searchStr);
  // };
  let [searchText, setSearchText] = useState("");

  // let searchText = ''
  const handleSearchText = (e) => {
    setSearchText(e.target.value);

    console.log("target value", searchText);
  };

  const searching = () => {
    console.log("search text here", searchText);
    props.history.push("/search?q="+searchText);

    console.log("props history", props.history);
    // props.fun(searchText);
  };
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a class="navbar-brand" href="#">
        Navbar
      </a>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item active">
            <a class="nav-link" href="#">
              Home <span class="sr-only">(current)</span>
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">
              Link
            </a>
          </li>
          <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle"
              href="#"
              id="navbarDropdown"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Dropdown
            </a>
            <div class="dropdown-menu" aria-labelledby="navbarDropdown">
              <a class="dropdown-item" href="#">
                Action
              </a>
              <a class="dropdown-item" href="#">
                Another action
              </a>
              <div class="dropdown-divider"></div>
              <a class="dropdown-item" href="#">
                Something else here
              </a>
            </div>
          </li>
          <li class="nav-item">
            <a class="nav-link disabled" href="#">
              Disabled
            </a>
          </li>
        </ul>
        {/* <form class="form-inline my-2 my-lg-0"> */}
        <input
          onChange={handleSearchText}
          // placeholder={placeHolder}
          // type={type}
          // className={style}
          // type={type}
          // placeholder={placeHolder}
        />
        <button onClick={searching}>
          Search
        </button>
        <Button style="btn btn-danger">login</Button>
        {/* </form> */}
      </div>
    </nav>
  );
};

export default withRouter(Navbar);
