import React from "react";
import { FaParking } from "react-icons/fa";
import PropTypes from "prop-types"; // ES6

const RemainingSlots = ({ parkingSpots }) => {
  const remainingSlots = parkingSpots?.filter((spot) => spot === null).length;

  return (
    <div className="flex flex-col items-center justify-center bg-black border border-black rounded-lg p-2 shadow-md mb-1">
      <div className="flex items-center space-x-1">
        <FaParking className=" text-xs" />
        <span className="text-xs font-semibold ">Remaining Slots</span>
      </div>
      <div className=" text-sm font-bold ">{remainingSlots}</div>
      <p className="text-sm">of {parkingSpots.length} total slots</p>
    </div>
  );
};

RemainingSlots.propTypes = {
  parkingSpots: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default React.memo(RemainingSlots);
