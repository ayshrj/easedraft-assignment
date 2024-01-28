import React, { useRef, useEffect } from "react";
import "./ImageSlider.css";
// ...

const ImageSlider = ({ myThingToScroll, speed, height, images }) => {
  const imageContainerRef = useRef();

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

  const allImages = [
    ...images,
    ...images,
    ...images,
    ...images,
    ...images,
    ...images,
    ...images,
    ...images,
    ...images,
    ...images,
  ];

  return (
    <div className="centered-container">
      <div className="scrolling-container">
        <div
          className="image-gallery"
          ref={imageContainerRef}
          style={{
            display: "flex",
            animation: `scrollAnimation ${speed}s linear infinite`,
            maxWidth: 200, // Adjust this value as needed
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
    </div>
  );
};

// ...

export default ImageSlider;
