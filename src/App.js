import React, { useCallback, useEffect, useMemo, useState } from "react";
import "./App.css";
import Main from "./containers/Main";
import { ThemeProvider } from "styled-components";
import { getThemeById } from "./theme";
import { GlobalStyles } from "./global";
import { initVisitorTracking } from "./utils/visitorTracking";
import { ThemePickerContext } from "./context/ThemePickerContext";
import { getStoredThemeId, saveThemeId } from "./utils/themeStorage";
import ThemePicker from "./components/themePicker/ThemePicker";

function App() {
  const [themeId, setThemeId] = useState(() => getStoredThemeId());
  const theme = useMemo(() => getThemeById(themeId), [themeId]);

  const selectTheme = useCallback((id) => {
    setThemeId(id);
    saveThemeId(id);
  }, []);

  const themePickerValue = useMemo(
    () => ({ themeId, selectTheme }),
    [themeId, selectTheme]
  );

  useEffect(() => {
    try {
      initVisitorTracking();
    } catch (err) {
      console.warn("Visitor tracking skipped:", err);
    }
  }, []);

  return (
    <ThemePickerContext.Provider value={themePickerValue}>
      <ThemeProvider theme={theme}>
        <>
          <GlobalStyles />
          <div
            style={{
              width: "100%",
              flex: 1,
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Main theme={theme} />
            <ThemePicker theme={theme} />
          </div>
        </>
      </ThemeProvider>
    </ThemePickerContext.Provider>
  );
}

export default App;
