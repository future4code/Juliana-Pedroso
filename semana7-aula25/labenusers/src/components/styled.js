import styled from "styled-components";

export const MainContainer = styled.div`
  margin: 1vh;
  display: flex;
`;

export const ButtonNextPage = styled.button`
  margin: 3vh;
  border-radius: 3px;
  height: 4vh;
  transition: 300s;

  &:hover {
    background-color: #d3d3d3;
    transition: 200ms;
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
  padding: 2vh;
  border-radius: 3px;
  height: 0.5vh;
`;

export const ButtonSave = styled.button`
  background-color: darkblue;
  color: #fff;
  border-radius: 3px;
  font-weight: 600;
  height: 5vh;
  width: 5vw;
  margin: 1vh;

  &:hover {
    background-color: #61dafb;
    color: black;
    transition: 300ms;
    cursor: pointer;
  }
`;

export const ButtonRemove = styled.button`
  height: 3.5vh;
  margin: 0;
`;

export const ListUsers = styled.li`
  margin-left: 10vw;
  list-style-type: none;
  text-align: left;
`;
