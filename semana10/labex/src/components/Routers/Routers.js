import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Header from "../HomePage/Header";
import HomePage from "../HomePage/HomePage";
import ApplicationFormPage from "../ApplicationFormPage/ApplicationFormPage";
import LoginPage from "../LoginPage/LoginPage";
import CreateTripPage from "../CreateTripPage/CreateTripPage";
import ListCandidatesPage from "../ListCandidatesPage/ListCandidatesPage";
import TripDetailsPage from "../TripDetailsPage/TripDetailsPage";

export default function Routers() {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>

        <Route exact path="/application-form">
          <ApplicationFormPage />
        </Route>

        <Route exact path="/login">
          <LoginPage />
        </Route>

        <Route exact path="/trips-create">
          <CreateTripPage />
        </Route>

        <Route exact path="/candidates-list">
          <ListCandidatesPage />
        </Route>

        <Route exact path="/trips-details">
          <TripDetailsPage />
        </Route>
        <Route></Route>
      </Switch>
    </BrowserRouter>
  );
}
