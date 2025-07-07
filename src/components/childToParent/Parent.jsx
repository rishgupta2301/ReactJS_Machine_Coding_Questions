import React, { useState } from "react";
import Child from "./Child";

const Parent = () => {
  const [dataFromChild, setDataFromChild] = useState("");

  const handleDataFromChild = (data) => {
    setDataFromChild(data);
  };

  return (
    <div>
      <div>
        <h2>Parent data: {dataFromChild}</h2>
      </div>
      <div>
        <h3>Child data: {dataFromChild}</h3>
        <Child handleDataFromChild={handleDataFromChild} />
      </div>
    </div>
  );
};

export default Parent;
