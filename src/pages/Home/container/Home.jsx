import React from "react";
import Header from "components/Header";
import {
  SearchVehicle,
  AddedVehicles,
  AddNewVehicle,
  FullParking,
  RemainingSlots,
} from "pages/Home/components/index.js";

import useHandleParking from "pages/Home/hooks/useHandleParking";

const Home = () => {
  const {
    parkingSpots,
    licensePlate,
    setLicensePlate,
    filter,
    setFilter,
    parkVehicle,
    removeVehicle,
    getParkedDuration,
    filteredSpots,
  } = useHandleParking();
  return (
    <div className="container mx-auto p-6 min-h-screen ">
      <div>
        <Header Parking Lot Management>
          <RemainingSlots {...{ parkingSpots }} />
        </Header>

        <div className="flex flex-col md:flex-row sm:justify-between sm:gap-4 mb-6 space-y-2 md:space-y-0">
          <AddNewVehicle {...{ licensePlate, setLicensePlate, parkVehicle }} />
          <SearchVehicle {...{ filter, setFilter, filteredSpots }} />
        </div>
      </div>

      <AddedVehicles {...{ filteredSpots, removeVehicle, getParkedDuration }} />
      <FullParking {...{ parkingSpots }} />
    </div>
  );
};

export default Home;
