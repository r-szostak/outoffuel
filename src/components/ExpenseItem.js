import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGasPump } from "@fortawesome/free-solid-svg-icons";

export const ExpenseItem = ({ expense }) => {
  return (
    <li>
      <FontAwesomeIcon
        icon={faGasPump}
        size="lg"
        className="icon"
        style={{ color: "#97b6df" }}
      />
      <div className="expense-item">
        <div className="expense">
          <div className="expense-data">
            <p>{expense.date}</p>
            <p>Odometer: {expense.odometer}</p>
          </div>
          <h3>${(expense.reffueled * expense.pricePerLiter).toFixed(2)}</h3>
        </div>
        <div className="expense-details">
          <p>{expense.reffueled}l -</p>
          <p>${expense.pricePerLiter}/l</p>
        </div>
      </div>
    </li>
  );
};
