import { useState } from "react";

const Collapse = (props) => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const toggle = () => {
    setIsCollapsed(!isCollapsed);
  };

  const renderProps = {
    isCollapsed: isCollapsed,
    toggle: toggle,
  };

  return props.render(renderProps);
};

export default Collapse;
