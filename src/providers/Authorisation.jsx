import { useState } from "react";

const Authorisation = (props) => {
  const [isAuthorised, setIsAuthorised] = useState("Authorised");

  const renderProps = {
    isAuthorised: isAuthorised,
  };

  return props.render(renderProps);
};

export default Authorisation;
