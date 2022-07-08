import React, { useState, useEffect, useReducer } from "react";
import { NavBar } from "./components/NavBar";
import { CarManagement } from "./components/CarManagement";
import { Fuel } from "./components/Fuel";
import { Costs } from "./components/Costs";
import { AddExpenses } from "./components/AddExpenses";
import { ExpensesList } from "./components/ExpensesList";
import "./App.css";

function reducer(state, action) {
  switch (action.type) {
    case "addVehicle":
      return [...state, action.payload];

    case "addExpense":
      return state.map((vehicle) =>
        vehicle.model === action.payload.activeVehicle
          ? {
              ...vehicle,
              expenses: [action.payload.expense, ...vehicle.expenses],
            }
          : vehicle
      );
  }
}

const initalState = JSON.parse(localStorage.getItem("vehicles")) || [];

function App() {
  const [vehicles, dispatch] = useReducer(reducer, initalState);
  const [activeVehicle, setActiveVehicle] = useState();

  const addVehicle = (model) => {
    dispatch({
      type: "addVehicle",
      payload: {
        model,
        expenses: [],
      },
    });
  };

  const addExpense = (expense) => {
    dispatch({
      type: "addExpense",
      payload: {
        activeVehicle,
        expense,
      },
    });
  };

  useEffect(() => {
    localStorage.setItem("vehicles", JSON.stringify(vehicles));
  }, [vehicles]);

  return (
    <>
      <NavBar />
      <CarManagement
        vehicles={vehicles}
        addVehicle={addVehicle}
        setActiveVehicle={setActiveVehicle}
      />
      {activeVehicle && (
        <Fuel vehicles={vehicles} activeVehicle={activeVehicle} />
      )}
      {activeVehicle && (
        <Costs vehicles={vehicles} activeVehicle={activeVehicle} />
      )}
      {activeVehicle &&
        vehicles.find((vehicle) => vehicle.model === activeVehicle)?.expenses
          .length > 0 && (
          <ExpensesList vehicles={vehicles} activeVehicle={activeVehicle} />
        )}
      {activeVehicle && (
        <AddExpenses
          vehicles={vehicles}
          activeVehicle={activeVehicle}
          addExpense={addExpense}
        />
      )}
    </>
  );
}

export default App;
