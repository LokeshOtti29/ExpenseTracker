import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import styles from "./Updateexpense.module.css";

const Updateexpense = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    amount: "",
    date: "",
    description: "",
  });

  const [updateData, setUpdateData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchExpense = async () => {
      try {
        const token = localStorage.getItem("token");

        const res = await axios.get(
          `http://localhost:3000/api/expense/allexpense/${id}`,
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        );

        setFormData({
          name: res.data.name,
          amount: res.data.amount,
          date: res.data.date?.slice(0, 10),
          description: res.data.description,
        });
      } catch (err) {
        setError("Failed to load expense");
      }
    };

    fetchExpense();
  }, [id]);

  useEffect(() => {
    if (!updateData) return;

    const updateExpense = async () => {
      try {
        setLoading(true);
        setError("");

        const token = localStorage.getItem("token");

        await axios.put(
          `http://localhost:3000/api/expense/updateexpense/${id}`,
          updateData,
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        );

        navigate("/expenses");
      } catch (err) {
        setError("Update failed");
      } finally {
        setLoading(false);
      }
    };

    updateExpense();
  }, [updateData, id, navigate]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setUpdateData(formData);
  };

  return (
    <div className={styles.updateexpense_outer}>
      <div className={styles.updateexpense_inner}>
        <form onSubmit={handleSubmit}>
          <div className={styles.inner_div}>
            <h3 className={styles.updateexpense_title}>Update Expense</h3>
          </div>

          <div className={styles.inner_div}>
            <div>Expense Name:</div>
            <input
              className={styles.updateexpense_input}
              type="text"
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
              required
            />
          </div>

          <div className={styles.inner_div}>
            <div>Amount:</div>
            <input
              className={styles.updateexpense_input}
              type="number"
              value={formData.amount}
              onChange={(e) =>
                setFormData({ ...formData, amount: e.target.value })
              }
              required
            />
          </div>

          <div className={styles.inner_div}>
            <div>Date:</div>
            <input
              className={styles.updateexpense_input}
              type="date"
              value={formData.date}
              onChange={(e) =>
                setFormData({ ...formData, date: e.target.value })
              }
              required
            />
          </div>

          <div className={styles.inner_div}>
            <div>Description:</div>
            <textarea
              className={styles.updateexpense_input}
              value={formData.description}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  description: e.target.value,
                })
              }
            />
          </div>

          {error && <p style={{ color: "red" }}>{error}</p>}

          <div className={styles.inner_div}>
            <button
              type="submit"
              className={styles.updateexpense_button}
              disabled={loading}
            >
              {loading ? "Updating..." : "Update Expense"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Updateexpense;
