import styled from "styled-components";

export const HeaderCover = styled.img`
  display: flex;
  align-items: center;
  min-width: 100%;
  height: 17vh;
  position: absolute;
  z-index: 1;
`;

export const ContainerAccessButtons = styled.div`
  display: flex;
  justify-content: flex-end;
  flex-wrap: wrap;
  padding: 10px;

  button {
    background-color: #0057d8;
    color: #fff;
    border-radius: 3px;
    padding: 0.3rem;
    border: transparent;
    width: auto;
    font-weight: 400; 
    margin: 10px;
    z-index: 1;

    &:hover {
      cursor: pointer;
      background-color: #0087d8;
      transition: 300ms;
      border: 1px solid #fff;
    }
  }
`;

export const ContainerMain = styled.div`
  display: grid;
  width: 100vw;
  height: 100%;
  margin: auto;
`;

export const GridMain = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 25%);
  grid-template-rows: repeat(2, 1fr);
  column-gap: 2%;
  align-items: center;
  justify-content: right;
  margin: 25px;
`;

export const CardContainer = styled.div`
  background-color: #050816;
  border: 1px solid black;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-wrap: wrap;
  justify-items: center;
  justify-content: center;
  margin-top: 4vw;
  height: 85%;

  h1 {
    font-size: 1.1em;
    color: #fff;
  }

  p {
    font-size: 0.9em;
    color: #fff;
    margin: 1px;
    text-align: left;
    padding-left: 10px;
  }

  background-image: radial-gradient(
      3px 2px at 25px 10px,
      white,
      rgba(255, 255, 255, 0)
    ),
    radial-gradient(1px 1px at 50px 25px, white, rgba(255, 255, 255, 0)),
    radial-gradient(1px 1px at 125px 20px, white, rgba(255, 255, 255, 0)),
    radial-gradient(1.5px 1.5px at 50px 75px, white, rgba(255, 255, 255, 0)),
    radial-gradient(2px 2px at 15px 125px, white, rgba(255, 255, 255, 0)),
    radial-gradient(2.5px 2.5px at 110px 80px, white, rgba(255, 255, 255, 0));

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
      border: 1px solid #fff;
    }
  }
`;

export const ContainerFilter = styled.div`
  width: 20vw;
  height: 90vh;
  background: #050816;
  position: absolute;
  z-index: 0;

  p {
    text-align: center;
    margin-top: 9vh;
    color: #fff;
    font-size: 1.2em;
    font-weight: 500;
  }

  .space {
    background: #050816 center / 200px 200px round;
    bottom: 0;
    left: 0;
    position: absolute;
    right: 0;
    top: 6.5vh;
    z-index: -1;
  }

  .stars1 {
    background-image: radial-gradient(
        1px 1px at 25px 5px,
        white,
        rgba(255, 255, 255, 0)
      ),
      radial-gradient(1px 1px at 50px 25px, white, rgba(255, 255, 255, 0)),
      radial-gradient(1px 1px at 125px 20px, white, rgba(255, 255, 255, 0)),
      radial-gradient(1.5px 1.5px at 50px 75px, white, rgba(255, 255, 255, 0)),
      radial-gradient(2px 2px at 15px 125px, white, rgba(255, 255, 255, 0)),
      radial-gradient(2.5px 2.5px at 110px 80px, white, rgba(255, 255, 255, 0));
  }

  label {
    color: #fff;
    margin: 0 30px;
    font-size: 0.8em;
    padding: auto;
  }

  input {
    display: flex;
    margin: 5px 30px 20px 30px;
    padding: 0.3rem;
    border-radius: 10px;

    &:hover {
      border: 3px solid #0057d8;
    }
  }

  .search-title {
    width: 15vw;
  }

  .search-date {
    width: 7vw;
    z-index: -1;
  }

  button {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    margin: auto;
    position: center;
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
      border: 1px solid #fff;
    }
  }
`;
