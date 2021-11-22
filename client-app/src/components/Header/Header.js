import React from "react";
import { useHistory } from "react-router";
import { useActions } from "../../hooks";
import rickymorty from "../../assets/rickymorty.png";
import rick from "../../assets/rick.png";

import "./Header.css";

function Header() {
  const { logout } = useActions();
  const history = useHistory();
  const username = localStorage.getItem("username");

  const handleLogout = () => {
    logout(history);
  };

  return (
    <nav className="header">
      <div>
        <img
          data-testid="image"
          src={rickymorty}
          alt="rick"
          className="image-header-first"
        />
      </div>
      <div>
        <span>Welcome {username}</span>
      </div>
      <div>
        <img
          data-testid="image"
          src={rick}
          alt="rick"
          className="image-header-last"
        />
      </div>
      <div>
        <button className="login-btn" onClick={handleLogout}>
          Log out
        </button>
      </div>
    </nav>
  );
}

export default Header;
