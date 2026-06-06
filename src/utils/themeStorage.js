import { DEFAULT_THEME_ID, themeCatalog } from "../theme";

const STORAGE_KEY = "portfolio_theme";

export function getStoredThemeId() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved && themeCatalog[saved]) {
      return saved;
    }
  } catch {
    // ignore
  }
  return DEFAULT_THEME_ID;
}

export function saveThemeId(id) {
  try {
    localStorage.setItem(STORAGE_KEY, id);
  } catch {
    // ignore
  }
}
