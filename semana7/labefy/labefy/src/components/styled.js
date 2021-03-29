import styled from "styled-components";

export const MainContainer = styled.div`
  font-family: "Poppins", sans-serif;
  text-align: center;
  background: black;
  height: auto;
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
  margin-top: 1rem;
  margin-right: 50rem;
`;

export const ContainerInput = styled.input`
  padding: 0.5rem 2rem;
  margin-top: -8rem;
  margin-bottom: 1rem;
  margin-left: 0.5rem;
  border: 3px solid #22dd44;
  border-radius: 0.25rem;
`;

export const TextSubititle = styled.h3`
  color: #22dd44;
  font-size: 1.3rem;
`;

export const Paragraph = styled.p`
  color: #fff;
  font-size: 1.3rem;
  border: 1px dashed #22dd44;
  width: 17vw;
  margin: auto;
`;

export const TextDetails = styled.p`
  color: #fff;
  font-size: 1.1rem;
  width: 25vw;
  margin: auto;
  padding-left: 1rem;
  padding-top: 0.5rem;
  text-align: left;
`;

export const Separator = styled.div`
  border: 1px solid #fff;
  width: 25vw;
  margin: auto;
  margin-top: 3vh;
`;

export const PlayMusic = styled.div`
  margin: 1rem;
`;

export const CreateButton = styled.button`
  background: #22dd44;
  color: #fff;
  padding: 0.5rem 2rem;
  margin-top: -10rem;
  margin-bottom: 1rem;
  margin-left: 0.6rem;
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

export const ManagePlaylists = styled.button`
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
  padding: 0.2rem 0.7rem;
  margin: 1.5rem 0.5rem;
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

export const DetailsButton = styled.button`
  background: #22dd44;
  color: #fff;
  padding: 0.2rem 1rem;
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

export const Footer = styled.div`
  background: black;
  height: 25vh;
`;