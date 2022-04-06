import React from "react";
import Header from "../components/Header/Header";
import NotFound from "../components/NotFound/NotFound";
import { Route, Switch } from "react-router-dom";

function Layout() {
  return (
    <>
      <Header />
      <div className="container">
        {/* TODO: Implement the screen starting here */}

        <NotFound />
      </div>
    </>
  );
}

export default Layout;
