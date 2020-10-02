import React, { useRef } from "react";

const UseEffectPractice = () => {
  const myInputRef = useRef(null);

  const handleClick = () => {
    myInputRef.current.focus();
  };

  return (
    <div>
      <h2>useRef</h2>
      <input ref={myInputRef} />
      <button onClick={handleClick}>focus input</button>
    </div>
  );
};
export default UseEffectPractice;
