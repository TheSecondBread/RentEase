import React from "react";

export default function MypropCard({ myprop }) {
  console.log
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
        src={myprop.imageUrls[0]}
        alt="Image"
        className="card-image"
        style={{height:"200px",width:"200px",marginTop:"2rem"}}
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
