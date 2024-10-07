import React from "react";
import { InputField, Button } from "components/index";
import PropTypes from "prop-types"; // ES6

function AddNewVehicle({ licensePlate, setLicensePlate, parkVehicle }) {
  return (
    <div className="flex-1 bg-white p-4 rounded shadow">
      <h2 className="text-xl font-semibold mb-2">Add New Vehicle</h2>
      <div className="flex flex-col sm:flex-row justify-center items-center gap-2 mb-6">
        <InputField
          value={licensePlate}
          onChange={(e) => setLicensePlate(e.target.value)}
          placeholder="Enter License Plate"
          className="flex-1" // Ensures the input takes up available space
        />
        <Button
          onClick={parkVehicle}
          label="Park Vehicle"
          color="bg-green-500"
        />
      </div>
    </div>
  );
}

AddNewVehicle.propTypes = {
  licensePlate: PropTypes.string.isRequired,
  setLicensePlate: PropTypes.func.isRequired,
  parkVehicle: PropTypes.func.isRequired,
};

export default AddNewVehicle;
