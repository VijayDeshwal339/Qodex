# Weather Dashboard

This is a weather dashboard built with React.js that provides real-time weather information, including current weather conditions and a 5-day forecast. It uses the OpenWeather API to fetch weather data, and styled-components for styling.

## Features

- Displays current weather information including temperature, humidity, and wind speed.
- 5-day weather forecast with daily temperature and weather conditions.
- Search functionality to look up weather data for any city.
- Automatic time display that updates every second.
- Error handling for invalid city names.
- Responsive layout that adapts to different screen sizes.

## Tech Stack

- **Frontend**: React.js, styled-components
- **API**: OpenWeather API
- **State Management**: Context API
- **Routing**: React Router
- **CSS**:  styled-components

## Setup

To set up the project locally, follow these steps:

### 1. Clone the repository

```bash
git clone https://github.com/VijayDeshwal339/Qodex.git
cd weather-dashboard

npm install

VITE_OPENWEATHER_API_KEY=your_api_key_here

npm start


file structure
src/
│
├── components/          # Reusable components (e.g., SearchBar, WeatherCard)
├── context/             # React Context for state management
├── pages/               # Pages (e.g., Home)
├── styles/              # Global styles using styled-components
├── App.js               # Main application component
├── index.js             # Application entry point
└── .env                 # Environment variables
