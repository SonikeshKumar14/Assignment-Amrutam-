import { useState } from "react";

export default function SwitchButton({On, setOff}) {
  return (
      <button className={`toggle-btn ${On ? "toggled" : ""}`} onClick={() => setOff(!On)}>
        <div className="thumb"></div>
      </button>
  );
}