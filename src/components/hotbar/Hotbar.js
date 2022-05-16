import React from "react";
import { Link, useLocation } from "react-router-dom";
import { buildLinkPath } from "../../utils/buildLinkPath.js";
import HotIcon from "../../icons/fire.png";
import TopVotedIcon from "../../icons/top-voted.png";
import RisingIcon from "../../icons/trending-up.png";
import NewIcon from "../../icons/new.png";
import styles from "./Hotbar.module.css";

const Hotbar = () => {
  const { pathname } = useLocation();

  return (
    <article className={styles.hotbarContainer}>
      <section className="hot">
        <img src={HotIcon} alt="fire icon" className={styles.icon} />
        <Link to={buildLinkPath(pathname, "hot")} className={styles.link}>Hot</Link>
      </section>

      <section className="topVoted">
        <img src={TopVotedIcon} alt="top voted icon" className={styles.icon} />
        <Link to={buildLinkPath(pathname, "top")} className={styles.link}>Top Voted</Link>
      </section>

      <section className="rising">
        <img src={RisingIcon} alt="rising up arrow" className={styles.icon} />
        <Link to={buildLinkPath(pathname, "rising")} className={styles.link}>Rising</Link>
      </section>

      <section className="new">
        <img src={NewIcon} alt="new icon" className={styles.icon} />
        <Link to={buildLinkPath(pathname, "new")} className={styles.link}>Recent</Link>
      </section>
    </article>
  );
};

export default Hotbar;