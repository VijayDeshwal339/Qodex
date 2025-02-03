import { useContext } from "react";
import { WeatherContext } from "../context/WeatherContext";
import styled from "styled-components";

const ErrorMessage = () => {
    const { error } = useContext(WeatherContext);

    if (!error) return null;

    return <Error>{error}</Error>;
};

const Error = styled.div`
  color: red;
  margin-top: 10px;
`;

export default ErrorMessage;
