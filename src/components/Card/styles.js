import styled from "styled-components";

const StyledCard = styled.div`
  background: ${props => props.theme.colors.primary};
  border-radius: 3px;
  cursor: pointer;
  height: 340px;
  margin-bottom: 50px;
  width: 265px;

  :last-child {
    align-self: flex-end;
  }

  div {
    height: 162px;
    width: 100%;
  }

  img {
    border-top-left-radius: 3px;
    border-top-right-radius: 3px;
    object-fit: cover;
    width: 100%;
  }
`;

const StyledCardContent = styled.div`
  padding: 25px;

  span {
    color: ${props => props.theme.colors.text};
      font-size: 14px;
      line-height: 1.5em;
  }

  span:nth-child(1) {
    display: block;
    font-size: 16px;
    font-weight: 600;
    padding-bottom: 20px;
  }

  span:nth-child(3n - 1){
      font-weight: 600; 
  }
`;

export { StyledCard, StyledCardContent };
