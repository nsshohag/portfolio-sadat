import React, { Component } from "react";
import "./Splash.css";
import { Redirect } from "react-router-dom";
import { greeting } from "../../portfolio.js";

export const LOTTIE_SPLASH_SRC =
  "https://lottie.host/1eda9907-e5d0-4f9b-a06a-d23106a133ad/tGILaQapRp.lottie";

const SPLASH_DURATION_MS = 4000;

function LottieSplash({ theme }) {
  return (
    <div
      className="lottie-splash"
      style={{
        backgroundColor: theme.body,
        color: theme.text,
      }}
    >
      <div className="lottie-splash-content fade-in">
        <dotlottie-wc
          src={LOTTIE_SPLASH_SRC}
          className="lottie-splash-player"
          autoplay
          loop
        />
        <p className="lottie-splash-title" style={{ color: theme.text }}>
          {greeting.title}
        </p>
        <p
          className="lottie-splash-subtitle"
          style={{ color: theme.secondaryText }}
        >
          Loading portfolio…
        </p>
      </div>
    </div>
  );
}

class Splash extends Component {
  constructor(props) {
    super(props);
    this.state = {
      redirect: false,
    };
    this.timeoutId = null;
  }

  componentDidMount() {
    this.timeoutId = setTimeout(
      () => this.setState({ redirect: true }),
      SPLASH_DURATION_MS
    );
  }

  componentWillUnmount() {
    if (this.timeoutId) {
      clearTimeout(this.timeoutId);
    }
  }

  render() {
    if (this.state.redirect) {
      return <Redirect to="/home" />;
    }

    return <LottieSplash theme={this.props.theme} />;
  }
}

export default Splash;
