import styled from "styled-components";

const StyledContent = styled.div`
      margin: 0 auto;
      width: 90vw;
      padding-bottom: 50px;
`;

const StyledContainerCard = styled.div`
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      width: 100%;

      @media (max-width: 600px) {
         justify-content: center;
      }
`;

export { StyledContent, StyledContainerCard };