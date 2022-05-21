import React from "react";
import { useNavigate } from "react-router-dom";
import leftArrowIcon from "../../../icons/left-arrow.png";
import styles from "./BackButton.module.css";

const BackButton = () => {

  const navigate = useNavigate();

  return (
    <button className={styles.backButton} onClick={() => navigate(-1)}>
      <img src={leftArrowIcon} alt="previous icon" />Back
    </button>
  );
};

export default BackButton;