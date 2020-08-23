import React, { useState, useContext, useEffect } from "react";
import { StyledContainerForm, StyledOptions } from "./styles.js";
import { ContextApp } from "../Context/index.js";

export default function Form() {
  const { getDataByRegion, getDataByNameCountry } = useContext(ContextApp);
  const [openOptions, setOpenOptions] = useState(false);
  const [countryFound, setCountryFound] = useState('');

  const getOptionRegionClicked = (e) => {
    const regionName = e.target.textContent;
    getDataByRegion(regionName);
  };

  useEffect(() => {

    if (countryFound !== '') {
      getDataByNameCountry(countryFound)
    }

  }, [countryFound])


  return (
    <>
      <StyledContainerForm>
        <form>
          <input
            type="text"
            placeholder="Search for a country"
            value={countryFound}
            onChange={(e) => setCountryFound(e.target.value)} />
          <i className="fa fa-search"></i>
        </form>

        <div>
          <div
            onClick={() => {
              setOpenOptions(!openOptions);
            }}
          >
            <span>Filter by Region</span>
            {openOptions ? (
              <i className="fas fa-angle-down"></i>
            ) : (
                <i className="fas fa-angle-up"></i>
              )}
          </div>

          {openOptions && (
            <StyledOptions onClick={(e) => getOptionRegionClicked(e)}>
              <li>All</li>
              <li>Africa</li>
              <li>Americas</li>
              <li>Asia</li>
              <li>Europe</li>
              <li>Oceania</li>
            </StyledOptions>
          )}
        </div>
      </StyledContainerForm>
    </>
  );
}
