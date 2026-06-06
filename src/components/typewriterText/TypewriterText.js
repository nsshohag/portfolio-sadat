import React, { useEffect, useRef, useState } from "react";
import "./TypewriterText.css";

function getCharDelay(char, baseDelay) {
  if (char === "." || char === "?" || char === "!") {
    return baseDelay * 8;
  }
  if (char === "," || char === ";") {
    return baseDelay * 4;
  }
  if (char === " ") {
    return baseDelay * 1.5;
  }
  return baseDelay;
}

export default function TypewriterText({
  text,
  className = "",
  style,
  baseDelay = 28,
  startDelay = 600,
  showCursor = true,
  cursorColor,
  onComplete,
}) {
  const [displayed, setDisplayed] = useState("");
  const [isComplete, setIsComplete] = useState(false);
  const hasCalledComplete = useRef(false);

  useEffect(() => {
    setDisplayed("");
    setIsComplete(false);
    hasCalledComplete.current = false;

    let index = 0;
    let timeoutId = null;

    const typeNext = () => {
      if (index >= text.length) {
        setIsComplete(true);
        return;
      }

      index += 1;
      setDisplayed(text.slice(0, index));
      timeoutId = window.setTimeout(
        typeNext,
        getCharDelay(text[index - 1], baseDelay)
      );
    };

    timeoutId = window.setTimeout(typeNext, startDelay);

    return () => {
      if (timeoutId) {
        window.clearTimeout(timeoutId);
      }
    };
  }, [text, baseDelay, startDelay]);

  useEffect(() => {
    if (isComplete && onComplete && !hasCalledComplete.current) {
      hasCalledComplete.current = true;
      onComplete();
    }
  }, [isComplete, onComplete]);

  return (
    <div className="typewriter-wrap">
      <p
        className={`${className} typewriter-placeholder`}
        style={style}
        aria-hidden="true"
      >
        {text}
      </p>
      <p
        className={`${className} typewriter-text`}
        style={style}
        aria-label={text}
      >
        {displayed}
        {showCursor ? (
          <span
            className={
              isComplete
                ? "typewriter-cursor is-complete"
                : "typewriter-cursor"
            }
            style={{ backgroundColor: cursorColor || "currentColor" }}
            aria-hidden="true"
          />
        ) : null}
      </p>
    </div>
  );
}
