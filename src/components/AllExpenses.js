import React from "react";
import { ExpenseItem } from "./ExpenseItem";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChartLine,
  faArrowRotateBack,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

export const AllExpenses = ({ vehicles, activeVehicle }) => {
  return (
    <>
      <p className="section-top">
        <FontAwesomeIcon
          icon={faChartLine}
          className="icon"
          style={{ color: "#97b6df" }}
        />
        All expenses
      </p>

      <ul className="list">
        {vehicles
          .find((vehicle) => vehicle.model === activeVehicle)
          ?.expenses.map((expense, index) => (
            <ExpenseItem key={index} expense={expense} />
          ))}
      </ul>
      <Link to="/">
        <button className={`btn`}>
          <FontAwesomeIcon icon={faArrowRotateBack} />
        </button>
      </Link>
    </>
  );
};
