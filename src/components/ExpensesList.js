import React from "react";
import { ExpenseItem } from "./ExpenseItem";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChartLine, faSackDollar } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

export const ExpensesList = ({ vehicles, activeVehicle }) => {
  return (
    <>
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
      <Link to="/AllExpenses" className="link">
        <p className="section-top">
          <FontAwesomeIcon
            icon={faSackDollar}
            className="icon"
            style={{ color: "#97b6df" }}
          />
          Show all expenses
        </p>
      </Link>
    </>
  );
};
