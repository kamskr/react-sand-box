import React, { useContext } from "react";
import * as MultiStep from "../components/MultiStep/MultiStep";

const MyContext = React.createContext();

const User = () => {
  const context = useContext(MyContext);
  return (
    <div>
      <p>User name: {context.name}</p>
    </div>
  );
};

const Compound = () => (
  <div>
    <MyContext.Provider value={{ name: "Kamil" }}>
      <h2 className="title is-3">Compound</h2>
      <User />
      <MultiStep.Wizard>
        <MultiStep.Page pageIndex={1}>
          <div>
            Helloo <div>and welcome</div>
          </div>
        </MultiStep.Page>
        <MultiStep.Page pageIndex={2}>Page 2</MultiStep.Page>
        <MultiStep.Page pageIndex={3}>Page 3</MultiStep.Page>
        <MultiStep.Controls />
        <MultiStep.ProgressBar />
      </MultiStep.Wizard>
    </MyContext.Provider>
  </div>
);

export default Compound;
