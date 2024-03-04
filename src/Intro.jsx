import React from "react";
import { Link, Outlet } from "react-router-dom";

const Intro = () => {
  return (
    <>
      <div
        style={{
          margin: "0 auto",
        }}
      >
        <h1 style={{ paddingTop: "5px" }}>Join Us..</h1>
        <Link
          style={{ paddingLeft: "20px", color: "GrayText", fontWeight: "bold" }}
          to="signIn"
        >
          Sign In
        </Link>
      </div>

      <main style={{ position: "absolute", top: "30%", left: "40%" }}>
        <Outlet />
      </main>
    </>
  );
};

export default Intro;
