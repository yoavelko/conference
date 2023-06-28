import "./carousel.css";
import { useState, useEffect } from "react";

function Carousel({children}) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [length, setLength] = useState(children.length);
  const [touchPosition, setTouchPosition] = useState(null);
  const next = () => {
    if (currentIndex < length - 1) {
      setCurrentIndex((prevState) => prevState + 1);
    }
  };

  const prev = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prevState) => prevState - 1);
    }
  };
  const handleTouchStart = (e) => {
    const touchDown = e.touches[0].clientX;
    setTouchPosition(touchDown);
  };
  const handleTouchMove = (e) => {
    const touchDown = touchPosition;

    if (touchDown === null) {
      return;
    }

    const currentTouch = e.touches[0].clientX;
    const diff = touchDown - currentTouch;

    if (diff > 5) {
      next();
    }

    if (diff < -5) {
      prev();
    }

    setTouchPosition(null);
  };

  // Set the length to match current children from props
  useEffect(() => {
    setLength(children.length);
  }, [children]);
  return (
    <div className="carousel-container" dir="ltr">
      <div className="carousel-wrapper">
        {currentIndex > 0 && (
          <button  onClick={prev} className="left-arrow arrow-button">
            <img
              width="30"
              height="30"
              src="https://img.icons8.com/ios-filled/50/737373/double-left.png"
              alt="double-left"
            />
          </button>
        )}
        <div
          className="carousel-content-wrapper"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
        >
          <div
            className="carousel-content"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {children}
          </div>
        </div>
        {currentIndex < length - 1 && (
          <button onClick={next} className="right-arrow arrow-button">
            <img
              width="30"
              height="30"
              src="https://img.icons8.com/ios-filled/50/737373/double-right.png"
              alt="double-right"
            />
          </button>
        )}
      </div>
    </div>
  );
}

export default Carousel;
