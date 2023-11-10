import { useEffect, useState } from "react";

const useScroll = () => {
  const [positionY, setPositionY] = useState(0);
  // Scroll to the top of the page
  const clickHandle = () => {
    window.scrollTo(0, 0);
  };

  useEffect(() => {
    const listenScroll = () => {
      setPositionY(window.scrollY);
    };

    window.addEventListener("scroll", listenScroll);
    // remove event listener on unmount
    return () => {
      window.removeEventListener("scroll", listenScroll);
    };
  }, []);

  return [positionY, clickHandle];
};

export default useScroll;
