import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import { PiCloudSunFill } from "react-icons/pi";
import { FiSun } from "react-icons/fi";
import { FaCloud } from "react-icons/fa";
import { FaCloudRain } from "react-icons/fa";
import { WeatherContext } from "../context/WeatherContext"; // Import the WeatherContext

const WeatherContainer = styled.div`
  padding: 40px;
  background: linear-gradient(to bottom, #7f9fad, #7ea07f);
  border-radius: 15px;
  color: white;
  font-family: Arial, sans-serif;
  max-width: 700px;
  margin: auto;

  @media (max-width: 750px) {
    padding: 30px;
    max-width: 90%;
  }
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 22px;
  font-weight: bold;

  @media (max-width: 600px) {
    flex-direction: column;
    align-items: center;
    font-size: 18px;
  }
`;

const WeatherIcon = styled.div`
  display: flex;
  justify-content: center;
  margin: 10px 0;

  svg {
    width: 80px;
    height: 80px;
  }

  @media (max-width: 600px) {
    svg {
      width: 50px;
      height: 50px;
    }
  }
`;

const WeatherInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 24px;
  font-weight: 400;
  margin-top: 20px;
  justify-content: center;

  @media (max-width: 600px) {
    font-size: 18px;
  }
`;

const Details = styled.div`
  display: flex;
  align-items: center;
  gap: 40px;
  justify-content: center;
  margin-top: 20px;

  @media (max-width: 600px) {
    flex-direction: column;
    gap: 15px;
  }
`;

const Temp = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

const Temp1 = styled.div`
  font-size: 48px;
  font-weight: bold;

  @media (max-width: 600px) {
    font-size: 32px;
  }
`;

const Forecast = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 16px;
  align-items: center;
`;

const Fivedays = styled.div`
  display: flex;
  gap: 15px;
  justify-content: center;
  margin-top: 30px;

  @media (max-width: 600px) {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 10px;
  }
`;

const Place = styled.div`
  display: flex;
  flex-direction: column;
  align-items: end;
  font-size: 14px;
`;

const Day = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 15px;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 12px;
  width: 100px;
  text-align: center;

  @media (max-width: 600px) {
    width: auto;
    padding: 8px;
  }
`;

const WeatherApp = () => {
  const { weatherData, forecastData, error } = useContext(WeatherContext);
  const [time, setTime] = useState(new Date().toLocaleTimeString());

  if (error) {
    return <div>{error}</div>; 
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);

    return () => clearInterval(interval); 
  }, []);

  const getWeatherIcon = (description) => {
    switch (description.toLowerCase()) {
      case "clear sky":
        return <FiSun />;
      case "few clouds":
      case "scattered clouds":
        return <FaCloud />;
      case "broken clouds":
      case "overcast clouds":
        return <FaCloud />;
      case "rain":
      case "shower rain":
      case "light rain":
        return <FaCloudRain />;
      default:
        return <PiCloudSunFill />;
    }
  };

  
  const getUniqueDays = (forecastData) => {
    const days = [];
    const today = new Date().toLocaleDateString('en-GB', { year: 'numeric', month: 'short', day: 'numeric' });
  
    
    forecastData?.list.forEach((entry) => {
      const day = new Date(entry.dt * 1000);
      const date = day.toLocaleDateString('en-GB', { year: 'numeric', month: 'short', day: 'numeric' });
  
     
      if (date !== today && !days.some((d) => d.date === date)) {
        days.push({
          date,
          dayOfWeek: day.toLocaleDateString('en-GB', { weekday: 'short' }),
          temp: entry.main.temp,
          icon: entry.weather[0].description,
        });
      }
    });
  
    return days.slice(0, 5); 
  };
  

  
  const forecastDays = getUniqueDays(forecastData);

  return (
    <WeatherContainer>
      <Header>
        <div>{weatherData?.name}</div>
        <Place>
          <div>{weatherData?.sys.country}</div>
          <div>{time}</div>
        </Place>
      </Header>

      <WeatherIcon>
        <PiCloudSunFill />
      </WeatherIcon>

      <WeatherInfo>
        <FiSun />
        <div>{weatherData?.weather[0].description}</div>
      </WeatherInfo>

      <Details>
        <Temp>
          <Temp1>{weatherData?.main.temp}°C</Temp1>
          <div>{new Date(weatherData?.dt * 1000).toLocaleDateString()}</div>
        </Temp>

        <Forecast>
          <PiCloudSunFill size={50} />
          <div>{weatherData?.wind.speed} mph / {weatherData?.main.humidity}%</div>
        </Forecast>
      </Details>

      <Fivedays>
        {forecastDays.map((day, index) => (
          <Day key={index}>
            <div>{day.dayOfWeek}</div>
            {getWeatherIcon(day.icon)}
            <div>{day.temp}°C</div>
          </Day>
        ))}
      </Fivedays>
    </WeatherContainer>
  );
};

export default WeatherApp;
