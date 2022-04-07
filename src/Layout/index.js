import React from "react";
import { Route, Switch } from "react-router-dom";
import "./Layout.css";

import Header from "../components/Header/Header";
import NotFound from "../components/NotFound/NotFound";
import Footer from "../components/Footer/Footer";
import CustomButton from "../components/CustomRecC/CustomButton/CustomButton";
import CustomCard from "../components/CustomRecC/CustomCard/CustomCard";

function Layout() {
  return (
    <>
      <Header />
      <div className="main-app-container">
        {/* TODO: Implement the screen starting here */}
        <CustomButton
          title="Create deck"
          type="casual"
          size="medium"
          purpose="add"
        />
        <div>
          <CustomCard
            title="first deck"
            text="this is a deck"
            type="deck"
            quantity="5"
          />
          <CustomCard
            title="first card"
            text="this is a study card"
            type="study"
          />
          <CustomCard title="edit card" text="this is a card" type="edit" />
        </div>

        <NotFound />
      </div>
      <Footer />
    </>
  );
}

export default Layout;
