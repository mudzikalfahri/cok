import { useEffect, useState } from "react";

export const useScroll = () => {
  const [ofset, setOfset] = useState(0);
  const [style, setStyle] = useState(false);
  let last;

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScroll = () => {
    let currentScrollY = window.scrollY;
    setOfset(currentScrollY);
    if (currentScrollY > last) {
      setStyle(true);
    } else {
      setStyle(false);
    }
    last = currentScrollY;
  };

  return { ofset, style };
};
