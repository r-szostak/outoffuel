import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCoins,
  faMoneyBillTransfer,
} from "@fortawesome/free-solid-svg-icons";
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
    <>
      <p className="section-top">
        <FontAwesomeIcon
          icon={faCoins}
          style={{ color: "#97b6df" }}
          className="icon"
        />
        Costs
      </p>

      <div className="container">
        <div className="container-item">
          <p>
            <FontAwesomeIcon
              icon={faMoneyBillTransfer}
              className="icon"
              style={{ color: "#97b6df" }}
            />
            ${actualMonthCost ? actualMonthCost : "0.00"}
          </p>
          <p className="description">Actual month</p>
        </div>

        <div className="container-item">
          <p>
            <FontAwesomeIcon
              icon={faMoneyBillTransfer}
              className="icon"
              style={{ color: "#97b6df" }}
            />
            ${previousMonthCost ? previousMonthCost : "0.00"}
          </p>
          <p className="description">Previous month</p>
        </div>
      </div>
    </>
  );
};
