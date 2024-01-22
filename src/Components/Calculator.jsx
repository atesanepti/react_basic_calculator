import React, { useEffect, useState } from "react";
import Display from "./Display";
import Keyswitch from "./Keyswitch";

const Calculator = () => {
  const [currentData, setCurrentData] = useState("");
  const handleClick = (e) => {
    let value = e.target.value;
    if (value === "=") return;
    setCurrentData((preState) => {
      return preState + value;
    });
  };
  const equal = () => {
    let output = eval(currentData);
    setCurrentData(output.toString());
  };

  const allClear = () => {
    setCurrentData("");
  };
  const cancel = () => {
    setCurrentData((preState) => {
      let cutedExper = preState.slice(0, preState.length - 1);
      return cutedExper;
    });
  };
  return (
    <div className="calculator-area">
      <Display currentData={currentData} />
      <Keyswitch
        handleClick={handleClick}
        equal={equal}
        allClear={allClear}
        cancel={cancel}
      />
    </div>
  );
};

export default Calculator;
