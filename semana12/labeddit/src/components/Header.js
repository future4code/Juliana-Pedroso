import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";
import { StyledToolbar } from "./styled";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import { goToHomePage, goToLoginPage } from "../routes/Coordinators";
import { useHistory } from "react-router-dom";

const Header = () => {
  const history = useHistory();

  return (
    <AppBar position="static">
      <StyledToolbar>
        <Button onClick={()=> goToHomePage(history)} color="inherit">LabEddit</Button>

        <Button color="inherit">
          <AccountCircleIcon onClick={()=> goToLoginPage(history)} />
        </Button>
      </StyledToolbar>
    </AppBar>
  );
};

export default Header;
