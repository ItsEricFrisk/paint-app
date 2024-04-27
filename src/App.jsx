import { useState, useRef } from "react";
import "./App.css";
import Sidebar from "./components/sidebar/Sidebar";

function App() {
  const canvasRef = useRef(null);
  const [isPainting, setIsPainting] = useState(false);
  const [size, setSize] = useState(1);

  const startPaint = (e) => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    ctx.beginPath();
    ctx.moveTo(e.clientX, e.clientY);
    setIsPainting(true);
  };

  const paint = (e) => {
    if (isPainting) {
      const canvas = canvasRef.current;
      const ctx = canvas.getContext("2d");
      ctx.lineTo(e.clientX, e.clientY);
      ctx.stroke();
    }
  };

  const endPaint = () => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    ctx.closePath();
    setIsPainting(false);
  };

  const resetPaint = () => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    setIsPainting(false);
  };

  const changeSizeUp = () => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    setSize((size) => size + 1);
    ctx.lineWidth = size;
  };

  const changeSizeDown = () => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    setSize((size) => size - 1);
    ctx.lineWidth = size;
  };

  const changeColor = (newColor) => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    ctx.strokeStyle = newColor;
  };

  return (
    <>
      <canvas
        ref={canvasRef}
        width={window.innerWidth}
        height={window.innerHeight}
        onMouseDown={startPaint}
        onMouseMove={paint}
        onMouseUp={endPaint}
        onMouseLeave={endPaint}
      />

      <Sidebar
        resetBtn={resetPaint}
        addSize={changeSizeUp}
        penSize={size}
        removeSize={changeSizeDown}
        changeColor={changeColor}
      />
    </>
  );
}

export default App;
