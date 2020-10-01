import React, { useState } from "react";

const withAuth = (WrappedComponent) => {
  return (props) => {
    const [isAuthorised, setIsAuthorised] = useState(false);
    const toggleAuth = () => {
      setIsAuthorised(!isAuthorised);
    };
    return (
      <WrappedComponent
        kamil="czesc"
        isCollapsed={isAuthorised}
        toggle={toggleAuth}
        {...props}
      />
    );
  };
};

export default withAuth;
