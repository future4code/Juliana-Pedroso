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
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";
import Box from "@material-ui/core/Box";
import { ExitToApp } from "@material-ui/icons";
import useProtectedPage from "../hooks/useProtectedPage";

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

export default function PostsPage() {

  const classes = useStyles();
  useProtectedPage();

  return (
      <div align="center">
          <h1>Adicionar comentário</h1>
    <Grid container style={{ minHeight: "90vh", justifyContent: "center" }}>
      {/* <h1>Adicionar comentário</h1> */}

      <Grid
        container
        item
        xs={12}
        sm={6}
        style={{ display: "flex", justifyContent: "center" }}
      >
        <div />
        <div>
          <form>
            <TextField
              //   onChange={onChangeTitle}
              //   value={title}
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="title"
              type="title"
              label="Título"
              name="title"
              autoFocus
            />

            <TextField
              //   onChange={onChangeDescription}
              //   value={password}
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="description"
              label="Insira aqui o seu comentário"
              id="description"
            />
          </form>

          <Button
            // onClick={handleLogin}
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Enviar
          </Button>
        </div>
      </Grid>
    </Grid>
    </div>
  );
}

// import React from 'react';
// import useProtectedPage from "../hooks/useProtectedPage";

// const PostsPage = () => {
//     useProtectedPage();

//     return(
//         <p>Criar comentário</p>
//     )
// }

// export default PostsPage;
