import React from "react";
import Navbar from "./Navbar";
import { Analytics } from "@vercel/analytics/react"
export default function Home() {
  return (
    <>
      <div
        style={{
          color: "black",
          fontSize: "2.5rem",
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          width: "100%",
          height: "90vh",
        }}
      >
        <Navbar></Navbar>

        <div
          style={{
            marginTop: "3rem",
            height: "70vh",
            width: "80vw",
            border: "1px solid white",
            borderRadius: "20px",
            backgroundImage: "url(/2.jpg)",
            backgroundSize: "cover",
          }}
        >
          <center>
            <h2 style={{ color: "white" }}>Find Your New Home</h2>
            <p style={{ color: "white", fontSize: "34px" }}>
              For buying, renting, or selling property, you've come to the right
              place.
            </p>
            <button className="abutton">
              <a className="ba" style={{color:"white"}}href="browse">
                <span>Explore</span>
              </a>
            </button>
          </center>
        </div>
      </div>
      <Analytics></Analytics>
    </>
  );
}
