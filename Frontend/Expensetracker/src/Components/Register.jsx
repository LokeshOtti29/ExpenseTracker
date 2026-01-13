import React from "react";
import styles from "./Register.module.css";
import { Link, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
const Register = () => {
  const navigate = useNavigate();
  const [data, setData] = useState({
    fullname: "",
    email: "",
    password: "",
    username: "",
  });

  useEffect(() => {
    const fetch = async () => {
      const resp = await axios.post(
        "http://localhost:3000/api/user/register",
        data
      );
      if (resp.data) navigate("/login");
      console.log(resp.data);
    };
    fetch();
  }, [data]);
  const handleSubmit = (e) => {
    e.preventDefault();

    const registerData = {
      fullname: e.target.fullname.value,
      email: e.target.email.value,
      username: e.target.username.value,
      password: e.target.password.value,
    };
    setData(registerData);
  };
  return (
    <div className={styles.register_outer}>
      <div className={styles.register_inner}>
        <form onSubmit={handleSubmit}>
          <div className={styles.inner_div}>
            <h2>Registration</h2>
          </div>
          <div className={styles.inner_div}>
            <div>
              <h3>Username:</h3>
              <div>
                <input
                  name="username"
                  className={styles.register_input}
                  type="text"
                  required
                />
              </div>
            </div>
          </div>
          <div className={styles.inner_div}>
            <div>
              <h3>Password:</h3>
              <div>
                <input
                  name="password"
                  className={styles.register_input}
                  type="password"
                  required
                />
              </div>
            </div>
          </div>
          <div className={styles.inner_div}>
            <div>
              <h3>Email:</h3>
              <div>
                <input
                  name="email"
                  className={styles.register_input}
                  type="Email"
                  required
                />
              </div>
            </div>
          </div>
          <div className={styles.inner_div}>
            <div>
              <h3>FullName:</h3>
              <div>
                <input
                  name="fullname"
                  className={styles.register_input}
                  type="text"
                  required
                />
              </div>
            </div>
          </div>
          <div className={styles.inner_div}>
            <button className={styles.register_button}>Register</button>
          </div>
          <div className={styles.register_newuser}>
            <Link to={"/login"}>Already have account? Login here</Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
