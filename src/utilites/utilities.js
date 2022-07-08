export const getAverageConsumption = (vehicles, activeVehicle) => {
  const foundActiveVehicle = vehicles.find(
    (vehicle) => vehicle.model === activeVehicle
  )?.expenses;
  let summaryReffueled = 0;
  let summaryOdometer = 0;

  if (foundActiveVehicle?.length > 1) {
    for (let i = 0; i < foundActiveVehicle.length - 1; i++) {
      if (
        foundActiveVehicle[i + 1].fullTank &&
        foundActiveVehicle[i].fullTank
      ) {
        summaryReffueled =
          summaryReffueled + parseFloat(foundActiveVehicle[i].reffueled);
        summaryOdometer =
          summaryOdometer +
          parseFloat(foundActiveVehicle[i].odometer) -
          parseFloat(foundActiveVehicle[i + 1].odometer);
      }
    }
  }
  return (summaryReffueled / summaryOdometer) * 100;
};

export const getLastConsumption = (vehicles, activeVehicle) => {
  const foundActiveVehicle = vehicles.find(
    (vehicle) => vehicle.model === activeVehicle
  )?.expenses;
  if (foundActiveVehicle?.length > 1) {
    for (let i = 0; i < foundActiveVehicle.length - 1; i++) {
      if (
        foundActiveVehicle[i + 1].fullTank &&
        foundActiveVehicle[i].fullTank
      ) {
        return (
          (foundActiveVehicle[i].reffueled /
            (foundActiveVehicle[i].odometer -
              foundActiveVehicle[i + 1].odometer)) *
          100
        );
      }
    }
  }
};

export const getMonthlyCosts = (vehicles, activeVehicle, month) => {
  const foundActiveVehicle = vehicles.find(
    (vehicle) => vehicle.model === activeVehicle
  )?.expenses;

  if (foundActiveVehicle?.length > 1) {
    const getData = foundActiveVehicle.filter(
      (expense) =>
        expense.date.includes(`-${month + 1}-`) ||
        expense.date.includes(`-0${month + 1}-`)
    );
    console.log(month);
    if (getData.length > 1) {
      return Object.values(getData)
        .reduce((t, value) => t + value.reffueled * value.pricePerLiter, 0)
        .toFixed(2);
    }
  }
};

export const minimalOdometerValue = (vehicles, activeVehicle) => {
  const foundActiveVehicle = vehicles.find(
    (vehicle) => vehicle.model === activeVehicle
  )?.expenses;

  return foundActiveVehicle[0] ? foundActiveVehicle[0].odometer + 1 : "0";
};
