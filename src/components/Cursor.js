import React, { useEffect, useState } from "react";

const Cursor = props => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const onMouseMove = e => {
    const { pageX: x, pageY: y } = e;
    setMousePosition({ x, y });
  };

  useEffect(() => {
    document.addEventListener("mousemove", onMouseMove);

    return () => {
      document.removeEventListener("mousemove", onMouseMove);
    };
  });
  const { x, y } = mousePosition;

  return (
    <div
      style={{ left: `${x}px`, top: `${y}px` }}
      // className={`follow-cursor ${props.cursorClass}`}
    ></div>
  );
};

export default Cursor;
