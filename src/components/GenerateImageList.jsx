import React from "react";

const GenerateImageList = (images) => {
  const imageList = [];

  for (let i = 0; i < 50; i++) {
    imageList.push(
      images.map((image, index) => (
        <img
          key={index + i * images.length}
          src={image}
          alt={`Image ${index + 1}`}
        />
      ))
    );
  }

  return imageList;
};

export default GenerateImageList;
