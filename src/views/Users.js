import React, { useState, useRef, useEffect } from "react";
import cx from "classnames";
import { useDetectOutsideClick } from "../hooks/useDetectOutsideClick";

const Users = () => {
  const [isModalOpen, setIsModalActive] = useState(false);
  const modalRef = useRef(null);
  useDetectOutsideClick(modalRef, setIsModalActive);

  return (
    <div>
      <h2 className="title is-3">Users</h2>
      <button
        className="button is-primary"
        onClick={() => setIsModalActive(true)}
      >
        Open modal
      </button>
      <div className={cx("modal", { "is-active": isModalOpen })}>
        <div className="modal-background" />
        <div ref={modalRef} className="modal-content">
          <article className="message">
            <div className="message-header">
              <p>Hello World!</p>
              <button
                className="delete"
                aria-label="delete"
                onClick={() => setIsModalActive(false)}
              />
            </div>
            <div className="message-body">
              Fugiat non qui nostrud officia adipisicing quis voluptate irure
              adipisicing
              <strong>
                Ex exercitation enim dolor elit consequat deserunt commodo enim
                anim nulla. Voluptate nisi eiusmod adipisicing adipisicing qui
                mollit ut quis. Elit ea eiusmod fugiat dolor irure enim esse
                magna occaecat. Irure tempor magna dolore magna incididunt.
              </strong>
            </div>
          </article>
        </div>
      </div>
    </div>
  );
};

export default Users;
