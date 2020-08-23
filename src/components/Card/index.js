import React from "react";
import { StyledCard, StyledCardContent } from "./styles.js";

export default function Card(country) {
  const { flag, name, population, region, capital } = country.countryInfo;

  return (
    <StyledCard>
      <div>
        <img src={flag} alt={name} />
      </div>
      <StyledCardContent>
        <span>{name}</span>
        <span>Population:</span> <span>{population}</span>
        <br />
        <span>Region:</span> <span>{region}</span>
        <br />
        <span>Capital:</span> <span>{capital}</span>
      </StyledCardContent>
    </StyledCard>
  );
}
