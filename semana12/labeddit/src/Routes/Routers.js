import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import HomePage from '../pages/HomePage';
import LoginPage from '../pages/LoginPage';
import RegisterPage from '../pages/RegisterPage';
import FeedPage from '../pages/FeedPage';
import PostsPage from '../pages/PostsPage';
import ErrorPage from "../pages/ErrorPage";
import Header from "../components/Header";

const Routers = () => {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>

        <Route exact path="/login">
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
            <ErrorPage />
        </Route>

      </Switch>
    </BrowserRouter>
  );
}

export default Routers;
