import React, { useEffect, useState } from "react";
import axios from "axios";
import styles from "./Expenselist.module.css";

const Expenselist = () => {
  const [expenses, setExpenses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  useEffect(() => {
    const fetchExpenses = async () => {
      try {
        const token = localStorage.getItem("token");

        const res = await axios.get(
          "http://localhost:3000/api/expense/allexpense",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        setExpenses(res.data);
      } catch (err) {
        setError("Failed to fetch expenses");
      } finally {
        setLoading(false);
      }
    };

    fetchExpenses();
  }, []);

  if (loading) return <p>Loading expenses...</p>;
  if (error) return <p style={{ color: "red" }}>{error}</p>;

  return (
    <div className={styles.list_outer}>
      <div className={styles.list_inner}>
        <h1 className={styles.list_title}>Expense List</h1>

        {expenses.length === 0 ? (
          <p>No expenses found</p>
        ) : (
          expenses.map((expense) => (
            <div key={expense._id} className={styles.expense_card}>
              <h3>{expense.name}</h3>
              <p>₹ {expense.amount}</p>
              <p>{expense.date?.slice(0, 10)}</p>
              <p>{expense.description}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Expenselist;
