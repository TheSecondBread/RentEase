import React, { useRef, useState } from "react";
import Cookies from "js-cookie";
import Navbar from "./Navbar";

const IMGUR_CLIENT_ID = "a567af04856b867";

export default function Createprop() {
  const title = useRef("");
  const description = useRef("");
  const type = useRef("");
  const price = useRef("");
  const area = useRef("");
  const bedrooms = useRef("");
  const address = useRef("");
  const city = useRef("");
  const avail = useRef("");
  const [imageFiles, setImageFiles] = useState([]);

  const handleImageChange = (e) => {
    setImageFiles(e.target.files);
  };

  const uploadImagesToImgur = async (files) => {
    const uploadedImageUrls = [];
    for (let i = 0; i < files.length; i++) {
      const formData = new FormData();
      formData.append("image", files[i]);

      try {
        const response = await fetch("https://api.imgur.com/3/image", {
          method: "POST",
          headers: {
            Authorization: `Client-ID ${IMGUR_CLIENT_ID}`,
          },
          body: formData,
        });

        const data = await response.json();
        uploadedImageUrls.push(data.data.link);

        // Introduce a delay of 1 second between uploads to avoid hitting rate limit
        await new Promise((resolve) => setTimeout(resolve, 1000));
      } catch (error) {
        console.error("Error uploading image to Imgur:", error);
      }
    }
    return uploadedImageUrls;
  };

  const handleAddProp = async (e) => {
    e.preventDefault();
    const imageUrls = await uploadImagesToImgur(imageFiles);
    fetch("https://rentease-1gfx.onrender.com/prop/post", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${Cookies.get("jwt")}`,
      },
      body: JSON.stringify({
        title: title.current.value,
        description: description.current.value,
        type: type.current.value,
        price: price.current.value,
        area: area.current.value,
        bedrooms: bedrooms.current.value,
        city: city.current.value,
        address: address.current.value,
        avail: avail.current.value,
        imageUrls: imageUrls,
        CreatedBy: "fldsjl",
      }),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok " + response.statusText);
        }
        return response.json(); // Parse the JSON response
      })
      .then((data) => {
        console.log("Success:", data); // Handle the JSON response data
      })
      .catch((error) => {
        console.error("There was a problem with the fetch operation:", error); // Handle any errors
      });
  };

  return (
    <center>
      <Navbar />
      <h1 style={{ fontSize: "1.5rem" }}>List Your Property</h1>
      <div
        className="form-container"
        style={{ backgroundColor: "black", boxShadow: "0px 0px 8px 0px" }}
      >
        <form>
          <div className="form-group">
            <label htmlFor="title">Title:</label>
            <input type="text" id="title" name="title" required ref={title} />
          </div>
          <div className="form-group">
            <label htmlFor="description">Description:</label>
            <textarea
              id="description"
              name="description"
              rows="2"
              required
              ref={description}
            ></textarea>
          </div>
          <div className="form-group">
            <label htmlFor="type">Type:</label>
            <select
              id="type"
              name="type"
              required
              ref={type}
              style={{ width: "25rem" }}
            >
              <option value="">Select Type</option>
              <option value="house">House</option>
              <option value="apartment">Apartment</option>
              <option value="condo">Condo</option>
              <option value="land">Land</option>
            </select>
            <label htmlFor="avail" style={{ marginLeft: "1rem" }}>
              Availability:
            </label>
            <select
              id="avail"
              name="avail"
              required
              ref={avail}
              style={{ width: "25rem" }}
            >
              <option value="">Availability</option>
              <option value="immediate">Immediate</option>
              <option value="within 1 month">Within 1 Month</option>
              <option value="after 1 month">After 1 Month</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="price">Price:</label>
            <input type="number" id="price" name="price" required ref={price} />
          </div>
          <div className="form-group">
            <label htmlFor="area">Area:</label>
            <input type="number" id="area" name="area" required ref={area} />
          </div>
          <div className="form-group">
            <label htmlFor="bedrooms">Bedrooms:</label>
            <input
              type="number"
              id="bedrooms"
              name="bedrooms"
              required
              ref={bedrooms}
            />
          </div>
          <div className="form-group">
            <label htmlFor="city">City:</label>
            <input
              type="text"
              id="city"
              name="city"
              required
              style={{ width: "10rem" }}
              ref={city}
            />
            <label style={{ marginLeft: "3rem" }}>Address:</label>
            <input
              type="text"
              required
              style={{ width: "25rem" }}
              ref={address}
            />
          </div>
          <div className="form-group">
            <label htmlFor="imgs">Images:</label>
            <input
              type="file"
              id="imgs"
              name="imgs"
              accept="image/*"
              multiple
              onChange={handleImageChange}
            />
          </div>
          <div className="form-group img-preview" id="imgPreview"></div>
          <button className="button-1" onClick={handleAddProp}>
            List Property
          </button>
        </form>
      </div>
    </center>
  );
}
