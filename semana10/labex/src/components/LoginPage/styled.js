import styled from "styled-components";

export const ContainerInputs = styled.div`
  display: grid;
  align-items: center;
  justify-items: center;
  margin-top: 50px;

  input {
    width: 20vw;
    padding: 5px;
    border-radius: 5px;
    margin-bottom: 10px;

    &:hover {
      border: 3px solid #0057d8;
    }
  }

  button {
    background-color: #0057d8;
    color: #fff;
    font-weight: 400;
    width: auto;
    border-radius: 3px;
    padding: 0.3rem;
    border: transparent;

    &:hover {
      cursor: pointer;
      background-color: #0087d8;
      transition: 300ms;
      border: 2px solid #0057d8;
    }
  }
`;
