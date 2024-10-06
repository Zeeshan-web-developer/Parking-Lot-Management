import React from "react";
import Header from "components/Header";
import SearchVehicle from "pages/Home/components/SearchVehicle";
import AddedVehicles from "pages/Home/components/AddedVehicles";
import AddNewVehicle from "pages/Home/components/AddNewVehicle";
import FullParking from "pages/Home/components/FullParking";
import useHandleParking from "pages/Home/hooks/useHandleParking";
import RemainingSlots from "pages/Home/components/RemainngSlots";

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
    <div className="container mx-auto p-6">
      <Header Parking Lot Management>
        <RemainingSlots {...{ parkingSpots }} />
      </Header>

      {/* <AddNewVehicle {...{ licensePlate, setLicensePlate, parkVehicle }} />
      <SearchVehicle {...{ filter, setFilter, filteredSpots }} /> */}

      <div className="flex flex-col sm:flex-row sm:justify-between sm:gap-4 mb-6">
        <AddNewVehicle {...{ licensePlate, setLicensePlate, parkVehicle }} />
        <SearchVehicle {...{ filter, setFilter, filteredSpots }} />
      </div>

      <AddedVehicles {...{ filteredSpots, removeVehicle, getParkedDuration }} />
      <FullParking {...{ parkingSpots }} />
    </div>
  );
};

export default Home;
