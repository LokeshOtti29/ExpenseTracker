import React, { useEffect, useState } from "react";
import axios from "axios";
import styles from "./AddExpense.module.css";

const AddExpense = () => {
  const [expenseData, setExpenseData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  useEffect(() => {
    if (!expenseData) return;

    const addExpense = async () => {
      try {
        setLoading(true);
        setError("");
        setSuccess("");

        const token = localStorage.getItem("token");

        const res = await axios.post(
          "http://localhost:3000/api/expense/addexpense",
          expenseData,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        console.log("Expense Added:", res.data);
        setSuccess("Expense added successfully ");
      } catch (err) {
        setError(err.response?.data?.message || "Failed to add expense");
      } finally {
        setLoading(false);
      }
    };

    addExpense();
  }, [expenseData]);

  const handleSubmit = (e) => {
    e.preventDefault();

    setExpenseData({
      name: e.target.name.value,
      amount: Number(e.target.amount.value),
      date: e.target.date.value,
      description: e.target.description.value,
    });

    e.target.reset();
  };

  return (
    <div className={styles.addexpense_outer}>
      <div className={styles.addexpense_inner}>
        <form onSubmit={handleSubmit}>
          <div className={styles.inner_div}>
            <h3 className={styles.addexpense_title}>Add New Expense</h3>
          </div>

          <div className={styles.inner_div}>
            <div>Expense Name:</div>
            <input
              className={styles.addexpense_input}
              name="name"
              type="text"
              required
            />
          </div>

          <div className={styles.inner_div}>
            <div>Amount:</div>
            <input
              className={styles.addexpense_input}
              name="amount"
              type="number"
              required
            />
          </div>

          <div className={styles.inner_div}>
            <div>Date:</div>
            <input
              className={styles.addexpense_input}
              name="date"
              type="date"
              required
            />
          </div>

          <div className={styles.inner_div}>
            <div>Description:</div>
            <textarea
              className={styles.addexpense_input}
              name="description"
            ></textarea>
          </div>

          {error && <p style={{ color: "red" }}>{error}</p>}
          {success && <p style={{ color: "green" }}>{success}</p>}

          <div className={styles.inner_div}>
            <button
              type="submit"
              className={styles.addexpense_button}
              disabled={loading}
            >
              {loading ? "Adding..." : "Add Expense"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddExpense;
