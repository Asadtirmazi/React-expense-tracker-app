import "./ExpenseItem.css";
import Card from "../UI/Card";
import React, { useState } from "react";
import ExpenseDate from "./ExpenseDate";

function ExpenseItem(props) {
  const [title, setTitle] = useState(props.title);

  const clickhandler = () => {
    setTitle("updated");
    console.log(title);
  };
  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
      <button onClick={clickhandler}>Chnage</button>
    </Card>
  );
}

export default ExpenseItem;
