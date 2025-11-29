import React from "react";
import FireAnimation from "./FireAnimation";
import "./App.css";

const Cake = () => {
  return (
    <div className="container">
      {/* 蛋糕 + 蠟燭 */}
      <div class="cake-container">
        <div class="cake">
          <div class="candle">
            <div className="fire-container">
              <div className="flame main-flame"></div>
              <div className="flame medium-flame"></div>
              <div className="flame small-flame"></div>
          </div>
          </div>
          <div class="top-layer"></div>
          <div class="middle-layer"></div>
          <div class="bottom-layer"></div>
        </div>
      </div>

      {/* 文字靠右 */}
      <div className="birthday-text">
        <div className="main">生日快樂</div>
        <div className="name">台南國王!!!</div>
      </div>
    </div>
  );
};


export default Cake;
