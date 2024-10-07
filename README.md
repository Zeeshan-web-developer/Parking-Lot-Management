# Parking Lot Management System

This is a simple Parking Lot Management System built using React. The app allows users to park vehicles by entering their license plate number, assigning them to an available parking spot, and removing them when needed. It also tracks how long each vehicle has been parked and allows filtering of parked vehicles based on license plate numbers.

<div align="center">
  <img src="/public/images/KanzWay-KSA-10-06-2024_10_53_PM.png" width="100%"/>
</div>

<div align="center">
<img src="/public/images/43d01a544d8f45d8afad2e8aa327b9f9-ezgif.com-video-to-gif-converter.gif" width="40" height="40" />

</div>

## Features

- **Park a Vehicle**: Enter a vehicle's license plate and assign it to a parking spot.
- **Remove a Vehicle**: Remove a vehicle from the parking lot, freeing up the spot.
- **Display Parked Vehicles**: Show a list of parked vehicles with their assigned parking spots and time parked.
- **Real-time Parking Timer**: Continuously updates the parked duration of each vehicle in real-time.
- **Filter Vehicles**: Filter the list of parked vehicles by entering part of the license plate.
- **Responsive UI**: The UI is responsive and works well across various screen sizes.

## Technologies Used

- **React**: For building the interactive user interface.
- **Tailwind CSS**: For styling the application and ensuring a responsive design.
- **JavaScript (ES6)**: For handling business logic and state management.

## Installation and Setup

### Prerequisites

Before running this project, ensure you have the following installed:

- [Node.js](https://nodejs.org/en/) (LTS version recommended)
- [npm](https://www.npmjs.com/) (comes with Node.js)

### Steps to Install

1. Clone the repository:
   ```bash
   https://github.com/Zeeshan-web-developer/Parking-Lot-Management.git
   ```
2. Navigate to the project folder:

   ```bash
   cd parking-lot-management-app
   ```

3. Install the required dependencies:

   ```bash
   npm install
   ```

4. Start the development server:

   ```bash
   npm start
   ```

5. Open the app in your browser:
   ```bash
   http://localhost:3000
   ```

## Folder Structure

````
src
├── components
│   ├── Button.jsx            # Reusable button component
│   ├── Header.jsx            # Header component for navigation
│   ├── InputField.jsx             # Reusable input field component
│   └── VehicleCard.jsx       # Card to display each parked vehicle
└── pages
     ├── home
        ├── components
        │   ├── AddedVehicles.jsx     # Component to display added vehicles
        │   ├── AddNewVehicle.jsx      # Component for adding a new vehicle
        │   ├── SearchVehicle.jsx      # Component for searching vehicles
        │   └── FullParking.jsx        # Component to indicate full parking lot
        ├── container
        │   └── Home.jsx               # Main container component for home page
        └── hooks
            └── useHandleParking.js    # Custom hook for parking logic

```── Routes -   # Route hanling for navigation

## Components

### 1. `InputField`

A reusable input component for entering the license plate number and filtering parked vehicles.

### 2. `Button`

A customizable button component used for actions like parking or removing vehicles.

### 3. `VehicleCard`

Displays a vehicle's license plate number and the time it has been parked. Includes a button to remove the vehicle.

### 4. `ParkingLot`

The main component that handles the logic for parking vehicles, removing vehicles, and displaying the parked vehicles.

## Customization

- **UI Customization**: The application uses [Tailwind CSS](https://tailwindcss.com/), which allows you to easily modify styles by editing the classes in the component files.
- **Functionality Customization**: You can modify the logic for parking, removing, or filtering vehicles in the `ParkingLot` component.

## Future Enhancements

Here are some ideas for future improvements:

- **Parking Spot Numbers**: Display the parking spot number assigned to each vehicle.
- **Login System**: Implement user authentication for a more personalized experience.
- **Payment Integration**: Add a payment system to charge for parking.
- **Parking Time Limit**: Add time limits for parking and charge penalties for overstaying.

## Contributing

Contributions are welcome! To contribute, follow these steps:

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

Feel free to modify the content based on your actual project details and repository link!
````
