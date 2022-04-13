import React from "react";
import { Route, Switch } from "react-router-dom";
import "./Layout.css";

import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import BreadCrump from "../components/BreadCrump/BreadCrump";

import Home from "../routes/Home/Home";
import EditDeck from "../routes/EditDeck/EditDeck";
import StudyDeck from "../routes/StudyDeck/StudyDeck";
import CreateDeck from "../routes/CreateDeck/CreateDeck";
import ViewDeck from "../routes/ViewDeck/ViewDeck";
import AddCard from "../routes/AddCard/AddCard";
import EditCard from "../routes/EditCard/EditCard";
import NotFound from "../components/NotFound/NotFound";

function Layout() {
  return (
    <>
      <Header />

      <div className="main-app-container">
        <BreadCrump />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/decks/:deckId/study">
            <StudyDeck />
          </Route>
          <Route exact path="/decks/new">
            <CreateDeck />
          </Route>
          <Route exact path="/decks/:deckId">
            <ViewDeck />
          </Route>
          <Route exact path="/decks/:deckId/edit">
            <EditDeck />
          </Route>
          <Route exact path="/decks/:deckId/cards/new">
            <AddCard />
          </Route>
          <Route exact path="/decks/:deckId/cards/:cardId/edit">
            <EditCard />
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </div>
      <Footer />
    </>
  );
}

export default Layout;
