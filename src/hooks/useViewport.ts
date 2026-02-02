import { useEffect, useState } from "react";

export function useViewport() {
  const getSize = () => ({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  const [viewport, setViewport] = useState(getSize);

  useEffect(() => {
    const handleResize = () => {
      setViewport(getSize());
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return viewport;
}