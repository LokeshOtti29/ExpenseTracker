import React from "react";
import styles from "./Register.module.css";
import { Link } from "react-router-dom";
const Register = () => {
  return (
    <div className={styles.register_outer}>
      <div className={styles.register_inner}>
        <div className={styles.inner_div}>
          <h2>Registration</h2>
        </div>
        <div className={styles.inner_div}>
          <div>
            <h3>Username:</h3>
            <div>
              <input className={styles.register_input} type="text" />
            </div>
          </div>
        </div>
        <div className={styles.inner_div}>
          <div>
            <h3>Password:</h3>
            <div>
              <input className={styles.register_input} type="password" />
            </div>
          </div>
        </div>
        <div className={styles.inner_div}>
          <div>
            <h3>Email:</h3>
            <div>
              <input className={styles.register_input} type="Email" />
            </div>
          </div>
        </div>
        <div className={styles.inner_div}>
          <div>
            <h3>FullName:</h3>
            <div>
              <input className={styles.register_input} type="text" />
            </div>
          </div>
        </div>
        <div className={styles.inner_div}>
          <button className={styles.register_button}>Login</button>
        </div>
        <div className={styles.register_newuser}>
          <Link to={"/login"}>Already have account? Login here</Link>
        </div>
      </div>
    </div>
  );
};

export default Register;
