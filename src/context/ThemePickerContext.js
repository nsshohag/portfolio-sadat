import React from "react";

export const ThemePickerContext = React.createContext({
  themeId: "blue",
  selectTheme: () => {},
});
