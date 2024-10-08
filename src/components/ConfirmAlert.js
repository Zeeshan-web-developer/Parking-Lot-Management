import React from "react";
import { confirmAlert } from "react-confirm-alert"; // Import

function ConfirmAlert() {
  const submit = ({ remove }) => {
    confirmAlert({
      title: "Remove Vehicle",
      message: "Are you sure you want to remove the vehicle?",
      buttons: [
        {
          label: "Yes",
          onClick: () => {
            remove(); // Call the removeVehicle function here
          },
        },
        {
          label: "No",
          onClick: () => {},
        },
      ],
    });
  };
  return {
    removeVehicleDialog: submit,
  };
}

export default ConfirmAlert;
