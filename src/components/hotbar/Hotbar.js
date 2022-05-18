import React from "react";
import { Link, useLocation } from "react-router-dom";
import { buildLinkPath } from "../../utils/buildLinkPath.js";
import hotIcon from "../../icons/fire.png";
import topVotedIcon from "../../icons/top-voted.png";
import risingIcon from "../../icons/trending-up.png";
import newIcon from "../../icons/new.png";
import styles from "./Hotbar.module.css";

const Hotbar = () => {
  const { pathname } = useLocation();

  return (
    <article className={styles.hotbarContainer}>
      <section className="hot">
        <img src={hotIcon} alt="fire icon" className={styles.icon} />
        <Link to={buildLinkPath(pathname, "hot")} className={styles.link}>Hot</Link>
      </section>

      <section className="topVoted">
        <img src={topVotedIcon} alt="top voted icon" className={styles.icon} />
        <Link to={buildLinkPath(pathname, "top")} className={styles.link}>Top Voted</Link>
      </section>

      <section className="rising">
        <img src={risingIcon} alt="rising up arrow" className={styles.icon} />
        <Link to={buildLinkPath(pathname, "rising")} className={styles.link}>Rising</Link>
      </section>

      <section className="new">
        <img src={newIcon} alt="new icon" className={styles.icon} />
        <Link to={buildLinkPath(pathname, "new")} className={styles.link}>Recent</Link>
      </section>
    </article>
  );
};

export default Hotbar;