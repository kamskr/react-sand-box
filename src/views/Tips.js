import React, { useRef, useState } from "react";
import { useDetectOutsideClick } from "../hooks/useDetectOutsideClick";

const Tips = () => {
  const [isTooltipOpen, setIsTooltipOpen] = useState(false);
  const tooltipRef = useRef(null);

  useDetectOutsideClick(tooltipRef, setIsTooltipOpen);

  return (
    <div>
      <h2 className="title is-3">Tips</h2>
      <button
        className="button is-large is-primary"
        onClick={() => setIsTooltipOpen(!isTooltipOpen)}
      >
        Open tooltip
      </button>
      {isTooltipOpen && (
        <div ref={tooltipRef} className="notification is-primary">
          Anim eiusmod dolor voluptate sunt. Ex sunt voluptate ut adipisicing ea
          laboris in elit mollit nostrud do duis veniam occaecat. Exercitation
          exercitation cillum eiusmod cillum aute anim officia eiusmod aute anim
          officia eiusmod nostrud id. Velit eu minim dolor labore. Culpa dolore
          anim consectetur excepteur culpa duis.
        </div>
      )}
    </div>
  );
};

export default Tips;
