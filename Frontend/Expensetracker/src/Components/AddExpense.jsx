import React from "react";
import styles from "./AddExpense.module.css";
const AddExpense = () => {
  return (
    <div className={styles.addexpense_outer}>
      <div className={styles.addexpense_inner}>
        <div className={styles.inner_div}>
          <h3 className={styles.addexpense_title}>Add New Expense</h3>
        </div>
        <div className={styles.inner_div}>
          <div>Expense Name:</div>
          <div>
            <input className={styles.addexpense_input} type="text" />
          </div>
        </div>
        <div className={styles.inner_div}>
          <div>Amount:</div>
          <div>
            <input
              className={styles.addexpense_input}
              type="number"
              name=""
              id=""
            />
          </div>
        </div>
        <div className={styles.inner_div}>
          <div>Date:</div>
          <div>
            <input className={styles.addexpense_input} type="date" />
          </div>
        </div>
        <div className={styles.inner_div}>
          <div>Description:</div>
          <div>
            <textarea
              className={styles.addexpense_input}
              name=""
              id=""
            ></textarea>
          </div>
        </div>
        <div className={styles.inner_div}>
          <button className={styles.addexpense_button}>Add Expense</button>
        </div>
      </div>
    </div>
  );
};

export default AddExpense;
