import styled from "styled-components";

export const MainContainer = styled.div`
  font-family: "Poppins", sans-serif;
  text-align: center;
  background: #000;
  height: 80vw;
`;

export const Header = styled.div`
  background: #000;
  color: #fff;
  font-weight: bold;
  padding: 0.5rem 0 2rem;
  font-size: 4rem;
`;

export const WelcomeMessage = styled.h2`
  font-size: 1.2rem;
  font-weight: normal;
  color: #fff;
`;

export const ImageLogo = styled.img`
  height: 30vh;
  margin-top: 3rem;
  margin-right: 50rem;
`;

export const ContainerInput = styled.input`
  padding: 0.5rem 2rem;
  margin-top: -8rem;
  margin-bottom: 1rem;
  border: 3px solid #22dd44;
  border-radius: 0.25rem;
`;

export const Paragraph = styled.p`
    color: #fff;
    font-size: 1.3rem;
    border: 1px dashed #fff;
    width: 20vw;
    margin: auto;
`;

export const CreateButton = styled.button`
  background: #22dd44;
  color: #fff;
  padding: 0.5rem 2rem;
  margin-top: -10rem;
  margin-bottom: 1rem;
  margin-left: 0.3rem;
  border: 3px solid #22dd44;
  border-radius: 0.25rem;

  &:hover {
    background: #4ae366;
    color: #fff;
    font-weight: 700;
    cursor: pointer;
    transition: 200ms;
    opacity: 1;
  }
`;

export const ShowLists = styled.button`
  background: #22dd44;
  color: #fff;
  padding: 0.5rem 2rem;
  margin-top: -10rem;
  margin-bottom: 1rem;
  margin-left: 0.3rem;
  border: 3px solid #22dd44;
  border-radius: 0.25rem;

  &:hover {
    background: #4ae366;
    color: #fff;
    font-weight: 700;
    cursor: pointer;
    transition: 200ms;
    opacity: 1;
  }
`;

export const DeleteButton = styled.button`
  background: #22dd44;
  color: #fff;
  margin: 1.5rem;
  border: 3px solid #22dd44;
  border-radius: 0.25rem;

  &:hover {
    background: #4ae366;
    color: #fff;
    font-weight: 700;
    cursor: pointer;
    transition: 200ms;
    opacity: 1;
  }
`;
