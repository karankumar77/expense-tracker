import React, { useState } from "react";
import "./App.css";

function App() {
  const [expenses, setExpenses] = useState([]);
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState("");

  const addExpense = (e) => {
    e.preventDefault();
    if (!title || !amount || !date) return;
    const newExpense = {
      title,
      amount: parseFloat(amount),
      date,
    };
    setExpenses([...expenses, newExpense]);
    setTitle("");
    setAmount("");
    setDate("");
  };

  const removeExpense = (index) => {
    const updatedExpenses = expenses.filter((_, i) => i !== index);
    setExpenses(updatedExpenses);
  };

  const total = expenses.reduce((acc, exp) => acc + exp.amount, 0);

  return (
    <div className="app">
      <h1>💰 Expense Tracker</h1>
      <form onSubmit={addExpense} className="expense-form">
        <input
          type="text"
          placeholder="Enter Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="number"
          placeholder="Enter Amount (₹)"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
        <button type="submit">Add Expense</button>
      </form>

      <ul className="expense-list">
        {expenses.map((exp, index) => (
          <li key={index} className="expense-item">
            <span>{exp.title}</span>
            <span>₹{exp.amount.toFixed(2)}</span>
            <span>{exp.date}</span>
            <button className="remove-btn" onClick={() => removeExpense(index)}>❌ Remove</button>
          </li>
        ))}
      </ul>

      <h2 className="total">Total: ₹{total.toFixed(2)}</h2>
    </div>
  );
}

export default App;
