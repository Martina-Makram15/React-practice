import React, { Component, useState } from "react";

const Count = () => {
  const [count, setCount] = useState(0);
  const increaseByOne = (count) => {
    setCount(count + 1);
  };
  const increaseByValue = (value) => {
    for (let i = 0; i < value; i++) {
      setCount((prevState) => prevState + 1);
    }
  };
  return (
    <React.Fragment>
      <div classNme="flex flex-col gap-4">
        <h1>Count</h1>
        <div className="flex gap-8">
          <span>{count}</span>
          <button onClick={() => increaseByOne(count)}>+</button>
          <button onClick={() => increaseByValue(5)}>+5</button>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Count;
