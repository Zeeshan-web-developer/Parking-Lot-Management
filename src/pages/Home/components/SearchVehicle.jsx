import React from "react";
import InputField from "components/InputField";

function SearchVehicle({ filter, setFilter, filteredSpots }) {
  if (filteredSpots?.length < 1) return null;
  return (
    <div className="flex-1 bg-white p-4 rounded shadow">
      <h2 className="text-xl font-semibold mb-2">Search Vehicle</h2>
      <div className="mb-4 flex justify-center items-center gap-2">
        <InputField
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          placeholder="Filter by License Plate"
          className="flex-1" // Ensure the input takes up available space
        />
      </div>
    </div>
  );
}

export default React.memo(SearchVehicle);
