import SearchBar from "../components/SearchBar";
import WeatherCard from "../components/WeatherCard";
import ErrorMessage from "../components/ErrorMessage";

const Home = () => {
    return (
        <div 
            style={{  
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                 
                width:"100vw",
                textAlign: "center",
                padding: "20px"
            }}
        >
            <h1>Weather Dashboard</h1>
            <SearchBar/>
            <ErrorMessage />
            <WeatherCard />
        </div>
    );
};

export default Home;
