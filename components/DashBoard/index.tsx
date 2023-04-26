import React from "react";
import DashBoardHeader from "../DashBoardHeader";
import styles from './dashborardWrapper.module.css'

const DashBoard = () => {
  return (
    <div className={styles.dashboard}>
      <DashBoardHeader />
    </div>
  );
};

export default DashBoard;
