import React, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = () => {
  //const [enteredTitle, setEnteredTitle] = useState("");
  //const [enteredDate, setEnteredDate] = useState("");
  //const [enteredAmount, setEnteredAmount] = useState("");

  const [UserInput, SetUserInput] = useState({
    enteredTitle: "",
    enteredAmount: "",
    enteredDate: "",
  });

  const titleChangeHandler = (e) => {
    SetUserInput({
      ...UserInput,
      enteredTitle: e.target.value,
    });
    //console.log(e.target.value);
    //setEnteredTitle(e.target.value);
  };

  const AmountChangeHandler = (e) => {
    SetUserInput({
      ...UserInput,
      enteredAmount: e.target.value,
    });
    //console.log(e.target.value);
    //setEnteredAmount(e.target.value);
  };

  const DateChangeHandler = (e) => {
    SetUserInput({
      ...UserInput,
      enteredDate: e.target.value,
    });
    //setEnteredDate(e.target.value);
  };

  return (
    <form className="expense-form">
      <div className="new-expense__control">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" onChange={titleChangeHandler} />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            onChange={AmountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2021-01-01"
            max="2023-12-31"
            onChange={DateChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
