import React from "react";
import { Route, Switch } from "react-router-dom";
import "./Layout.css";

import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

import Home from "./Home/Home";
import EditDeck from "./EditDeck/EditDeck";
import StudyDeck from "./StudyDeck/StudyDeck";
import CreateDeck from "./CreateDeck/CreateDeck";
import ViewDeck from "./ViewDeck/ViewDeck";
import CreateCard from "./CreateCard/CreateCard";
import EditCard from "./EditCard/EditCard";
import NotFound from "../components/NotFound/NotFound";

function Layout() {
  return (
    <div className="total-layout">
      <Header />
      <div className="main-app-container">
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
            <CreateCard />
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
    </div>
  );
}

export default Layout;
