import React from "react";
import HeaderActivities from "../../components/Headers/HeaderActivities";
import HeaderWelcome from "../../components/Headers/HeaderWelcome";
import "./LayoutWelcome.css";

export default function LayoutWelcome(props) {
  return (
    <>
      {/* <HeaderActivities /> */}
      <HeaderWelcome />
      <main>{props.children}</main>
    </>
  );
}
