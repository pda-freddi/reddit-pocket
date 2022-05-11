import React from "react";
import RedditLogo from "../../icons/reddit.png";
import GitHubLogo from "../../icons/github.png";
import SearchBar from "../../features/searchBar/SearchBar.js";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.headerContainer}>
          <img className={styles.logo} src={RedditLogo} alt="Reddit logo" />
          <span className={styles.appName}>reddit pocket</span>
        <SearchBar />
        <a href="https://github.com/Pedro-Freddi/reddit-pocket" target="_blank" rel="noreferrer">
          <img className={styles.gitHubLogo} src={GitHubLogo} alt="GitHub logo" />
        </a>
      </div>
    </header>
  );
};

export default Header;
