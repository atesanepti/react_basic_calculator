import React from "react";

const Keyswitch = ({ handleClick, equal, allClear, cancel }) => {
  return (
    <div className="switch">
      <button
        value="c"
        className="btn x functional"
        onClick={(e) => allClear()}
      >
        C
      </button>
      <button value="x" className="btn functional" onClick={(e) => cancel()}>
        X
      </button>
      <button
        value="/"
        className="btn functional"
        onClick={(e) => handleClick(e)}
      >
        /
      </button>
      <button
        value="*"
        className="btn functional"
        onClick={(e) => handleClick(e)}
      >
        *
      </button>

      <button value="7" className="btn" onClick={(e) => handleClick(e)}>
        7
      </button>
      <button value="8" className="btn" onClick={(e) => handleClick(e)}>
        8
      </button>
      <button value="9" className="btn" onClick={(e) => handleClick(e)}>
        9
      </button>
      <button
        value="-"
        className="btn functional"
        onClick={(e) => handleClick(e)}
      >
        -
      </button>

      <button value="4" className="btn" onClick={(e) => handleClick(e)}>
        4
      </button>
      <button value="5" className="btn" onClick={(e) => handleClick(e)}>
        5
      </button>
      <button value="6" className="btn" onClick={(e) => handleClick(e)}>
        6
      </button>
      <button
        value="+"
        className="btn functional"
        onClick={(e) => handleClick(e)}
      >
        +
      </button>

      <button value="1" className="btn" onClick={(e) => handleClick(e)}>
        1
      </button>
      <button value="2" className="btn" onClick={(e) => handleClick(e)}>
        2
      </button>
      <button value="3" className="btn" onClick={(e) => handleClick(e)}>
        3
      </button>
      <button
        value="="
        className="btn functional equal"
        onClick={(e) => {
          handleClick(e);
          equal();
        }}
      >
        =
      </button>

      <button value="%" className="btn" onClick={(e) => handleClick(e)}>
        %
      </button>
      <button value="0" className="btn" onClick={(e) => handleClick(e)}>
        0
      </button>
      <button value="." className="btn" onClick={(e) => handleClick(e)}>
        .
      </button>
    </div>
  );
};

export default Keyswitch;
