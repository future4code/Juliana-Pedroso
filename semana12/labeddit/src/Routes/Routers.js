import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import LoginPage from '../Pages/LoginPage';
import RegisterPage from '../Pages/RegisterPage';
import FeedPage from '../Pages/FeedPage';
import PostsPage from '../Pages/PostsPage'

const Routers = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <LoginPage />
        </Route>

        <Route exact path="/register">
          <RegisterPage />
        </Route>

        <Route exact path="/feed">
          <FeedPage />
        </Route>

        <Route exact path="/posts">
          <PostsPage />
        </Route>
        
        <Route>
            <p>Ops! Página não encontrada :(</p>
        </Route>

      </Switch>
    </BrowserRouter>
  );
}

export default Routers;
