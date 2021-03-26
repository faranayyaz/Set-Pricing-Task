import React, { useState } from "react";
import ScheduleTable from "./scheduleTable";
import TopBar from "../utils/topBar";
import "../style.css";

const Body = ({ rows, setRows }) => {
  const myStyles = {
    root: {
      fontSize: "13px",
      maxWidth: "1150px",
      margin: "0 auto",
    },
    pos: {
      marginTop: "60px",
    },
    h2: {
      fontWeight: "normal",
      margin: "13px 0px",
      display: "inline-block",
    },
    button: {
      margin: "0px 20px 0px 10px",
      backgroundColor: "#e7e7e7",
      padding: "10px 15px",
      fontSize: "9px",
      width: "110px",
      color: "#2d2d2e",
    },
  };

  return (
    <div style={myStyles.root}>
      <TopBar rows={rows} setRows={setRows} />
      <ScheduleTable rows={rows} setRows={setRows} />
    </div>
  );
};

export default Body;
