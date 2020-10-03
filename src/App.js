import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Docs from "./views/Docs.js";
import Tips from "./views/Tips.js";
import Users from "./views/Users.js";
import Patterns from "./views/Patterns.js";
import Compound from "./views/Compound.js";
import Components from "./views/Components.js";
import styles from "./App.module.scss";
import { LangContext } from "./context";

class App extends Component {
  setLanguage = (lang) => {
    this.setState({
      currentLanguage: lang,
    });
  };

  state = {
    currentLanguage: "en",
    setLanguage: this.setLanguage,
  };

  render() {
    return (
      <Router>
        <LangContext.Provider value={this.state}>
          <Header />
          <div className={styles.app}>
            <Route path="/" exact component={Docs} />
            <Route path="/tips" exact component={Tips} />
            <Route path="/patterns" exact component={Patterns} />
            <Route path="/components" exact component={Components} />
            <Route path="/users" exact component={Users} />
            <Route path="/compound" exact component={Compound} />
          </div>
        </LangContext.Provider>
      </Router>
    );
  }
}

export default App;
