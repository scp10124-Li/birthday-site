'use client';

import React, { useEffect, useRef } from "react";
import Head from "next/head";
import Cake from "./Cake.js";
import "./App.css";

export default function App() {
  const trackRef = useRef(null);

  useEffect(() => {
    const track = trackRef.current;
    if (track) {
      const totalWidth = track.scrollWidth / 2;
      track.style.setProperty("--scroll-distance", `-${totalWidth}px`);
    }
  }, []);

  return (
    <div className="app">
      <Head>
        <title>🎂 Happy Birthday 🎉</title>
      </Head>

      {/* 背景影片 */}
      <video
        className="background-video"
        src="/video/IMG_7932.MOV"
        autoPlay
        loop
        muted
      />

      {/* 蛋糕動畫 */}
      <Cake />

      {/* 照片輪播 */}
      <div className="carousel-viewport">
        <div ref={trackRef} className="card-stack">
          {/* 第一組 */}
          <div className="card"><img src="/images/b1.jpg" alt="Photo 1" /></div>
          <div className="card"><img src="/images/b2.jpg" alt="Photo 2" /></div>
          <div className="card"><img src="/images/b3.jpg" alt="Photo 3" /></div>
          <div className="card"><img src="/images/b4.jpg" alt="Photo 4" /></div>
          <div className="card"><img src="/images/b5.jpg" alt="Photo 5" /></div>
          <div className="card"><img src="/images/b6.jpg" alt="Photo 6" /></div>

          {/* 第二組（無縫循環） */}
          <div className="card"><img src="/images/b1.jpg" alt="Photo 1" /></div>
          <div className="card"><img src="/images/b2.jpg" alt="Photo 2" /></div>
          <div className="card"><img src="/images/b3.jpg" alt="Photo 3" /></div>
          <div className="card"><img src="/images/b4.jpg" alt="Photo 4" /></div>
          <div className="card"><img src="/images/b5.jpg" alt="Photo 5" /></div>
          <div className="card"><img src="/images/b6.jpg" alt="Photo 6" /></div>
        </div>
      </div>
    </div>
  );
}
