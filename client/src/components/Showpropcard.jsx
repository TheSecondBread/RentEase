import React, { useEffect, useState } from "react";

// const images = [
//   { src: "2.jpg", description: "Image 2 description" },
//   { src: "3.jpg", description: "Image 3 description" },
//   // Add more images as needed
// ];

export default function Showpropcard({ allprop }) {
  // console.log(allprop)
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = allprop.imageUrls

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      style={{
        width: "80%",
        height: "80vh",
        border: "1px solid white",
        marginBottom: "5rem",
        overflow: "hidden",
        position: "relative",
        borderRadius: "20px",
        display: "flex",
        flexDirection: "row",
        gap: "2rem",
      }}
    >
      <div
        style={{
          marginLeft: "5%",
          borderRadius: "15px",
          marginTop: "4.5rem",
          height: "60vh",
          width: "35%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          overflow: "hidden",
          border: "3px solid white",
        }}
      >
        <div
          style={{
            minWidth: "100%",
            boxSizing: "border-box",
            padding: "10px",
            marginLeft: "3rem",
          }}
        >
          <img
            src={images[currentIndex].src}
            alt={`Slide ${currentIndex + 1}`}
            style={{ width: "100%", height: "auto", objectFit: "cover" }}
          />
        </div>
      </div>
      <div className="mfcard-container">
        <div className="mfcard">
          <div className="front">
            <h1>{allprop.title}</h1>
            <div className="details">
              <div className="left">
                <h3>Rent: {allprop.price} rs</h3>
                <h3>Type: {allprop.type}</h3>
                <h3>Area: {allprop.area} sqft</h3>
                <h3>Bedrooms: {allprop.bedrooms}</h3>
                <h3>Avail: {allprop.avail}</h3>
              </div>
            </div>
          </div>
          <div className="back">
            <h2>Description: {allprop.description}</h2>
            <h3>Owner: {allprop.owner}</h3>
            <h3>Number: {allprop.number}</h3>
            <h3>Address: {allprop.address}</h3>
          </div>
        </div>
      </div>
    </div>
  );
}
