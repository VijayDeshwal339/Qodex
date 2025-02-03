import { useState, useContext } from "react";
import { WeatherContext } from "../context/WeatherContext";
import styled from "styled-components";

const SearchBar = () => {
    const [input, setInput] = useState("");
    const { fetchWeather, setCity } = useContext(WeatherContext);

    const handleSearch = () => {
        if (input.trim()) {
            setCity(input);
            fetchWeather(input);
            setInput("");
        }
    };

    return (
        <SearchContainer>
            <input
                type="text"
                placeholder="Enter city..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={(e) => e.key === "Enter" && handleSearch()}
            />
            <button onClick={handleSearch}>Search</button>
        </SearchContainer>
    );
};

const SearchContainer = styled.div`
  display: flex;
  gap: 10px;
  margin-top:20px;
  margin-bottom: 20px;
  
  input {
    width: 90%;
  }
  
  button {
    background: #FF7F50;
    border: none;
    padding: 10px;
    cursor: pointer;
    color: white;
    outline:none;
    border-radius: 5px;
  }
`;

export default SearchBar;
