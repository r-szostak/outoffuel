import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoins } from "@fortawesome/free-solid-svg-icons";
import { getMonthlyCosts } from "../utilites/utilities";

export const Costs = ({ vehicles, activeVehicle }) => {
  const actualMonthCost = getMonthlyCosts(
    vehicles,
    activeVehicle,
    new Date().getMonth()
  );
  const previousMonthCost = getMonthlyCosts(
    vehicles,
    activeVehicle,
    new Date().getMonth() - 1
  );

  return (
    <div className="expense-list">
      <p className="section-top">
        <FontAwesomeIcon
          icon={faCoins}
          style={{ color: "#97b6df" }}
          className="icon"
        />
        Costs
      </p>

      <div className="costs">
        <h3>W tym miesiącu</h3>
        <p>
          <span>$</span>
          {actualMonthCost ? actualMonthCost : "$0.00"}
        </p>
        <h3>W poprzednim miesiącu</h3>
        <p>
          <span> $</span>
          {previousMonthCost ? previousMonthCost : "0.00"}
        </p>
      </div>
    </div>
  );
};
