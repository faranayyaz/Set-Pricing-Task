import React from "react";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";

const Header = () => {
  const myStyle = {
    root: {
      borderBottom: "1px solid #e7e7e7",
      position: "fixed",
      top: "0px",
      width: "100%",
      height: "50px",
      zIndex: 1,
      backgroundColor: "white",
    },
    icon: {
      backgroundColor: "#e7e7e7",
      borderRadius: "50%",
      padding: "4px",
      color: "disabled",
    },
    position: {
      margin: "10px 0px 0px 80px",
    },
  };

  return (
    <div style={myStyle.root}>
      <div>
        <IconButton
          style={myStyle.position}
          aria-label="close"
          color="inherit"
          size="small"
        >
          <CloseIcon style={myStyle.icon} fontSize="inherit" />
        </IconButton>
      </div>
    </div>
  );
};

export default Header;
