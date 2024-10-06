import { useEffect, useState } from "react";
import { TOTAL_PARKING_SPOTS } from "../../../constants";
import { useAlert } from "react-alert";

function useHandleParking() {
  const [parkingSpots, setParkingSpots] = useState(
    Array(TOTAL_PARKING_SPOTS).fill(null)
  );
  const [licensePlate, setLicensePlate] = useState("");
  const [filter, setFilter] = useState("");
  const [currentTime, setCurrentTime] = useState(new Date()); // Track current time

  useEffect(() => {
    // Update time every 60 seconds
    const interval = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000 * 60);

    // Cleanup the interval on component unmount
    return () => clearInterval(interval);
  }, []);
  const alert = useAlert();

  /**
   *
   * @returns {void}
   * @description Function to park a vehicle in the parking lot.
   * If the parking lot is full, an alert is shown.
   * If the license plate is empty, an alert is shown.
   * If the parking lot has space and the license plate is valid,
   */
  const parkVehicle = () => {
    const availableSpotIndex = parkingSpots.findIndex((spot) => spot === null);
    if (availableSpotIndex === -1) {
      //   alert("Parking lot is full!");
      alert.error("Parking lot is full!");
      return;
    }
    if (licensePlate?.trim() === "") {
      //   alert("Please enter a valid license plate.");
      alert.error("Please enter a valid license plate.");
      return;
    }
    //only unique license plates are allowed
    const isLicensePlateExists = parkingSpots.some(
      (spot) => spot?.plate?.toLowerCase() === licensePlate.toLowerCase()
    );
    if (isLicensePlateExists) {
      //   alert("License plate already exists in the parking lot.");
      alert.error("License plate already exists in the parking lot.");
      return;
    }
    const newParkingSpots = [...parkingSpots];
    newParkingSpots[availableSpotIndex] = {
      plate: licensePlate.toUpperCase(),
      slotNumber: availableSpotIndex + 1,
      parkedAt: new Date(),
    };
    setParkingSpots(newParkingSpots);
    setLicensePlate("");
    alert.success("Vehicle parked successfully!");
  };

  /**
   *
   * @param {*} index  Index of the vehicle to be removed.
   * @returns {void}
   * @description Function to remove a vehicle from the parking lot.
   */
  const removeVehicle = (index) => {
    const newParkingSpots = [...parkingSpots];
    newParkingSpots[index] = null;
    setParkingSpots(newParkingSpots);
  };

  /**
   *
   * @param {*} parkedAt  Date at which the vehicle was parked.
   * @returns {string}  Returns the duration for which the vehicle was parked.
   * @description Function to get the duration for which a vehicle was parked.
   */
  const getParkedDuration = (parkedAt) => {
    const now = new Date();
    const diff = Math.floor((currentTime - new Date(parkedAt)) / 1000);

    // const diff = Math.floor((now - new Date(parkedAt)) / 1000);
    const minutes = Math.floor(diff / 60);
    const seconds = diff % 60;
    return `${minutes} min, ${seconds} sec`;
  };

  /**
   *
   * @returns {Array}  Returns the filtered parking spots.
   * @description Function to filter the parking spots based on the license plate.
   * The filter is case-insensitive.
   */
  const filteredSpots = parkingSpots.filter(
    (spot) =>
      spot && spot?.plate?.toLowerCase()?.includes(filter?.toLowerCase())
  );
  return {
    parkingSpots,
    setParkingSpots,
    licensePlate,
    setLicensePlate,
    filter,
    setFilter,
    parkVehicle,
    removeVehicle,
    getParkedDuration,
    filteredSpots,
  };
}

export default useHandleParking;
