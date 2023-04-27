import React, { useState } from "react";
import styles from "./dashboardHeader.module.css";
import Chart from "../Chart";

const DashBoardHeader = () => {
  const [active, setActive] = useState("5");

  const handleActive = (e: any) => {
    setActive(e.target.id);
  };
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
        <p
          id="1"
          className={active === "1" ? styles.dashDayR : styles.dashDayP}
          onClick={handleActive}
        >
          1 Day
        </p>
        <p
          id="2"
          className={active === "2" ? styles.dashDayR : styles.dashDayP}
          onClick={handleActive}
        >
          3 Day
        </p>
        <p
          id="3"
          className={active === "3" ? styles.dashDayR : styles.dashDayP}
          onClick={handleActive}
        >
          7 Day
        </p>
        <p
          id="4"
          className={active === "4" ? styles.dashDayR : styles.dashDayP}
          onClick={handleActive}
        >
          30 Day
        </p>
        <p
          id="5"
          className={active === "5" ? styles.dashDayR : styles.dashDayP}
          onClick={handleActive}
        >
          All Time
        </p>
        <p
          id="6"
          className={active === "6" ? styles.dashDayR : styles.dashDayP}
          onClick={handleActive}
        >
          Custom Date
        </p>
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
        <p
          style={{
            margin: 0,
            color: "#131316",
            fontSize: "48px",
            fontWeight: "bold",
          }}
        >
          500
        </p>
        <Chart />
      </div>
    </div>
  );
};

export default DashBoardHeader;