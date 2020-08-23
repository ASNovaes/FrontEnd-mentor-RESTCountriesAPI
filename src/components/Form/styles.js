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
    box-shadow: 1px 1px 5px rgb(241, 241, 241);
    border-radius: 3px;
    height: 55px;
    outline: none;
    text-indent: 5px;
  }

  input {
    font-size: 14px;
    padding-left: 70px;
    width: 100%;
    margin-right: 10px;
  }

  input::placeholder {
    font-size: 14px;
    font-weight: 400;
  }

  i {
    color: hsl(0, 0%, 52%);
    font-size: 20px;
    position: absolute;
    z-index: 1;
  }

  form {
    display: flex;
    align-items: center;
    margin-top: 50px;
    width: 480px;

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
    background: #fff;
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
  background: #fff;
  box-shadow: 1px 1px 5px rgb(241, 241, 241);
  border-radius: 3px;
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
    background: rgb(241, 241, 241);
  }

  li:last-child:hover {
    border-bottom-left-radius: 3px;
    border-bottom-right-radius: 3px;
  }
`;

export { StyledContainerForm, StyledOptions };
