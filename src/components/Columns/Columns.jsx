import React from "react";
import cx from "classnames";
import styles from "./Column.module.scss";
import Collapse from "../../providers/Collapse";
import Authorisation from "../../providers/Authorisation";

const Columns = () => {
  const columnsClass = (isCollapsed) =>
    cx("columns", styles.list, {
      [styles.isCollapsed]: isCollapsed,
    });

  return (
    <Collapse
      render={({ toggle, isCollapsed }) => (
        <Authorisation
          render={({ isAuthorised }) => (
            <div className="columns">
              <div className="column">
                <button className="button is-dark is-large" onClick={toggle}>
                  Collapse
                </button>
                <h2>{isAuthorised.toString()}</h2>
                <div className={columnsClass(isCollapsed)}>
                  <div className="column">
                    <div className="notification is-primary">First Column</div>
                  </div>
                  <div className="column">
                    <div className="notification is-primary">Second Column</div>
                  </div>
                  <div className="column">
                    <div className="notification is-primary">Third Column</div>
                  </div>
                  <div className="column">
                    <div className="notification is-primary">Fourth Column</div>
                  </div>
                </div>
              </div>
            </div>
          )}
        />
      )}
    />
  );
};

export default Columns;
