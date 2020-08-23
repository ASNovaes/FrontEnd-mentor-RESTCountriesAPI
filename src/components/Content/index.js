import React, { useContext } from "react";
import { StyledContent, StyledContainerCard } from "./styles.js";
import Form from "../Form/index.js";
import Card from "../Card/index.js";
import { ContextApp } from "../Context/index.js";

export default function Content() {
  const { dataCountries } = useContext(ContextApp);

  return (
    <>
      <StyledContent>
        <Form />
        <StyledContainerCard>
          {dataCountries.map((country, index) => {
            return <Card key={index} countryInfo={country} />;
          })}
        </StyledContainerCard>
      </StyledContent>
    </>
  );
}
