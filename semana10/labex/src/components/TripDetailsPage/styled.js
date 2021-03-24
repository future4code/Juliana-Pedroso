import styled from "styled-components";

export const ContainerText = styled.div`
  display: grid;
  align-items: center;
  justify-content: center;
  margin-top: 80px;

  button {
    display: flex;
    align-items: right;
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

  h1 {
    text-align: center;
    margin-bottom: 20px;
  }
`;

export const CardTrips = styled.div`
  border: 1px solid #000;
  border-radius: 10px;
  padding: 20px;

  h2,
  p {
    margin: 0;
  }

  button {
    display: flex;
    flex-wrap: wrap;
    background-color: #0057d8;
    color: #fff;
    font-weight: 400;
    width: auto;
    border-radius: 3px;
    padding: 0.3rem;
    border: transparent;
    margin: 10px auto;

    &:hover {
      cursor: pointer;
      background-color: #0087d8;
      transition: 300ms;
      border: 2px solid #0057d8;
    }
  }
`;
