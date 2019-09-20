import React from "react";
import { Paper } from '@material-ui/core';


const LeftPane = ({ styles }) => {
  return (
    <div>
      <Paper style={styles.Paper}>Left Pane</Paper>
    </div>
  );
};

export default LeftPane;
