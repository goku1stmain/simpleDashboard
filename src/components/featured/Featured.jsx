import React from "react";
import "./Featured.scss";
import MoreVertOutlinedIcon from "@mui/icons-material/MoreVertOutlined";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
const Featured = () => {
  return (
    <div className="featured">
      <div className="top">
        <h1 className="title">Total revenue</h1>
        <MoreVertOutlinedIcon fontSize="small" />
      </div>
      <div className="Bottom">
        <div className="featuredChart">
          <CircularProgressbar value={70} text={`70%`} strokeWidth={3} />;
        </div>
        <p className="title">Total sales made today</p>
        <p className="amount">$420</p>
        <p className="desc">
          Previous Transaction processing. Last payments may not be included
        </p>
      </div>
    </div>
  );
};

export default Featured;
