import React, { Component } from "react";
import Github from "./components/Github";
import lambdaLogo from "./assets/lambdalogo.png";
import githubLogo from "./assets/githublogo.png";

export default class App extends Component {
  render() {
    return (
      <div className="container">
        <div className="header">
          <img src={lambdaLogo} alt="Lambda Logo" />
          <p>
            <span role="img" aria-label="heart">
              ❤️'s
            </span>
          </p>
          <img src={githubLogo} alt="GitHub Logo" />
        </div>
        <Github />
      </div>
    );
  }
}
