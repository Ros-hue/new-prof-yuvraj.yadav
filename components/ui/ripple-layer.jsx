"use client";

import { useEffect } from "react";

export default function RippleLayer() {
  useEffect(() => {
    const onClick = (event) => {
      const ripple = document.createElement("span");
      ripple.className = "click-ripple";
      ripple.style.left = `${event.clientX}px`;
      ripple.style.top = `${event.clientY}px`;
      document.body.appendChild(ripple);

      window.setTimeout(() => ripple.remove(), 700);
    };

    window.addEventListener("click", onClick);
    return () => window.removeEventListener("click", onClick);
  }, []);

  return null;
}
