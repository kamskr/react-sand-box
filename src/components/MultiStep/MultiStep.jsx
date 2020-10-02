import React, { useState, useContext, useEffect } from "react";

const WizardContext = React.createContext({
  currentPage: 1,
  changePage: () => {},
  pageIndex: [],
  updatePageIndexes: () => {},
});

const Page = ({ children, pageIndex }) => {
  const { changePage, currentPage, updatePageIndexes } = useContext(
    WizardContext
  );

  useEffect(() => {
    updatePageIndexes(pageIndex);
  });

  return currentPage === pageIndex ? children : null;
};

const ProgressBar = () => {
  const { currentPage, pageIndexes } = useContext(WizardContext);

  return (
    <div
      style={{
        width: "100%",
        height: "20px",
        background: "grey",
        borderRadius: "10px",
      }}
    >
      <div
        style={{
          width: "100%",
          height: "20px",
          backgroundColor: "blue",
          borderRadius: "10px",
          transition: "transform .5s ease-out",
          transform: `scaleX(${currentPage / pageIndexes.length})`,
          transformOrigin: "0% 50%",
        }}
      ></div>
    </div>
  );
};

const Controls = () => {
  const { currentPage, changePage, pageIndexes } = useContext(WizardContext);
  return (
    <div>
      <button
        disabled={currentPage === 1}
        onClick={() => changePage(currentPage - 1)}
      >
        Previous
      </button>
      <button
        disabled={currentPage === pageIndexes.length}
        onClick={() => changePage(currentPage + 1)}
      >
        Next
      </button>
      {currentPage === pageIndexes.length ? <button>Submit</button> : null}
    </div>
  );
};

const Wizard = ({ children }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [pageIndexes, setPageIndexes] = useState([]);

  const updatePageIndexes = (pageIndex) => {
    if (pageIndexes.includes(pageIndex)) return;
    setPageIndexes([...pageIndexes, pageIndex]);
  };

  const changePage = (newPageIndex) => {
    setCurrentPage(newPageIndex);
  };

  return (
    <WizardContext.Provider
      value={{
        currentPage,
        changePage,
        pageIndexes,
        updatePageIndexes,
      }}
    >
      {children}
    </WizardContext.Provider>
  );
};

export { Page, Controls, Wizard, ProgressBar };
