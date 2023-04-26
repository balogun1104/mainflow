import React from "react";
import styles from "./dashboardHeader.module.css";
import Chart from "../Chart";

const DashBoardHeader = () => {
  return (
    <div className={styles.dashWrapper}>
      <p className={styles.dash}> Dashboard</p>
      <div className={styles.morning}>
        <p className={styles.morningH}>
          Good morning, Blessing ⛅️ <br />{" "}
          <p className={styles.morningP}>Check out your dashboard summary.</p>
        </p>

        <p style={{ color: "#FF5403" }}>View analytics</p>
      </div>

      <div className={styles.dashDay}>
        <p className={styles.dashDayP}>1 Day</p>
        <p className={styles.dashDayP}>3 Day</p>
        <p className={styles.dashDayP}>7 Day</p>
        <p className={styles.dashDayP}>30 Day</p>
        <p className={styles.dashDayR}>All Time</p>
        <p className={styles.dashDayP}>Custom Date</p>
      </div>

      <div className={styles.dashChartWrapper}>
        <div className={styles.chatTop}>
          <h3 className={styles.dashChartH}>Page Views</h3>
          <img
            src="/info.svg"
            style={{
              width: "15px",
              height: "15px",
              color: "#040404",
              cursor: "pointer",
            }}
          />
        </div>
        <p style={{ margin: 0, color: "#4D5760", fontSize: "14px" }}>
          All Time
        </p>
        <p style={{ margin: 0, color: "#131316", fontSize: "48px", fontWeight: 'bold' }}>500</p>
        <Chart/>
      </div>
    </div>
  );
};

export default DashBoardHeader;
