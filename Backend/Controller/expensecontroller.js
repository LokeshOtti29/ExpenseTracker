const expensemodel = require("../Model/expensemodel");

const addexpense = async (req, res) => {
  try {
    const { expensename, description, amount, date } = req.body;
    console.log(req.body);
    const userId = req.id;
    console.log(req.id);
    if (!expensename || !description || !amount || !date) {
      return res.status(400).json({
        message: "Something is missing.",
        success: false,
      });
    }
    const expense = await expensemodel.create({
      expensename,
      description,
      amount: Number(amount),
      date,
      created_by: userId,
    });
    return res.status(201).json({
      message: "New expense created successfully.",
      expense,
      success: true,
    });
  } catch (error) {
    console.log(error);
  }
};
const updateexpense = async (req, res) => {
  try {
    const { expensename, description, amount, date } = req.body;
    console.log(req.body);
    const expenseId = req.params._id;
    const expense = await expensemodel.findOne({ _id: expenseId });
    if (!expense) {
      return res.status(404).json({
        message: "Expense not found",
        success: false,
      });
    }
    expense.expensename = expensename;
    expense.description = description;
    expense.amount = Number(amount);
    expense.date = date;
    await expense.save();
    return res.status(201).json({
      message: "expense updated successfully.",
      expense,
      success: true,
    });
  } catch (error) {
    console.log(error);
  }
};
const getexpense = async (req, res) => {
  try {
    const userId = req.id;

    const expense = await expensemodel.find({ created_by: userId });

    if (!expense) {
      return res.status(404).json({
        message: "expense not found.",
        success: false,
      });
    }
    return res.status(200).json({
      expense,
      success: true,
    });
  } catch (error) {
    console.log(error);
  }
};

module.exports = { addexpense, getexpense, updateexpense };
