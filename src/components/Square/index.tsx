import * as React from "react";

interface Props {
  r?: number;
  g?: number;
  b?: number;
}

const Square: React.FC<Props> = ({ r, g, b }) => {
  return (
    <div className="square-wrapper">
      <div
        className="square"
        style={{ backgroundColor: `rgb(${r}, ${g}, ${b})` }}
      ></div>
      <p style={{color: `rgb(${r}, ${g}, ${b})`}}>{`rgb(${r}, ${g}, ${b})`}</p>
    </div>
  );
};

export default Square;
