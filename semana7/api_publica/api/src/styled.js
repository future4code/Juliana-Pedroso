import styled from "styled-components";

export const PhraseInicial = styled.h1`
  font-family: "Days One", sans-serif;
  font-weight: 400;
  font-size: 1.3em;
  margin: 0;
  padding: 5vh;
`;

export const Title = styled.h3`
  text-align: center;
  font-size: 3em;
  font-family: "Days One", sans-serif;
`;

export const ButtonShowDetails = styled.button`
  width: 20vw;
  height: 5vh;
  display: inline-block;
  align-items: center;
  text-align: center;
  margin: 10px;
  cursor: pointer;
  border-radius: 4px;

  &:hover {
    background-color: #e3e3e4;
    font-weight: bold;
  }
`;

export const Informations = styled.p`
  font-family: "Days One", sans-serif;
  text-align: left;
  font-size: 1.4em;
  font-weight: 500;
  color: #fff;
  padding-left: 3vw;
`;

export const MainContainer = styled.div`
  background: url(https://i.redd.it/yykhu7vx98x41.png) 50% 0 no-repeat fixed;
  background-size: cover;
  color: #fff;
  height: 100vh;
  margin: 0 auto;
  padding: 0;
  width: 100%;
`;
