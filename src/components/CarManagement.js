import React, { useState, useEffect } from "react";

export const CarManagement = ({ vehicles, addVehicle, setActiveVehicle }) => {
  const [model, setModel] = useState();
  const [duplicate, setDuplicate] = useState(false);

  useEffect(() => {
    if (vehicles.find((vehicle) => vehicle.model === model)) {
      setDuplicate(true);
    } else {
      setDuplicate(false);
    }
  }, [model, vehicles]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!duplicate) {
      addVehicle(model);
      setModel("");
    }
  };

  return (
    <div className="vehicle-select">
      <select
        onChange={(e) => {
          setActiveVehicle(e.target.value);
        }}
      >
        <option key={-1} value={""}>
          Please select vehicle
        </option>
        {vehicles.length > 0
          ? vehicles?.map((vehicle, index) => (
              <option key={index} value={vehicle.model}>
                {vehicle.model}
              </option>
            ))
          : null}
      </select>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Your model"
          value={model}
          required
          onChange={(e) => setModel(e.target.value)}
        ></input>
        <input type="submit" value="Add" />
      </form>
    </div>
  );
};
