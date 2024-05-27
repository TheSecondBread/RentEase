import React, { useState } from "react";
import "../App.css";
import Login from "./Login";
import Signup from "./Signup";

export default function Intro() {
  const [loginState, setLogin] = useState("login");
  const [but, setBut] = useState("Sign Up Now");
  const handleState = () => {
    if (loginState === "login") {
      setLogin("signup");
      setBut("Login");
    } else {
      setLogin("login");
      setBut("Sign Up Now");
    }
  };
  return (
    <div className="background">
      <div
        className="container"
        style={{ marginRight: "80%", backgroundColor: "transparent" }}
      >
        <h1 className="header" style={{ fontSize: "2rem" }}>
          RentEase
        </h1>
      </div>
      <div style={{ display: "flex" }}>
        <div
          style={{
            marginTop: "13rem",
            marginLeft: "5rem",
            fontSize: "1.5rem",
            color: "#ffffff",
          }}
        >
          <h1>
            Perfect Firm to Buy, Sell or <br></br>Rent Houses, Villas,
            Apartments
          </h1>
          <button
            className="button-29"
            role="button"
            onClick={() => handleState()}
          >
            {but}
          </button>
        </div>
        <div className="fade-in"> 
          {loginState === "login" ? <Login></Login> : <Signup></Signup>}
        </div>
      </div>
    </div>
  );
}
