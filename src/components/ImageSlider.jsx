import React, { useRef, useEffect } from "react";
import "./ImageSlider.css";

const ImageSlider = ({ myThingToScroll, speed, height, images }) => {
  const imageContainerRef = useRef();
  console.log(images);

  useEffect(() => {
    const container = imageContainerRef.current;

    const handleAnimationEnd = () => {
      container.appendChild(container.children[0].cloneNode(true));
      container.removeChild(container.children[0]);
      container.style.transform = "translateX(0)";
    };

    container.addEventListener("animationiteration", handleAnimationEnd);

    return () => {
      container.removeEventListener("animationiteration", handleAnimationEnd);
    };
  }, []);

  const allImages = [...images, ...images, ...images, ...images]; // Repeat images to avoid repetition in JSX

  return (
    <div className="scrolling-container">
      <div
        className="image-gallery"
        ref={imageContainerRef}
        style={{
          display: "flex",
          animation: `scrollAnimation ${speed}s linear infinite`,
        }}
      >
        {allImages.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Image ${index + 1}`}
            style={{ height: height }}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;
