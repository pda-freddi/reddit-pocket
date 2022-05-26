import React, { useEffect, useState } from "react";
import topArrowIcon from "../../../icons/top-arrow.png";
import styles from "./ScrollTopButton.module.css";

const ScrollTopButton = () => {

  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    const scrollTop = document.documentElement.scrollTop;
    if (scrollTop > 1200) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  };

  const handleClick = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisible);
    return () => {
      window.removeEventListener("scroll", toggleVisible)
    };
  });

  return (
    <>
      { 
        visible ? 
        <button className={styles.scrollTopButton} onClick={handleClick}>
          <img src={topArrowIcon} alt="up arrow" />Top
        </button>
        :
        "" 
      }
    </>
  );
};

export default ScrollTopButton;