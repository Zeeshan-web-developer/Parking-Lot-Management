import React from "react";
import PropTypes from "prop-types"; // ES6

function FullParking({ parkingSpots }) {
  return (
    <>
      {parkingSpots.every((spot) => spot !== null) && (
        <p className="mt-4 text-center text-red-600 font-bold">
          Parking lot is full. No spots available.
        </p>
      )}
    </>
  );
}

FullParking.propTypes = {
  parkingSpots: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default React.memo(FullParking);
