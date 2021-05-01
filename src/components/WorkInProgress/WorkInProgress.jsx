import React from "react";
import classes from "./WorkInProgress.module.scss";
import Navbar from "../Navbar/Navbar";
import Sidebar from "../Sidebar/Sidebar";

function WorkInProgress() {
  return (
    <>
      <Navbar />
      <Sidebar />
      <div className={classes.WorkInProgress}>
        <h1>
          Sorry! <br />
          Work In Progress
        </h1>
      </div>
    </>
  );
}

export default WorkInProgress;
