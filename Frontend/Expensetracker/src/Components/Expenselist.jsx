import React from "react";
import styles from "./Expenselist.module.css";
const Expenselist = () => {
  return (
    <div className={styles.list_outer}>
      <div className={styles.list_inner}>
        <div>
          <h1 className={styles.list_title}>Expense List</h1>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default Expenselist;
