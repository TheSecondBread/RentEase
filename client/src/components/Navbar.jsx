import React from "react";

export default function Navbar() {
  return (
    <div className="container">
      <h1 className="header" style={{ marginRight: "60px" }}>
        RentEase
      </h1>
      <nav className="nav">
        <a href="/index">Home</a>
        <a href="/about">About</a>
        <a href="/browse">Search</a>
        <a href="/list">List Property</a>
        <a href="/myprop">My Properties</a>
        {/* <div className="dropdown">
          <button className="dropbtn">Settings</button>
          <div className="dropdown-content">
            <a href="/profile">Profile</a>
            <a href="/myprop">My Properties</a>
          </div>
        </div> */}
        {/* <a href="#signup">Settings</a> */}
      </nav>
    </div>
  );
}
