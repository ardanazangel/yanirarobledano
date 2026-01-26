import React, { useState } from "react";
import "../components/grid.css";

export default function Grid() {
  const [opacity, setOpacity] = useState(.1); // Estado para controlar la opacidad

  const toggleOpacity = () => {
    setOpacity((prevOpacity) => (prevOpacity === 0.1 ? 0 : 0.1));
  };

  return (
    <>
      <div>
        <button
          onClick={toggleOpacity}
          style={{
            top:'100%',
            transform: "translate(-0%, -100%)",
            zIndex:
              "999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999",
              position: "fixed",
          }}
        >
          Toggle Opacity
        </button>
        <div
          className="grid-container"
          style={{ opacity: opacity, transition: "opacity 0.5s ease" }}
        >
          <div className="grid-item"></div>
          <div className="grid-item"></div>
          <div className="grid-item"></div>
          <div className="grid-item"></div>
          <div className="grid-item"></div>
          <div className="grid-item"></div>
          <div className="grid-item"></div>
          <div className="grid-item"></div>
          <div className="grid-item"></div>
          <div className="grid-item"></div>
          <div className="grid-item"></div>
          <div className="grid-item"></div>
        </div>
      </div>
    </>
  );
}
