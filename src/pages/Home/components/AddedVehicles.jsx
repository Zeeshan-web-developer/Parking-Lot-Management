import React from "react";
import { VehicleCard } from "components/index";
import PropTypes from "prop-types"; // ES6

function AddedVehicles({ filteredSpots, removeVehicle, getParkedDuration }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {filteredSpots?.length > 0 ? (
        filteredSpots?.map((spot, index) => (
          <VehicleCard
            key={index}
            vehicle={spot}
            onRemove={removeVehicle}
            index={index}
            parkedDuration={getParkedDuration(spot.parkedAt)}
          />
        ))
      ) : (
        <div className="text-center text-gray-500">No vehicles found</div>
      )}
    </div>
  );
}

AddedVehicles.propTypes = {
  filteredSpots: PropTypes.arrayOf(PropTypes.object),
  removeVehicle: PropTypes.func.isRequired,
  getParkedDuration: PropTypes.func.isRequired,
};

export default React.memo(AddedVehicles);
