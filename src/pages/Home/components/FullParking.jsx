import React from "react";

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

export default React.memo(FullParking);
