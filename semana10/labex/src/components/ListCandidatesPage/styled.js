import styled from "styled-components";

export const ContainerList = styled.div`
  display: grid;
  align-items: center;
  justify-content: center;
  margin-top: 80px;

  h1 {
    text-align: center;
    margin-bottom: 20px;
  }

  p {
    margin: 0;
  }
`;

export const CardTripsList = styled.div`
  border: 1px solid #000;
  border-radius: 10px;
  padding: 20px;

  .grid-buttons {
    display: flex;
    flex-wrap: wrap;
    padding: 0 100px;

    .ok {
      background-color: #009500;
      color: #fff;
      font-weight: 400;
      width: auto;
      border-radius: 3px;
      padding: 0.3rem;
      border: transparent;
      margin: 10px auto;

      &:hover {
        cursor: pointer;
        background-color: #009500;
        transition: 300ms;
        border: 2px solid #009500;
      }
    }

    .no-ok {
      background-color: #ff0000;
      color: #fff;
      font-weight: 400;
      width: auto;
      border-radius: 3px;
      padding: 0.3rem;
      border: transparent;
      margin: 10px auto;

      &:hover {
        cursor: pointer;
        background-color: #ff3000;
        transition: 300ms;
        border: 2px solid #ff0000;
      }
    }
  }
`;
