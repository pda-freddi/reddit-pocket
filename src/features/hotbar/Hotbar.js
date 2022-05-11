import React from "react";
import HotIcon from "../../icons/fire.png";
import TopVotedIcon from "../../icons/top-voted.png";
import RisingIcon from "../../icons/trending-up.png";
import NewIcon from "../../icons/new.png";
import styles from "./Hotbar.module.css";

const Hotbar = () => {
  return (
    <article className={styles.hotbarContainer}>
      <section className="hot">
        <img src={HotIcon} alt="fire icon" className={styles.icon} />
        <a href="/" className={styles.link}>Hot</a>
      </section>

      <section className="topVoted">
        <img src={TopVotedIcon} alt="top voted icon" className={styles.icon} />
        <a href="/" className={styles.link}>Top Voted</a>
      </section>

      <section className="rising">
        <img src={RisingIcon} alt="rising up arrow" className={styles.icon} />
        <a href="/" className={styles.link}>Rising</a>
      </section>

      <section className="new">
        <img src={NewIcon} alt="new icon" className={styles.icon} />
        <a href="/" className={styles.link}>Recent</a>
      </section>
    </article>
  );
};

export default Hotbar;