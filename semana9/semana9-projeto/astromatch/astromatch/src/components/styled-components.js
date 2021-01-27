import styled from "styled-components";

export const LogoAstroMatch = styled.img`
  width: 35%;
  padding-top: 10px;
`;

export const MainContainer = styled.div`
  border-radius: 5px;
  border: 1px solid #000;
  height: auto;
  width: 30%;
  margin: 1% auto;
`;

export const PerfilePhoto = styled.img`
  border-radius: 5px;
  width: 80%;
  height: 45vh;
`;
export const PerfilePhotoDetail = styled.img`
  width: 7vw;
  height: 15vh;
  border-radius: 50%;
`;

export const ContainerDetailMatch = styled.div`
  display: flex;
`;

export const OptionsIcon = styled.img`
  height: 60px;

  &:hover {
    height: 70px;
  }
`;

export const OptionsButton = styled.button`
  margin: 1rem 2em 1rem 2em;
  border: 1px transparent;
  border-radius: 50%;
  background-color: #fff;

  &:hover {
    cursor: pointer;
  }
`;

export const ShowListButton = styled.button`
  margin-bottom: 2%;
  height: 5vh;
  background: #008000;
  border: transparent;
  border-radius: 5px;
  color: #fff;
  font-weight: bold;
  font-size: 1em;

  &:hover {
    cursor: pointer;
    background: #009000;
    opacity: 0.8;
    transition: 300ms;
  }
`;
