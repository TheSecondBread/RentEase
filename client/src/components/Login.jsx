import React, { useRef, useState } from "react";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";
export default function Login() {
  const navigate = useNavigate();
  const [pass,setPass] = useState("")

  const handleLogin = (e, email, password) => {
    console.log("clicked");
    e.preventDefault();

    fetch("https://rentease-1gfx.onrender.com/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: email.current.value,
        password: password.current.value,
      }),
    })
      .then((res) => {
        if (!res) {
          throw new Error("Network response was not ok " + response.statusText);
        } else {
          return res.json();
        }
      })
      .then((data) => {
        email.current.value=null
        password.current.value=null
        console.log(data.msg);
        if(data.msg==="invalid username or password"){
          setPass("invalid username or password")
          navigate("/");
        }
        else{


          Cookies.set("jwt", data["token"]);
          navigate("/home");
  

        }
      })
      .catch((error) => {
        console.error("There was a problem with the fetch operation:", error); // Handle any errors
      });
  };

  const email = useRef(null);
  const password = useRef(null);

  return (
    <div
      style={{
        display: "flex", // Use Flexbox
        flexDirection: "column", // Align items vertically
        alignItems: "center", // Center items horizontally
        justifyContent: "center", // Center items vertically
        backgroundColor: "black",
        marginTop: "6rem",
        borderRadius: "15px",
        marginLeft: "10rem",
        width: "400px",
        height: "400px",
        color: "white" 
      }}
    >
      <form style={{ width: "100%", textAlign: "center"}}>
        <h1>Please sign in</h1>
       

        <div style={{ marginBottom: "1rem",color:"white" }}>
          <label>
            Email address <br />
          </label>
          <input
            style={{
              backgroundColor: "black",
              border:"1px solid white",

              height: "30px",
              borderRadius: "10px",
              width: "80%", // Adjust width to make it look better
              margin: "0 auto",
              color: "white", // Center the input field
            }}
            type="email"
            placeholder="name@example.com"
            ref={email}
          />
        </div>
        <div style={{ marginBottom: "1rem" }}>
          <label>
            Password
            <br />
          </label>
          <input
            style={{
              border:"1px solid white",
              color: "white",
              backgroundColor: "black",
              height: "30px",
              borderRadius: "10px",
              width: "80%", // Adjust width to make it look better
              margin: "0 auto", // Center the input field
            }}
            type="password"
            placeholder="Password"
            ref={password}
          />
        </div>
        <button
          style={{ marginTop: "1rem", width: "30%", height: "30px" }}
          onClick={(e) => handleLogin(e, email, password)}
        >
          Sign in
        </button>
        <p style={{color:"red"}}>{pass}</p>
      </form>
    </div>
  );
}
