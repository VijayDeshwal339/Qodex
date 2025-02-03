import { createContext, useState, useEffect } from "react";
import axios from "axios";

export const WeatherContext = createContext();

const WeatherProvider = ({ children }) => {
    const [weatherData, setWeatherData] = useState(null);
    const [forecastData, setForecastData] = useState(null); // New state for the 5-day forecast
    const [error, setError] = useState(null);
    const [city, setCity] = useState(localStorage.getItem("lastCity") || "London");

    const API_KEY = import.meta.env.VITE_OPENWEATHER_API_KEY;
    
    const fetchWeather = async (cityName) => {
        try {
            // Fetch current weather
            const weatherResponse = await axios.get(
                `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEY}&units=metric`
            );
            setWeatherData(weatherResponse.data);
            
            // Fetch 5-day forecast
            const forecastResponse = await axios.get(
                `https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=${API_KEY}&units=metric`
            );
            setForecastData(forecastResponse.data);
            setError(null);
            localStorage.setItem("lastCity", cityName);
        } catch (err) {
            setError("City not found. Try again!");
        }
    };

    useEffect(() => {
        fetchWeather(city);
        const interval = setInterval(() => fetchWeather(city), 30000);
        return () => clearInterval(interval);
    }, [city]);

    return (
        <WeatherContext.Provider value={{ weatherData, forecastData, fetchWeather, setCity, error }}>
            {children}
        </WeatherContext.Provider>
    );
};

export default WeatherProvider;
