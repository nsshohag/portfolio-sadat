import React, { useContext, useEffect, useLayoutEffect, useRef, useState } from "react";
import ReactDOM from "react-dom";
import { ThemePickerContext } from "../../context/ThemePickerContext";
import { themeCatalog } from "../../theme";
import "./ThemePicker.css";

function getPanelPosition(triggerEl) {
  if (!triggerEl) {
    return { bottom: 80, right: 24, width: 320 };
  }

  const rect = triggerEl.getBoundingClientRect();
  const panelWidth = Math.min(320, window.innerWidth - 24);
  let left = rect.right - panelWidth;
  left = Math.max(12, Math.min(left, window.innerWidth - panelWidth - 12));

  return {
    bottom: window.innerHeight - rect.top + 12,
    left,
    width: panelWidth,
  };
}

export default function ThemePicker({ theme }) {
  const { themeId, selectTheme } = useContext(ThemePickerContext);
  const [open, setOpen] = useState(false);
  const [panelStyle, setPanelStyle] = useState({ bottom: 80, right: 24, width: 320 });
  const triggerRef = useRef(null);
  const panelRef = useRef(null);

  const updatePanelPosition = () => {
    setPanelStyle(getPanelPosition(triggerRef.current));
  };

  useLayoutEffect(() => {
    if (!open) {
      return undefined;
    }

    updatePanelPosition();

    const onLayoutChange = () => updatePanelPosition();
    window.addEventListener("resize", onLayoutChange);
    window.addEventListener("scroll", onLayoutChange, true);

    return () => {
      window.removeEventListener("resize", onLayoutChange);
      window.removeEventListener("scroll", onLayoutChange, true);
    };
  }, [open]);

  useEffect(() => {
    if (!open) {
      return undefined;
    }

    const onKeyDown = (event) => {
      if (event.key === "Escape") {
        setOpen(false);
      }
    };

    const onPointerDown = (event) => {
      const target = event.target;
      if (
        triggerRef.current &&
        !triggerRef.current.contains(target) &&
        panelRef.current &&
        !panelRef.current.contains(target)
      ) {
        setOpen(false);
      }
    };

    document.addEventListener("keydown", onKeyDown);
    document.addEventListener("mousedown", onPointerDown);

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.removeEventListener("mousedown", onPointerDown);
    };
  }, [open]);

  const handleSelect = (id) => {
    selectTheme(id);
    setOpen(false);
  };

  if (typeof document === "undefined") {
    return null;
  }

  return ReactDOM.createPortal(
    <div className="theme-picker-fab-root">
      <button
        ref={triggerRef}
        type="button"
        className={`theme-picker-fab${open ? " is-open" : ""}`}
        aria-label="Change color theme"
        aria-expanded={open}
        aria-haspopup="listbox"
        onClick={(event) => {
          event.stopPropagation();
          setOpen((prev) => !prev);
        }}
        style={{
          color: theme.body,
          backgroundColor: theme.imageHighlight,
          boxShadow: `0 6px 20px ${theme.imageHighlight}66`,
        }}
      >
        <i className="fas fa-palette" aria-hidden="true" />
      </button>

      {open ? (
        <div
          ref={panelRef}
          className="theme-picker-panel"
          role="listbox"
          aria-label="Portfolio themes"
          style={{
            bottom: panelStyle.bottom,
            left: panelStyle.left,
            width: panelStyle.width,
            backgroundColor: theme.body,
            borderColor: theme.highlight,
            color: theme.text,
          }}
          onMouseDown={(event) => event.stopPropagation()}
        >
          <p
            className="theme-picker-title"
            style={{ color: theme.text, borderColor: theme.highlight }}
          >
            Choose theme
          </p>
          <div className="theme-picker-grid">
            {Object.entries(themeCatalog).map(([id, { label, theme: t }]) => {
              const isActive = id === themeId;
              return (
                <button
                  key={id}
                  type="button"
                  role="option"
                  aria-selected={isActive}
                  className={
                    isActive
                      ? "theme-picker-option is-active"
                      : "theme-picker-option"
                  }
                  onClick={() => handleSelect(id)}
                  title={label}
                  style={{
                    borderColor: isActive ? t.imageHighlight : theme.highlight,
                    backgroundColor: theme.body,
                  }}
                >
                  <span
                    className="theme-picker-swatch"
                    style={{
                      background: `linear-gradient(135deg, ${t.body} 45%, ${t.imageHighlight} 100%)`,
                    }}
                  >
                    <span
                      className="theme-picker-swatch-dot"
                      style={{ backgroundColor: t.text }}
                    />
                  </span>
                  <span
                    className="theme-picker-label"
                    style={{ color: theme.secondaryText }}
                  >
                    {label}
                  </span>
                  {isActive ? (
                    <i
                      className="fas fa-check theme-picker-check"
                      style={{ color: t.imageHighlight }}
                      aria-hidden="true"
                    />
                  ) : null}
                </button>
              );
            })}
          </div>
        </div>
      ) : null}
    </div>,
    document.body
  );
}
