import React, { useState, useEffect } from "react";
import Navbar from "../Navbar";

interface LoginState {
  username: string;
  password: string;
}

interface LoginProps {}

const Login: React.FC<LoginProps> = () => {
  const [state, setState] = useState<LoginState>({ username: "", password: "" });

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // send username and password to server
    fetch("http://your-api-url.com/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username: state.username, password: state.password }),
    })
      .then((response) => response.json())
      .then((data) => console.log("Success:", data))
      .catch((error) => console.error("Error:", error));
  };

  useEffect(() => {
    // get response from server
  }, [state.username, state.password]);

  return (
    <body>
      <Navbar />
      <h1>Login</h1>
      <h2>This is Login Page</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Username:
          <input
            type="text"
            value={state.username}
            onChange={(e) => setState({ ...state, username: e.target.value })}
          />
        </label>
        <label>
          Password:
          <input
            type="password"
            value={state.password}
            onChange={(e) => setState({ ...state, password: e.target.value })}
          />
        </label>
        <input type="submit" value="Submit" />
      </form>
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
};

export default Login;

// import React from "react";
// import Navbar from "../Navbar";

// function Login() {
//   return (
//     <body>
//       <Navbar />
//       <h1>Login</h1>
//       <h2>This is Login Page</h2>
//       <footer className="footer">
//         <p className="footer-by">
//           A project by{" "}
//           <a className="endtext">
//             Noppadon and Pachara
//           </a>
//         </p>
//       </footer>
//     </body>
//   );
// }

// export default Login;