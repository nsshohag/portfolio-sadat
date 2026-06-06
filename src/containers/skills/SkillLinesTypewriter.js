import React, { useState } from "react";
import TypewriterText from "../../components/typewriterText/TypewriterText";

export default function SkillLinesTypewriter({ lines, theme }) {
  const [activeIndex, setActiveIndex] = useState(0);

  const lineStyle = { color: theme.text };
  const lineClassName = "subTitle skills-text";

  return (
    <div className="skills-lines-typewriter">
      {lines.map((line, index) => {
        if (index < activeIndex) {
          return (
            <p
              key={`skill-line-done-${index}`}
              className={lineClassName}
              style={lineStyle}
            >
              {line}
            </p>
          );
        }

        if (index === activeIndex) {
          return (
            <TypewriterText
              key={`skill-line-active-${index}`}
              text={line}
              className={lineClassName}
              style={lineStyle}
              baseDelay={42}
              startDelay={index === 0 ? 500 : 350}
              cursorColor={theme.imageHighlight}
              onComplete={() => setActiveIndex((prev) => prev + 1)}
            />
          );
        }

        return null;
      })}
    </div>
  );
}
