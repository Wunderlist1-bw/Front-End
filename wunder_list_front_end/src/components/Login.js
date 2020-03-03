import React, { useState } from "react";
import axiosWithAuth from "../utils/axiosWithAuth";

const Login = props => {
  const [data, setData] = useState({
    username: "",
    password: ""
  });

  const handleChange = event => {
    setData({
      ...data,
      [event.target.name]: event.target.value
    });
  };

  const handleSubmit = event => {
    event.preventDefault();
    axiosWithAuth()
      .post("/api/auth/login", data)
      .then(response => {
        console.log(response);
        window.localStorage.setItem("token", response.data.token);
        props.history.push("/list");
      })
      .catch(error => console.log(error));
  };

  return (
    <div>
      <h1>Welcome to the WunderList!</h1>
      <form className="login" onSubmit={handleSubmit}>
        <div className="username">Username</div>
        <input
          type="text"
          name="username"
          value={data.username}
          onChange={handleChange}
        />
        <div className="password">Password</div>
        <input
          type="password"
          name="password"
          value={data.password}
          onChange={handleChange}
        />
        <button className="login-button">Log in</button>
      </form>
    </div>
  );
};

export default Login;