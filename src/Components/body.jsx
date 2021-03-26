import React, { useState } from "react";
import ScheduleTable from "./scheduleTable";
import "../style.css";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import Button from "@material-ui/core/Button";

const calculate = (no) => {
  let arr = [];
  for (let i = no; i <= 40; i += no) {
    arr.push(i);
  }
  return arr;
};

const Body = ({ rows, setRows }) => {
  const [size, setSize] = useState(1);
  const [minutes, setMinutes] = useState(calculate(1));
  const [min, setMin] = useState(1);

  const handleChangeSize = (event) => {
    setSize(event.target.value);
    setMin(event.target.value);
    setMinutes(calculate(event.target.value));
  };

  const handleChangeMin = (event) => {
    setMin(event.target.value);
  };

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
      <div style={myStyles.pos}>
        <h2 style={myStyles.h2}>Select matches and feeds</h2>
        <div style={{ float: "right", margin: "5px 7px 12px 7px" }}>
          <label>Bulk size: </label>
          <Select
            labelId="demo-simple-select-outlined-label"
            id="demo-simple-select-outlined"
            value={size}
            onChange={handleChangeSize}
            label="Size"
            style={{ margin: "0px 10px", fontSize: "10px" }}
          >
            <MenuItem value={1}>1 min</MenuItem>
            <MenuItem value={2}>2 min</MenuItem>
            <MenuItem value={3}>3 min</MenuItem>
            <MenuItem value={4}>4 min</MenuItem>
            <MenuItem value={5}>5 min</MenuItem>
          </Select>
          <label>Minutes Offered: </label>
          <Select
            labelId="demo-simple-select-outlined-label"
            id="demo-simple-select-outlined"
            value={min}
            onChange={handleChangeMin}
            label="Min"
            style={{
              margin: "0px 10px",
              fontSize: "10px",
            }}
          >
            {minutes.map((minute) => {
              return <MenuItem value={minute}>{minute} min</MenuItem>;
            })}
          </Select>
          <Button style={myStyles.button}>Edit Settings</Button>
        </div>
      </div>
      <ScheduleTable rows={rows} setRows={setRows} />
    </div>
  );
};

export default Body;
