import React from "react";
import styles from "./Home.module.css";
import { useNavigate } from "react-router-dom";
const Home = () => {
  const navigate = useNavigate();
  return (
    <div className={styles.Home_outer}>
      <div className={styles.Home_inner}>
        <div className={styles.Home_title}>Welcome to Expense Tracker</div>
        <div className={styles.Home_navigation}>
          <div onClick={() => navigate("/Home/addExpense")}>Add Expense</div>
          <div onClick={() => navigate("/Home/Expenselist")}>Expense List</div>
        </div>
        <div>
          <p>
            Track and manage your expenses effectively. Use the navigation link
            to view the expenses or view your expense list
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
