import styled from "styled-components";

export const MainContainer = styled.div`
  margin: 1vh;
  display: flex;
`;

export const ButtonNextPage = styled.button`
  border-radius: 3px;
  height: 4vh;
  transition: 300s;

  &:hover {
    cursor: pointer;
  }
`;

export const InputContainer = styled.div`
  border: 1px solid black;
  display: block;
  justify-content: center;
  align-items: center;
  padding: 3vh;
  width: 20vw;
  margin: 10vh 60vh;
  height: auto;
`;

export const InputBox = styled.input`
    margin: 1vh;
    border-radius: 3px;
`;

export const ButtonSave = styled.button`
  background-color: #2d3058;
  color: #fff;
  height: 5vh;
  width: 5vw;
  margin-top: 4vh;
  
  &:hover {
      cursor: pointer;
  }
  
`;
