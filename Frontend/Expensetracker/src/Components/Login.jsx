import React, { useState, useEffect } from "react";
import styles from "./Login.module.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
const Login = () => {
  const navigate = useNavigate();
  const [data, setData] = useState({
    username: "",
    password: "",
  });

  useEffect(() => {
    const fetch = async () => {
      const resp = await axios.post(
        "http://localhost:3000/api/user/login",
        data
      );
      if (resp.data) navigate("/Home");
      console.log(resp.data);
    };
    fetch();
  }, [data]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const loginData = {
      username: e.target.username.value,
      password: e.target.password.value,
    };
    setData(loginData);
  };

  return (
    <div className={styles.login_outer}>
      <div className={styles.login_inner}>
        <form onSubmit={handleSubmit}>
          <div className={styles.inner_div}>
            <h2>Login Page</h2>
          </div>

          <div className={styles.inner_div}>
            <h3>Username:</h3>
            <input
              name="username"
              className={styles.login_input}
              type="text"
              required
            />
          </div>

          <div className={styles.inner_div}>
            <h3>Password:</h3>
            <input
              name="password"
              className={styles.login_input}
              type="password"
              required
            />
          </div>

          <div className={styles.inner_div}>
            <button type="submit" className={styles.login_button}>
              Login
            </button>
          </div>

          <div className={styles.login_newuser}>
            <Link to="/register">New User? Register here</Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
