import Navbar from "./Navbar";

export default function About() {
  return (
    <div style={{  height: "100vh", width: "100%" }}>
      <Navbar />
      <center>
        <div
          style={{width: "90%", marginTop: "2rem",display:"flex"}}
        >
          <div>
            <h1 style={{ marginRight: "80%" }}>About</h1>
            <div
              style={{
                width: "420px",
                height: "200px",
                marginRight: "60%",
                fontFamily: "sans-serif",
              }}
            >
              <h3>
                At RentEase, we pride ourselves on being your one-stop
                destination for all your property needs. Whether you're looking
                to buy your dream home, sell your current property, rent a cozy
                apartment, we've got you covered. Our platform is designed to
                make your property transactions seamless and hassle-free. With a
                user-friendly interface and a wide range of services, we strive
                to provide the best experience for both buyers and sellers
                alike.
              </h3>
            </div>
          </div>
          <div
            style={{
              width: "400px",
              height: "500px",
              marginTop:"2rem",
              marginLeft:"5%",
            //   border: "1px solid black",
              backgroundImage:"url(/about.jpg)",
              backgroundSize:"cover",
              borderRadius:"20px"
            }}
          ></div>
          <div
            style={{
              width: "400px",
              height: "500px",
              marginTop:"2rem",
              marginLeft:"5%",
            //   border: "1px solid black",
              backgroundImage:"url(/about1.jpg)",
              backgroundSize:"170%",
            //   backgroundPosition:"-100px",
              borderRadius:"20px"
            }}
          ></div>
        </div>
      </center>
    </div>
  );
}
