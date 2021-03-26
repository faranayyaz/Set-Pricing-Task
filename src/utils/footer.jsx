import React from "react";
import Button from "@material-ui/core/Button";

const Footer = ({ rows }) => {
  const myStyles = {
    root: {
      backgroundColor: "black",
      position: "fixed",
      bottom: "0",
      height: "45px",
      width: "100%",
      textAlign: "center",
      margin: "0 auto",
    },
    pos: {
      display: "inline-block",
      margin: "10px 0px 0px 200px",
    },
    textStyle: {
      color: "white",
      textAlign: "center",
      fontSize: "12px",
      float: "right",
      margin: "15px 10px",
    },
    textStyle2: {
      color: "grey",
      fontSize: "13px",
    },
    textStyle3: {
      color: "white",
      fontSize: "13px",
    },
    button: {
      backgroundColor: "#3cb371",
      border: "1px white solid",
      color: "white",
      fontSize: "10px",
      padding: "6px 20px 6px 20px",
      margin: "7px 90px 6px 7px",
      float: "right",
    },
  };

  const count = () => {
    let c = 0;
    rows.map((row) => {
      if (row.state2) c++;
      if (row.state3) c++;
      if (row.state4) c++;
    });
    return c;
  };

  return (
    <div style={myStyles.root}>
      <div style={myStyles.pos}>
        <text style={myStyles.textStyle3}>Select-matches and feeds </text>
        <text style={myStyles.textStyle2}>{">"} Set Pricing</text>
      </div>
      <Button style={myStyles.button} disabled={count() === 0}>
        Next {">"}
      </Button>
      <text style={myStyles.textStyle}>{count()} Matches Selected</text>
    </div>
  );
};

export default Footer;
