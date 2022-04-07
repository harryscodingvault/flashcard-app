import React from "react";
import { Route, Switch } from "react-router-dom";
import "./Layout.css";

import Header from "../components/Header/Header";
import NotFound from "../components/NotFound/NotFound";
import Footer from "../components/Footer/Footer";
import CustomButton from "../components/CustomRecC/CustomButton/CustomButton";

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
          <h1>Card</h1>
          <h1>Card</h1>
          <h1>Card</h1>
          <h1>Card</h1>
          <h1>Card</h1>
        </div>

        <NotFound />
      </div>
      <Footer />
    </>
  );
}

export default Layout;
