import React from "react";
import { Link } from "react-router-dom";
import RedditLogo from "../../icons/reddit.png";
import GitHubLogo from "../../icons/github.png";
import Searchbar from "../../features/searchbar/Searchbar.js";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.headerContainer}>
        <Link to="/" className={styles.homeLink}>
          <img className={styles.logo} src={RedditLogo} alt="Reddit logo" />
          <span className={styles.appName}>reddit pocket</span>
        </Link>
        <Searchbar />
        <a href="https://github.com/Pedro-Freddi/reddit-pocket" target="_blank" rel="noreferrer">
          <img className={styles.gitHubLogo} src={GitHubLogo} alt="GitHub logo" />
        </a>
      </div>
    </header>
  );
};

export default Header;

