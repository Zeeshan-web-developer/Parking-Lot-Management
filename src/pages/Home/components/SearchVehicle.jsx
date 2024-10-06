import React from "react";
import { InputField } from "components/index";
import { MdClear } from "react-icons/md";

function SearchVehicle({ filter, setFilter, filteredSpots }) {
  return (
    <div className="flex-1 bg-white p-4 rounded shadow">
      <h2 className="text-xl font-semibold mb-2">Search Vehicle</h2>
      <div className="mb-4 flex justify-center items-center gap-2">
        <InputField
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          placeholder="Filter by License Plate"
          className="flex-1" // Ensure the input takes up available space
          icon={filter && <MdClear className="text-gray-400" />}
          handleButtonClick={() => setFilter("")}
        />
      </div>
    </div>
  );
}

export default React.memo(SearchVehicle);
