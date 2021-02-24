import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import { BASE_URL } from "../constants/parameters";
import Grid from "@material-ui/core/Grid";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Avatar from "@material-ui/core/Avatar";
import { makeStyles } from "@material-ui/core/styles";
import { TextField } from "@material-ui/core";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Button from "@material-ui/core/Button";
import useUnprotectedPage from "../hooks/useUnprotectedPage";
import { ExitToApp } from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(0.5, 0, 1),
  },
}));

export default function RegisterPage({setHandleButton}) {
  const [username, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();
  const classes = useStyles();
  useUnprotectedPage();

  const onChangeUserName = (e) => {
    setUserName(e.target.value);
  };

  const onChangeEmail = (e) => {
    setEmail(e.target.value);
  };

  const onChangePassword = (e) => {
    setPassword(e.target.value);
  };

  const onSubmitForm = (e) => {
    e.preventDefault();
    handleRegister(setHandleButton)
  };

  const handleRegister = () => {
    const body = {
      email: email,
      password: password,
      username: username,
    };

    axios
      .post(`${BASE_URL}/signup`, body)
      .then((res) => {
        localStorage.setItem("token", res.data.token);
        alert("Usuário criado com sucesso! Aproveite o nosso feed :)");
        history.push("/feed");
        setHandleButton(<ExitToApp />)
      })
      .catch((err) => {
        alert(err.response.data.message);
        console.log(err);
      });
  };

  return (
    <Grid container style={{ minHeight: "90vh" }}>
      <img
        src="https://www.redditstatic.com/accountmanager/bbb584033aa89e39bad69436c504c9bd.png"
        style={{
          width: "13.97%",
          height: "auto",
          objectFit: "cover",
          display: "flex",
          justifyContent: "flex-start",
          paddingRight: 400,
        }}
        alt="Capa"
      />

      <Grid
        container
        item
        xs={12}
        sm={6}
        style={{ display: "flex", alignItems: "center" }}
      >
        <div />
        <div>
          <div align="center">
            <Avatar className={classes.avatar}>
              <LockOutlinedIcon />
            </Avatar>
          </div>
          <form onSubmit={onSubmitForm}>
            <TextField
              onChange={onChangeUserName}
              value={username}
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="name"
              type="text"
              label="Name"
              name="name"
              autoFocus
            />

            <TextField
              onChange={onChangeEmail}
              value={email}
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              type="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
            />

            <TextField
              onChange={onChangePassword}
              value={password}
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
          </form>
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />

          <Button
            onClick={handleRegister}
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Cadastrar
          </Button>
        </div>
      </Grid>
    </Grid>
  );
}
