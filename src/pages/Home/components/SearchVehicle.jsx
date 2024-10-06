import React from "react";
import InputField from "../../../components/InputField";

function SearchVehicle({ filter, setFilter, filteredSpots }) {
  if (filteredSpots?.length < 1) return null;
  return (
    <div className="mb-4 flex justify-center items-center gap-2">
      <InputField
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
        placeholder="Filter by License Plate"
      />
    </div>
  );
}

export default SearchVehicle;
