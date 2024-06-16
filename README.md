# Weather Dashboard

## Description

A Weather Dashboard application built with React that shows the current weather and a 5-day forecast for a given city. It allows users to search for a city, view weather details, add cities to a list of favorites, and manage these favorites. The application uses the OpenWeatherMap API for fetching weather data and a JSON server to store and retrieve favorite cities. The UI is styled using Bootstrap for responsiveness and interactivity.

## Features

- Search for a city and display the current weather and 5-day forecast.
- Add cities to a list of favorites.
- Remove cities from the list of favorites.
- Display weather data for favorite cities.
- Toggle between Celsius and Fahrenheit units.
- Store and manage favorite cities using a JSON server.

## Technologies Used

- React
- Bootstrap
- JSON Server
- OpenWeatherMap API

## Installation

### Prerequisites

Make sure you have the following installed on your machine:

- Node.js (v14.x or later)
- npm (v6.x or later)

### Steps

1. **Clone the repository:**

    ```bash
    git clone https://github.com/your-username/weather-dashboard.git
    cd weather-dashboard
    ```

2. **Install the dependencies:**

    ```bash
    npm install
    ```

3. **Install `react-bootstrap` and `bootstrap`:**

    ```bash
    npm install react-bootstrap bootstrap
    ```

4. **Set up the JSON server:**

    Create a `db.json` file in the root directory with the following content:

    ```json
    {
      "favorites": []
    }
    ```

5. **Start the JSON server:**

    Open a terminal and run the following command:

    ```bash
    npm run json-server
    ```

6. **Add your OpenWeatherMap API key:**

    Create a `.env` file in the root directory and add your OpenWeatherMap API key:

    ```env
    REACT_APP_OPENWEATHERMAP_API_KEY=your_api_key_here
    ```

7. **Start the React application:**

    Open a terminal and run the following command:

    ```bash
    npm start
    ```

    The application should now be running on `http://localhost:3000`.

## Usage

1. Enter the name of a city in the search bar and click "Search" to view the current weather and 5-day forecast.
2. Click the "Add to Favorites" button to add the city to your list of favorites.
3. View and manage your favorite cities in the "Favorites" section.
4. Click the "Toggle to Fahrenheit/Celsius" button to switch between units.

## Project Structure

