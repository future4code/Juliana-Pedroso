import styled from "styled-components";

export const HeaderCover = styled.img`
  display: flex;
  align-items: center;
  min-width: 100%;
  height: 17vh;
  position: fixed;
`;

export const ContainerAccessButtons = styled.div`
  display: flex;
  justify-content: flex-end;
  flex-wrap: wrap;
  padding: 10px;

  button {
    margin: 10px;
    padding: 0.5em;
    z-index: 1;
  }
`;

export const ContainerMain = styled.div`
  p {
    text-align: center;
    margin-top: 9vh;
    color: #fff;
    font-size: 1.2em;
    font-weight: 500;
  }

  .grid-trips {
    background-color: #000;
  }
`;

export const ContainerFilter = styled.div`
  width: 20vw;
  height: 89.5vh;
  background: #000;
  position: absolute;
  z-index: -1;

  .space {
    background: rgba(128, 0, 128, 0.1) center / 200px 200px round;
    bottom: 0;
    left: 0;
    position: absolute;
    right: 0;
    top: 6.9vh;
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
    z-index: 3;

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
      border: 2px solid #fff;
    }
  }
`;
