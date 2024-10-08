import PropTypes from "prop-types"; // ES6
import Button from "./Button";

const VehicleCard = ({ vehicle, onRemove, index, parkedDuration }) => {
  return (
    <div
      className=" hover:shadow-lg transition duration-300 ease-in-out
    
    border rounded p-4 flex justify-between items-center bg-gray-100"
    >
      <div>
        <p className="text-lg font-bold">License Plate: {vehicle.plate}</p>
        <p className="text-sm text-gray-600">Parked for {parkedDuration}</p>
        <p className="text-sm text-gray-600">
          Parking Spot: {vehicle?.slotNumber}
        </p>
      </div>
      <Button
        onClick={() => onRemove(index)}
        label="Remove"
        color="bg-red-500"
      />
    </div>
  );
};

VehicleCard.propTypes = {
  vehicle: PropTypes.shape({
    plate: PropTypes.string.isRequired,
    slotNumber: PropTypes.number.isRequired,
    parkedAt: PropTypes.instanceOf(Date),
  }).isRequired,
  onRemove: PropTypes.func.isRequired,
  index: PropTypes.number.isRequired,
  parkedDuration: PropTypes.string.isRequired,
};

export default VehicleCard;
