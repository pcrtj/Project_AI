import React from "react";
import Navbar from "../Navbar";

function Login() {
  return (
    <body>
      <Navbar />
      <h1>Login</h1>
      <h2>This is Login Page</h2>
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

export default Login;
