import React, { Component } from "react";
import devopsLogo from "../../assets/images/devops-illustration-devops.png";

export default class CloudInfraImg extends Component {
  render() {
    return (
      <img
      src={devopsLogo}
      alt="Cloud and DevOps"
      style={{
        maxWidth: "100%",
        height: "auto",
        display: "block",
      }}
    />
    );
  }
}
