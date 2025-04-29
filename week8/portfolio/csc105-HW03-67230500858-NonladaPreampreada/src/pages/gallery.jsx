import React from "react";

const Gallery = () => {
  const images = [
    "src/image/gal1.png",
    "src/image/gal2.png",
    "src/image/gal3.png",
    "src/image/gal4.png",
    "src/image/gal5.png",
    "src/image/gal6.png",
  ];

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold text-center mb-6">Gallery</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">
        {images.map((src, index) => (
          <img
            key={index}
            className="rounded-lg shadow-lg object-cover w-full h-auto"
            src={src}
            alt={`Gallery Image ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Gallery;
