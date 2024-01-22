import React from "react";

const Display = ({ currentData }) => {
  return (
    <div>
      <input
        type="text"
        placeholder="0"
        value={currentData}
        readOnly
        className="display"
      />
    </div>
  );
};

export default Display;
