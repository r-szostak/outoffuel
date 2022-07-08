import React from "react";
import { ExpenseItem } from "./ExpenseItem";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChartLine } from "@fortawesome/free-solid-svg-icons";

export const ExpensesList = ({ vehicles, activeVehicle }) => {
  return (
    <div className="expense-list">
      <p className="section-top">
        <FontAwesomeIcon
          icon={faChartLine}
          className="icon"
          style={{ color: "#97b6df" }}
        />
        Last expenses
      </p>
      <ul className="list">
        {vehicles
          .find((vehicle) => vehicle.model === activeVehicle)
          ?.expenses?.slice(0, 5)
          .map((expense, index) => (
            <ExpenseItem key={index} expense={expense} />
          ))}
      </ul>
    </div>
  );
};
