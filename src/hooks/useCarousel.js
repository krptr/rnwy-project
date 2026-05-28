import { useEffect, useState } from "react";

function useCarousel(slideCount) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => prevIndex + 1);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (currentIndex === slideCount - 1) {
      const timer = setTimeout(() => {
        setIsAnimating(false);
        setCurrentIndex(0);
      }, 500);

      return () => clearTimeout(timer);
    }
  }, [currentIndex, slideCount]);

  useEffect(() => {
    if (!isAnimating) {
      const timer = setTimeout(() => setIsAnimating(true), 20);

      return () => clearTimeout(timer);
    }
  }, [isAnimating]);

  return { currentIndex, isAnimating };
}

export { useCarousel };
