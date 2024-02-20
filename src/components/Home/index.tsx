import React from "react";
import Navbar from "../Navbar";

function Home() {
  return (
    <body>
      <Navbar />
      <h1>Home</h1>
      <h2>This is Home Page</h2>
      <footer className="footer">
        <p className="footer-by">
          A project by{" "}
          <a className="endtext">
            Noppadon and Pachara
          </a>
        </p>
      </footer>
    </body>
  );
}

export default Home;
