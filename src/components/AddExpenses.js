import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { minimalOdometerValue } from "../utilites/utilities";

export const AddExpenses = ({ vehicles, activeVehicle, addExpense }) => {
  const [reffueled, setReffueled] = useState();
  const [pricePerLiter, setPricePerLiter] = useState();
  const [odometer, setOdometer] = useState();
  const [fullTank, setFullTank] = useState(false);
  const [showAddExpense, setshowAddExpense] = useState(true);

  const minimalOdoValue = minimalOdometerValue(vehicles, activeVehicle);

  const handleSubmit = (e) => {
    e.preventDefault();
    addExpense({
      reffueled,
      pricePerLiter,
      odometer,
      fullTank,
      date: new Date().toISOString().split("T")[0],
    });
    setReffueled("");
    setPricePerLiter("");
    setFullTank(false);
    setshowAddExpense(!showAddExpense);
  };

  const handleButton = (e) => {
    e.preventDefault();
    setshowAddExpense(!showAddExpense);
  };

  return (
    <>
      <button
        className={`btn ${showAddExpense ? "show" : "hide"}`}
        onClick={handleButton}
      >
        <FontAwesomeIcon icon={faPlus} />
      </button>
      {!showAddExpense && (
        <form onSubmit={handleSubmit}>
          <input
            type="number"
            step=".01"
            min="0"
            placeholder="Reffueled liters"
            value={reffueled}
            required
            onChange={(e) => setReffueled(e.target.value)}
          ></input>

          <input
            type="number"
            step=".01"
            min="0"
            placeholder="Price per liter"
            value={pricePerLiter}
            required
            onChange={(e) => setPricePerLiter(e.target.value)}
          ></input>
          <input
            type="number"
            min={parseInt(minimalOdoValue) + 1}
            step="1"
            placeholder="Odometer"
            value={odometer}
            required
            onChange={(e) => setOdometer(e.target.value)}
          ></input>
          <label htmlFor="fullTank">Refueling a full tank</label>
          <input
            id="fullTank"
            type="checkbox"
            value={fullTank}
            onChange={(e) => setFullTank(!fullTank)}
            checked={fullTank}
          ></input>
          <input type="submit" value="ADD" />
        </form>
      )}
    </>
  );
};
