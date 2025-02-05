import React from "react";

const keys = [
  "QWERTYUIOP",
  "ASDFGHJKL",
  "ZXCVBNM"
];

const Keyboard = ({ onKeyPress, onEnter, onBackspace }) => {
  return (
    <div className="flex flex-col items-center mt-4">
      {keys.map((row, rowIndex) => (
        <div key={rowIndex} className="flex space-x-2 mt-1">
          {row.split("").map((key) => (
            <button
              key={key}
              className="p-2 w-10 h-10 bg-gray-700 text-white rounded uppercase"
              onClick={() => onKeyPress(key)}
            >
              {key}
            </button>
          ))}
        </div>
      ))}
      <div className="flex space-x-2 mt-2">
        <button className="p-2 bg-blue-500 text-white rounded" onClick={onEnter}>
          Enter
        </button>
        <button className="p-2 bg-red-500 text-white rounded" onClick={onBackspace}>
          ⌫
        </button>
      </div>
    </div>
  );
};

export default Keyboard;
