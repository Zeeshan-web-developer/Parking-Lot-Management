import React from "react";
import { FaParking } from "react-icons/fa";

const RemainingSlots = ({ parkingSpots }) => {
  const remainingSlots = parkingSpots?.filter((spot) => spot === null).length;

  return (
    <div className="flex flex-col items-center justify-center bg-blue-200 border border-blue-300 rounded-lg p-2 shadow-md mb-1">
      <div className="flex items-center space-x-1">
        <FaParking className="text-blue-600 text-xs" />
        <span className="text-xs font-semibold text-gray-800">
          Remaining Slots
        </span>
      </div>
      <div className=" text-sm font-bold text-gray-700">{remainingSlots}</div>
      <p className="text-sm text-gray-500 ">
        of {parkingSpots.length} total slots
      </p>
    </div>
  );
};

export default React.memo(RemainingSlots);
