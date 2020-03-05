import React, { useState } from "react";
import { Button, Form, FormGroup, Input, Col } from 'reactstrap';
import { Link } from 'react-router-dom';
import axiosWithAuth from "../../utils/axiosWithAuth";

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
      <h1>Sign in to Dash</h1>
      <Form className="login" onSubmit={handleSubmit}>
        <FormGroup>
          <Col xs="12" md={{ size: 6, offset: 3 }}>
            <Input type="text" name="username" id="username" placeholder="Username" value={data.username} onChange={handleChange} />
          </Col>
        </FormGroup>
        <FormGroup>
          <Col xs="12" md={{ size: 6, offset: 3 }}>
            <Input type="password" name="password" id="Password" placeholder="Password" value={data.password} onChange={handleChange} />
          </Col>
        </FormGroup>
        <Button className="login-button">Login</Button>
        <Link to="/register">Register</Link>
      </Form>
    </div>
  );
};

export default Login;