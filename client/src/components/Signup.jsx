import React, { useRef } from 'react';
import {useNavigate} from 'react-router-dom'

const Signup = () => {
  const navigate = useNavigate()
  const name = useRef(null);
  const number = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const handleSignup = () => {
    fetch("https://rentease-1gfx.onrender.com/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: name.current.value,
        number: number.current.value,
        email: email.current.value,
        password: password.current.value,
      }),
    })
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok ' + response.statusText);
      }
      return response.json(); // Parse the JSON response
    })
    .then(data => {
      console.log('Success:', data); // Handle the JSON response data
      navigate("/")

    })
    .catch(error => {
      console.error('There was a problem with the fetch operation:', error); // Handle any errors
    });
  };

  return (
    <div
    style={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: "black",
      marginTop: "1rem",
      borderRadius: "15px",
      marginLeft: "10rem",
      width: "400px",
      height: "500px",  // Adjusted height for additional inputs
    }}
  >
    <form style={{ width: "100%", textAlign: "center"}}>
      <h1 >Sign Up</h1>

      <div style={{ marginBottom: "1rem" }}>
        <label>Name</label>
        <br></br>
        <input
          style={{
            height: "30px",
            borderRadius: "10px",
            width: "80%",
            margin: "0 auto",
          }}
          type="text"
          placeholder="Name"
          ref={name}
        />
      </div>
      <div style={{ marginBottom: "1rem" }}>
      <label>Number</label>
        <br></br>
        <input
          style={{
            height: "30px",
            borderRadius: "10px",
            width: "80%",
            margin: "0 auto",
          }}
          type="text"
          placeholder="Number"
          ref={number}
        />
      </div>
      <div style={{ marginBottom: "1rem" }}>
      <label>Email</label>
        <br></br>
        <input
          style={{
            height: "30px",
            borderRadius: "10px",
            width: "80%",
            margin: "0 auto",
          }}
          type="text"
          placeholder="Email"
          ref={email}
        />
      </div>
      <div style={{ marginBottom: "1rem" }}>
      <label>Password</label>
        <br></br>
        <input
          style={{
            height: "30px",
            borderRadius: "10px",
            width: "80%",
            margin: "0 auto",
          }}
          type="password"
          placeholder="Password"
          ref={password}
        />
      </div>
      <button
        style={{ marginTop: "1rem", width: "30%", height: "30px" }}
        onClick={handleSignup}
      >
        Sign Up
      </button>
    </form>
  </div>
  );
};

export default Signup;
