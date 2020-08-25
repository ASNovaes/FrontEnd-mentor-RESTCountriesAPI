import styled from "styled-components";

const StyledContainerForm = styled.div`
  align-items: center;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  position: relative;
  width: 100%;
  
  input,
  div {
    border: 0;
    border-radius: 3px;
    color: ${props => props.theme.colors.text};
    height: 55px;
    outline: none;
    text-indent: 5px;
  }

  input {
    font-size: 14px;
    padding-left: 70px;
    width: 100%;
    margin-right: 10px;
    background: ${props => props.theme.colors.primary};
  }

  input::placeholder {
    font-size: 14px;
    font-weight: 400;
    color: ${props => props.theme.colors.text};
  }

  i {
    color: ${props => props.theme.colors.text};
    font-size: 16px;
    position: absolute;
    z-index: 1;
  }

  form {
    display: flex;
    align-items: center;
    margin-top: 50px;
    width: 482px;

    @media (max-width: 500px) {
      width: 100%;
    }
  }

  input + i {
    left: 30px;
  }

  i {
    left: 165px;
  }

  div div {
    align-items: center;
    background: ${props => props.theme.colors.primary};
    cursor: pointer;
    display: flex;
    font-size: 14px;
    padding-left: 25px;
    position: relative;
    width: 200px;

  }

  form + div {
    margin-top: 50px;
    
  }
`;

const StyledOptions = styled.ul`
  background: ${props => props.theme.colors.primary};
  border-radius: 3px;
  color: ${props => props.theme.colors.text};
  height: auto;
  margin-top: 5px;
  padding: 25px 0 25px;

  li {
    cursor: pointer;
    font-weight: 300;
    line-height: 1.5em;
    padding-left: 25px;
  }

  li:hover {
    background: ${props => props.theme.colors.background};
  }

  li:last-child {
    font-weight: 600;

  }
`;

export { StyledContainerForm, StyledOptions };
