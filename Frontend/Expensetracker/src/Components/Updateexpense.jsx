import React from "react";
import styles from "./Updateexpense.module.css";
const Updateexpense = () => {
  return (
    <div className={styles.updateexpense_outer}>
      <div className={styles.updateexpense_inner}>
        <div className={styles.inner_div}>
          <h3 className={styles.updateexpense_title}>Update Expense</h3>
        </div>
        <div className={styles.inner_div}>
          <div>Expense Name:</div>
          <div>
            <input className={styles.updateexpense_input} type="text" />
          </div>
        </div>
        <div className={styles.inner_div}>
          <div>Amount:</div>
          <div>
            <input
              className={styles.updateexpense_input}
              type="number"
              name=""
              id=""
            />
          </div>
        </div>
        <div className={styles.inner_div}>
          <div>Date:</div>
          <div>
            <input className={styles.updateexpense_input} type="date" />
          </div>
        </div>
        <div className={styles.inner_div}>
          <div>Description:</div>
          <div>
            <textarea
              className={styles.updateexpense_input}
              name=""
              id=""
            ></textarea>
          </div>
        </div>
        <div className={styles.inner_div}>
          <button className={styles.updateexpense_button}>
            Update Expense
          </button>
        </div>
      </div>
    </div>
  );
};

export default Updateexpense;
