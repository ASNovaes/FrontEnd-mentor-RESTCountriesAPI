import React, { useState, useEffect, createContext } from "react";
import axios from "axios";

export const ContextApp = createContext();

export default function ContextProvider({ children }) {
  const [dataCountries, setDataCountries] = useState([]);

  const getDataAPI = (url) => {
    axios
      .get(url)
      .then((data) => setDataCountries(data.data))
      .catch((error) => error);
  };

  useEffect(() => getDataAPI("https://restcountries.eu/rest/v2/all"), []);

  const getDataByRegion = (region) => {
    region === "All"
      ? getDataAPI("https://restcountries.eu/rest/v2/all")
      : getDataAPI(`https://restcountries.eu/rest/v2/region/${region}`);
  };

  const getDataByNameCountry = (nameCountry) =>
    getDataAPI(`https://restcountries.eu/rest/v2/name/${nameCountry}`);

  return (
    <ContextApp.Provider
      value={{
        dataCountries,
        setDataCountries,
        getDataByRegion,
        getDataByNameCountry,
      }}
    >
      {children}
    </ContextApp.Provider>
  );
}
