import React, { useEffect } from "react";
import "./App.css";
import Main from "./containers/Main";
import { ThemeProvider } from "styled-components";
import { chosenTheme } from "./theme";
import { GlobalStyles } from "./global";
import { initVisitorTracking } from "./utils/visitorTracking";

function App() {
  useEffect(() => {
    try {
      initVisitorTracking();
    } catch (err) {
      console.warn("Visitor tracking skipped:", err);
    }
  }, []);

  return (
    <ThemeProvider theme={chosenTheme}>
      <>
        <GlobalStyles />
        <div style={{ width: "100%", flex: 1, display: "flex", flexDirection: "column" }}>
          <Main theme={chosenTheme} />
        </div>
      </>
    </ThemeProvider>
  );
}

export default App;
