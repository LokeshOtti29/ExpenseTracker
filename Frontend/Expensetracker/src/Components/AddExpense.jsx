import React from "react";

const AddExpense = () => {
  return (
    <div>
      <div>
        <div>
          <h5>Add New Expense</h5>
        </div>
        <div>
          <div>Expense Name:</div>
          <div>
            <input type="text" />
          </div>
        </div>
        <div>
          <div>Amount:</div>
          <div>
            <input type="number" name="" id="" />
          </div>
        </div>
        <div>
          <div>Date:</div>
          <div>
            <input type="date" />
          </div>
        </div>
        <div>
          <div>Description:</div>
          <div>
            <textarea name="" id=""></textarea>
          </div>
        </div>
        <div>
          <button>Add Expense</button>
        </div>
      </div>
    </div>
  );
};

export default AddExpense;
