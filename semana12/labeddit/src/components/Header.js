import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";
import { StyledToolbar } from "./styled";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import { goToHomePage, goToLoginPage } from "../routes/Coordinators";
import { useHistory } from "react-router-dom";

const Header = ({handleButton, setHandleButton}) => {
  const token = localStorage.getItem("token")
  const history = useHistory();

  const logout = () => {
    localStorage.removeItem("token");
  };

  const handleButtonAction = () => {
    if (token) {
      logout();
      setHandleButton(<AccountCircleIcon />);
      goToLoginPage(history);
    } else {
      goToLoginPage(history);
    }
  };

  return (
    <AppBar position="static">
      <StyledToolbar>
        <Button onClick={() => goToHomePage(history)} color="inherit">
          LabEddit
        </Button>

        <Button color="inherit" onClick={handleButtonAction}>
          {handleButton}
        </Button>
      </StyledToolbar>
    </AppBar>
  );
};

export default Header;
