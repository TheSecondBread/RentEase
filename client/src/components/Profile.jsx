import React from "react";
import Navbar from "./Navbar";

export default function Profile() {
  return (
    <div
      style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}
    >
        <Navbar></Navbar>
      <h1 style={{ fontSize: "3rem" }}>My Profile</h1>
      {/* <div className="card"> */}
      <div className="maincard2" >
        <div style={{ marginLeft: "10%" ,display:"flex",gap:"20%"}}>
          <div style={{marginTop:"7%"}}>
            <h2>Name: Pragnan Kasarla</h2>
            <h2>Email: pragnank2@gmail.com</h2>
            <h2>Number: 6301196112</h2>
            <h2>Address: <span style={{fontSize:"20px"}}>lakfjdl, sldkjfl, skldjfl</span></h2>
          </div>
          <div className="card" style={{marginTop:"8% "}}>
     
            <div className="card2" style={{backgroundImage:"url(/profile.jpg)",backgroundSize:"cover"}}></div>
          </div>
  
          
        </div>
        {/* </div> */}
      </div>
    </div>
  );
}
