import React, { useState, useContext, useEffect } from "react";
import { StyledContainerForm, StyledOptions } from "./styles.js";
import { ContextApp } from "../Context/index.js";

export default function Form() {
  const { getDataByRegion, getDataByNameCountry } = useContext(ContextApp);
  const [openOptions, setOpenOptions] = useState(false);
  const [countryFound, setCountryFound] = useState("");
  const [optionSelected, setOptionSelected] = useState("Filter by Region");

  const getOptionRegionClicked = (e) => {
    const regionName = e.target.textContent;

    if (regionName === "Clear Filter") {
      setOptionSelected("Filter by Region");
      getDataByRegion("All");
    } else {
      setOptionSelected(regionName);
      getDataByRegion(regionName);
    }

    setOpenOptions(false);
  };

  useEffect(() => {
    if (countryFound !== "") {
      getDataByNameCountry(countryFound);
    }
  }, [countryFound]);

  return (
    <>
      <StyledContainerForm>
        <form>
          <input
            type="text"
            placeholder="Search for a country"
            value={countryFound}
            onChange={(e) => setCountryFound(e.target.value)}
          />
          <i className="fa fa-search"></i>
        </form>

        <div>
          <div
            onClick={() => {
              setOpenOptions(!openOptions);
            }}
          >
            <span>{optionSelected}</span>
            {openOptions ? (
              <i className="fas fa-angle-down"></i>
            ) : (
              <i className="fas fa-angle-up"></i>
            )}
          </div>

          {openOptions && (
            <StyledOptions >
              <li onClick={(e) => getOptionRegionClicked(e)}>Africa</li>
              <li onClick={(e) => getOptionRegionClicked(e)}>Americas</li>
              <li onClick={(e) => getOptionRegionClicked(e)}>Asia</li>
              <li onClick={(e) => getOptionRegionClicked(e)}>Europe</li>
              <li onClick={(e) => getOptionRegionClicked(e)}>Oceania</li>
              <li onClick={(e) => getOptionRegionClicked(e)}>Clear Filter</li>
            </StyledOptions>
          )}
        </div>
      </StyledContainerForm>
    </>
  );
}
