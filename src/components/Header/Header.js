import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { LangContext } from "../../context";

const Header = () => {
  const context = useContext(LangContext);

  return (
    <section className="hero is-primary">
      <div className="hero-head">
        <nav className="navbar">
          <div className="navbar-end">
            <button
              className="button is-medium is-primary"
              onClick={() => context.setLanguage("pl")}
            >
              PL
            </button>
            <button
              className="button is-medium is-primary"
              onClick={() => context.setLanguage("en")}
            >
              EN
            </button>
          </div>
        </nav>
      </div>
      <div className="hero-body">
        <div className="container has-text-centered">
          <h1 className="title">The magic of React</h1>
          <h2 className="subtitle">advanced course</h2>
        </div>
      </div>
      <p>current language: {context.currentLanguage}</p>
      <div className="hero-foot">
        <nav className="tabs">
          <div className="container">
            <ul>
              <li>
                <NavLink to="/">Docs</NavLink>
              </li>
              <li>
                <NavLink to="/tips">Tips</NavLink>
              </li>
              <li>
                <NavLink to="/patterns">Patterns</NavLink>
              </li>
              <li>
                <NavLink to="/components">Components</NavLink>
              </li>
              <li>
                <NavLink to="/users">Users</NavLink>
              </li>
              <li>
                <NavLink to="/compound">Compound</NavLink>
              </li>
              <li>
                <NavLink to="/axiosTesting">Axios Testing</NavLink>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </section>
  );
};

export default Header;
