import Button from "./Button";

const VehicleCard = ({ vehicle, onRemove, index, parkedDuration }) => {
  return (
    <div className="border rounded p-4 flex justify-between items-center bg-gray-100">
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

export default VehicleCard;
