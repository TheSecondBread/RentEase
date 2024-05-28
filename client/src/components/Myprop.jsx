import React, { useState, useEffect } from "react";
import Cookies from "js-cookie";
import Navbar from "./Navbar";
import MypropCard from "./MypropCard";

export default function Myprop() {
  const [myprop, setprop] = useState([]);

  useEffect(() => {
    // Function to fetch data when component mounts
    handleGetprop();
  }, []); // Empty dependency array ensures this effect runs only once, equivalent to componentDidMount in class components

  const handleGetprop = () => {
    fetch("https://rentease-1gfx.onrender.com/prop/myprop", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${Cookies.get("jwt")}`,
      },
    })
      .then((resp) => resp.json())
      .then((data) => {
        console.log(data);
        setprop(data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  };

  return (
    <div>
      <center>
        <Navbar />
        <div>
          {myprop.length !== 0 ? (
            myprop.map((item) => {
              console.log(item.title);
              return <MypropCard key={item._id} myprop={item} />;
            })
          ) : (
            <h1 style={{marginTop:"20rem"}}>No Listed Properties</h1>
          )}
        </div>
      </center>
    </div>
  );
}
