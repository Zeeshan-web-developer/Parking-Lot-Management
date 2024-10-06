import React from "react";
import Header from "../../../components/Header";
import SearchVehicle from "../components/SearchVehicle";
import AddedVehicles from "../components/AddedVehicles";
import AddNewVehicle from "../components/AddNewVehicle";
import FullParking from "../components/FullParking";
import useHandleParking from "../hooks/useHandleParking";

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
      <Header Parking Lot Management />
      <AddNewVehicle {...{ licensePlate, setLicensePlate, parkVehicle }} />
      <SearchVehicle {...{ filter, setFilter, filteredSpots }} />
      <AddedVehicles {...{ filteredSpots, removeVehicle, getParkedDuration }} />
      <FullParking {...{ parkingSpots }} />
    </div>
  );
};

export default Home;
