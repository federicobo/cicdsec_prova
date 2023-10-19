import React from "react";

const SomeNastyComponent = () => {
  const nastyFunction = () => {
    return 0 / 0;
  };
  return <div onClick={nastyFunction}>this is it</div>;
};

export default SomeNastyComponent;
