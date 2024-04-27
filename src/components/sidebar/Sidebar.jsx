import "./Sidebar.css";

export default function Sidebar({
  resetBtn,
  addSize,
  penSize,
  removeSize,
  changeColor,
}) {
  return (
    <div className="container">
      <button className="reset-button" onClick={resetBtn}>
        Clear painting
      </button>
      <p className="pen-size">Change size</p>
      <div className="size-container">
        <button className="small-size btn-size" onClick={removeSize}>
          -1
        </button>
        <p className="current-size">{penSize}</p>
        <button className="large-size btn-size" onClick={addSize}>
          +1
        </button>
      </div>
      <p className="color">Pick a color</p>
      <div className="color-container">
        <button
          className="color-palette black"
          onClick={() => changeColor("black")}
        >
          Black
        </button>
        <button
          className="color-palette red"
          onClick={() => changeColor("red")}
        >
          Red
        </button>
        <button
          className="color-palette blue"
          onClick={() => changeColor("blue")}
        >
          Blue
        </button>
        <button
          className="color-palette green"
          onClick={() => changeColor("green")}
        >
          Green
        </button>
        <button
          className="color-palette orange"
          onClick={() => changeColor("orange")}
        >
          Orange
        </button>
        <button
          className="color-palette yellow"
          onClick={() => changeColor("yellow")}
        >
          yellow
        </button>
      </div>
    </div>
  );
}
