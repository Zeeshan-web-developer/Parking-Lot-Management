import React from "react";
import InputField from "../../../components/InputField";
import Button from "../../../components/Button";

function AddNewVehicle({ licensePlate, setLicensePlate, parkVehicle }) {
  return (
    <div className="mb-6 flex justify-center items-center gap-2">
      <InputField
        value={licensePlate}
        onChange={(e) => setLicensePlate(e.target.value)}
        placeholder="Enter License Plate"
      />
      <Button onClick={parkVehicle} label="Park Vehicle" color="bg-green-500" />
    </div>
  );
}

export default AddNewVehicle;
