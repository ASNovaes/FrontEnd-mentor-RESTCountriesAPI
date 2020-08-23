import styled from "styled-components";

const StyledHeader = styled.header`
  background: #fff;
  box-shadow: 0px 1px 5px rgb(241,241,241);
  height: 80px;
  width: 100%;

  div {
    align-items: center;
    display: flex;
    height: 100%;
    justify-content: space-between;
    margin: 0 auto;
    width: 90vw;
  }

  div span:nth-child(1) {
    font-size: 16px;
    font-weight: 800;
  }

  div span:nth-child(2) {
    font-weight: 600;
  }

  span i {
    cursor: pointer;
    padding: 10px;
  }
`;

export default StyledHeader;
