import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGauge,
  faDroplet,
  faArrowTrendDown,
  faArrowRight,
} from "@fortawesome/free-solid-svg-icons";

import {
  getAverageConsumption,
  getLastConsumption,
} from "../utilites/utilities";

export const Fuel = ({ vehicles, activeVehicle }) => {
  const lastConsumption = getLastConsumption(vehicles, activeVehicle);
  const averageConsumption = getAverageConsumption(vehicles, activeVehicle);

  return (
    <>
      <p className="section-top">
        <FontAwesomeIcon
          icon={faGauge}
          className="icon"
          style={{ color: "#97b6df" }}
        />
        Fuel
      </p>
      <div className="container">
        <div className="container-item">
          {
            <p>
              <FontAwesomeIcon
                icon={faDroplet}
                className="icon"
                style={{ color: "#97b6df" }}
              />
              {averageConsumption ? averageConsumption.toFixed(2) : "---"}
              <span> l/100km</span>
            </p>
          }
          <p className="description">Avg. fuel consumption</p>
        </div>

        <div className="container-item">
          <p>
            <FontAwesomeIcon
              icon={faArrowTrendDown}
              className="icon"
              style={{ color: "#97b6df" }}
            />
            {lastConsumption ? lastConsumption.toFixed(2) : "---"}
            <span> l/100km</span>
          </p>

          <p className="description">Last fuel consumption</p>
        </div>

        <div className="container-item">
          <p>
            <FontAwesomeIcon
              icon={faArrowRight}
              className="icon"
              style={{ color: "#97b6df" }}
            />
            $
            {
              vehicles.find((vehicle) => vehicle.model === activeVehicle)
                ?.expenses[0]?.pricePerLiter
            }
          </p>
          <p className="description">Last fuel price</p>
        </div>
      </div>
    </>
  );
};
