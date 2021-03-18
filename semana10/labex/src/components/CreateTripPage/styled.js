import styled from "styled-components";

export const ContainerCreateTripForm = styled.div`
  display: grid;
  align-items: center;
  justify-content: center;
  margin-top: 80px;

  h2 {
    text-align: center;
    margin: auto;
    padding: 20px;
  }

  h3 {
    margin: auto;
    padding-bottom: 30px;
    font-weight: normal;
  }

  form {
    display: grid;
    justify-items: center;
    margin: auto;
    width: 40vw;
    padding: 5px;
  }

  input,
  textarea {
    width: 30vw;
    padding: 5px;
    border-radius: 5px;
    margin-bottom: 10px;

    &:hover {
      border: 3px solid #0057d8;
    }
  }

  select {
    width: 31vw;
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
