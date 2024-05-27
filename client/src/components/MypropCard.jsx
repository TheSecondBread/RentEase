import React from "react";

export default function MypropCard({ myprop }) {
  return (
    <div
      className="mpcard"
      style={{
        display: "flex",
        padding: "20px",
        width: "40vw",
        marginTop: "5rem",
        justifyContent: "left",
      }}
    >
      <img
        src="https://via.placeholder.com/200"
        alt="Image"
        className="card-image"
      />
      <div className="mpcard-content" style={{ marginLeft: "2rem" }}>
        <h2>Title:{myprop.title}</h2>
        <p>
          Description:{myprop.description}
        </p>
        <p className="type">Type:{myprop.type}</p>
        <p className="price">Price:{myprop.price}</p>
        <p className="area">Area: {myprop.price} sq ft</p>
      </div>
    </div>
  );
}
