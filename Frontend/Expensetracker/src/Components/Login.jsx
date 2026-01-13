import React from "react";
import styles from "./Login.module.css";
const Login = () => {
  return (
    <div className={styles.login_outer}>
      <div className={styles.login_inner}>
        <div className={styles.inner_div}>
          <h2>Login Page</h2>
        </div>
        <div className={styles.inner_div}>
          <div>
            <h3>Username:</h3>
            <div>
              <input className={styles.login_input} type="text" />
            </div>
          </div>
        </div>
        <div className={styles.inner_div}>
          <div>
            <h3>Password:</h3>
            <div>
              <input className={styles.login_input} type="password" />
            </div>
          </div>
        </div>
        <div className={styles.inner_div}>
          <button className={styles.login_button}>Login</button>
        </div>
        <div className={styles.login_newuser}>
          <a href="#">New User? Register here</a>
        </div>
      </div>
    </div>
  );
};

export default Login;
