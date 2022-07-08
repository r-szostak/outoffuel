import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGasPump, faArrowRight } from "@fortawesome/free-solid-svg-icons";

export const ExpenseItem = ({ expense }) => {
  return (
    <li>
      <FontAwesomeIcon
        icon={faGasPump}
        size="lg"
        className="icon"
        style={{ color: "#97b6df" }}
      />
      <div className="expense-container">
        <div className="container-item">
          <p className="expense-description">{expense.date}</p>
          <p className="expense-description">Odometer: {expense.odometer}</p>
        </div>
        <div className="container-item">
          <h3>${(expense.reffueled * expense.pricePerLiter).toFixed(2)}</h3>
        </div>

        <div className="container-item">
          <p className="description">
            {expense.reffueled}l{" "}
            <FontAwesomeIcon
              icon={faArrowRight}
              style={{ color: "#97b6df" }}
              size="xs"
            />{" "}
            ${expense.pricePerLiter}/l
          </p>
        </div>
      </div>
    </li>
  );
};
