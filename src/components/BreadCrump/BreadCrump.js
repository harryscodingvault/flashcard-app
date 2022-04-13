import React from "react";
import "./BreadCrump.css";
import { Link, withRouter } from "react-router-dom";

const BreadCrump = ({ history, location: { pathname } }) => {
  console.log("path", pathname);

  const pathnames = pathname.split("/").filter((x) => x);
  console.log("path", pathnames);

  return (
    <section
      className={`breadcrump-container ${
        pathnames.length === 0 && "hide-breadcrump-container"
      }`}
    >
      <Link to="/">
        <h3>Home</h3>
      </Link>
      <h3> / </h3>
      {pathnames.map((name, index) => {
        const urlLink = `/${pathnames.slice(0, index + 1).join("/")}`;
        const isLast = index === pathnames.length - 1;
        return isLast ? (
          <>
            <h3>{name}</h3>
            <h3> / </h3>
          </>
        ) : (
          <>
            <Link to={urlLink}>
              <h3>{name}</h3>
            </Link>
            <h3> / </h3>
          </>
        );
      })}
    </section>
  );
};

export default withRouter(BreadCrump);
