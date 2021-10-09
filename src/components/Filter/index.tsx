import React from "react";

interface Props {
  r?: number;
  g?: number;
  b?: number;
  rChange(e: React.FormEvent<HTMLInputElement>): void;
  gChange(e: React.FormEvent<HTMLInputElement>): void;
  bChange(e: React.FormEvent<HTMLInputElement>): void;
}

const Filter: React.FC<Props> = ({ r, g, b, rChange, gChange, bChange }) => {
  return (
    <div className="filter-wrapper">
      <div className="filter-checkbox">
        <div className="checkbox-item">
          <input type="checkbox" value={r} onChange={rChange} />
          <p>Red {">"} 50% ;</p>
        </div>
        <div className="checkbox-item">
          <input type="checkbox" value={g} onChange={gChange} />
          <p>Green {">"} 50% ;</p>
        </div>
        <div className="checkbox-item">
          <input type="checkbox" value={b} onChange={bChange} />
          <p>Blue {">"} 50% ;</p>
        </div>
      </div>
    </div>
  );
};

export default Filter;
