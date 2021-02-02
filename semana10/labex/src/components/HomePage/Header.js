import React from "react";
import Cover from "../../img/cover.png";
import { HeaderCover, ContainerAccessButtons } from "./styled";
import { useHistory } from "react-router-dom";
import { goToLoginPage, goToApplicationFormPage } from '../Router/Coordinator';

export default function Header() {
  const history = useHistory()

  return (
    <div>
      <HeaderCover src={Cover} alt="Capa" />
      <ContainerAccessButtons>
        <button onClick={() => goToLoginPage(history)}>Sign in</button>
        <button onClick={() => goToApplicationFormPage(history)}>Sign up</button>
      </ContainerAccessButtons>
        
    </div>
  );
}
