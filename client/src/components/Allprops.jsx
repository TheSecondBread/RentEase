import React, { useReducer, useRef, useState } from "react";
import Navbar from "./Navbar";
import Cookies from "js-cookie";
import Showpropcard from "./Showpropcard";

export default function Allprops() {
  const [getprop,setprop]=useState([])
  const city = useRef("");
  const type = useRef("");
  const avail = useRef("");
  const handleSearch = (e, city, type, avail) => {
    e.preventDefault();
    console.log(city.current.value, type.current.value, avail.current.value);
    fetch("https://rentease-1gfx.onrender.com/prop/props", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${Cookies.get("jwt")}`,
      },
      body: JSON.stringify({
        city: city.current.value,
        type: type.current.value,
        avail: avail.current.value,
      }),
    })
    .then(res=>{
      return res.json()
    })
    .then(data=>{
      setprop(data[0])
      console.log(data[0])
    })
  };

  return (
    <div>
      <center>
        <Navbar></Navbar>
        <div style={{ height: "80vh" }}>
          <div
            style={{
              border: "1px solid white",
              width: "80%",
              height: "70vh",
              borderRadius: "25px",
              backgroundImage: "url(image.png)",
              backgroundSize: "fit",
              marginTop: "3.5rem",
              placeContent: "center",
              justifyContent: "center",
            }}
          >
            <h1>Search for Properties</h1>
            <form style={{ color: "white" }}>
              <input
                ref={city}
                type="text"
                placeholder="Enter city name"
                style={{
                  width: "60%",
                  height: "45px",
                  backgroundColor: "black",
                  border: "1px solid white",
                }}
              />
              <br></br>
              <select
                ref={type}
                id="city_type"
                name="city_type"
                style={{
                  width: "27%",
                  height: "40px",
                  backgroundColor: "black",
                  border: "1px solid white",
                  marginRight: "3rem",
                }}
              >
                <option value="">Select Type</option>
                <option value="house">House</option>
                <option value="apartment">Apartment</option>
                <option value="condo">Condo</option>
                <option value="land">Land</option>
              </select>
              <select
                ref={avail}
                style={{
                  width: "27%",
                  height: "40px",
                  backgroundColor: "black",
                  border: "1px solid white",
                  marginTop: "2rem",
                  marginBottom: "3rem",
                }}
              >
                <option value="">Select Availability</option>
                <option value="immediate">Immediate</option>
                <option value="within 1 month">Within 1 Month</option>
                <option value="after 1 month">After 1 Month</option>
              </select>

              <br></br>

              <button
                className="abutton"
                type="submit"
                onClick={(e) => handleSearch(e, city, type, avail)}
              >
                <a className="ba" style={{ color: "white" }}>
                  <span>Search</span>
                </a>
              </button>
            </form>
          </div>
        </div>
        {getprop.length!=0?<Showpropcard allprop={getprop}/>:<></>}
        
        {/* <Showpropcard></Showpropcard> */}
      </center>
    </div>
  );
}
