import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import WeatherProvider from "./context/WeatherContext";
import GlobalStyles from "./styles/GlobalStyles";

const App = () => {
    return (
        <WeatherProvider>
            <GlobalStyles />
            <Router>
                <Routes>
                    <Route path="/" element={<Home />} />
                </Routes>
            </Router>
        </WeatherProvider>
    );
};

export default App;
