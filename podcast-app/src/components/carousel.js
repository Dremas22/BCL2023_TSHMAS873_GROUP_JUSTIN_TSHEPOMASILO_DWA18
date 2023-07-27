import React from "react";

function Carousel({ podcastGallery }) {
  const [currentIndex, setCurrentIndex] = React.useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % podcastGallery.length);
  };

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + podcastGallery.length) % podcastGallery.length);
  };

  return (
    <div className="carousel-container">
      <div className="carousel">
        {podcastGallery.map((podcast, index) => (
          <div
            key={podcast.id}
            className={`carousel-item ${index === currentIndex ? "active" : ""}`}
          >
            <img src={podcast.image} className="img" alt="podcastimage" />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Carousel;

