import React from "react";
import HeaderActivities from "../../components/Headers/HeaderActivities";
import HeaderWelcome from "../../components/Headers/HeaderWelcome";
import "./LayoutWelcome.css";

export default function LayoutWelcome(props) {
  if (!props.currentUser) {
    return (
      <>
        <HeaderWelcome />
        <main>{props.children}</main>
      </>
    );
  } else {
    return (
      <>
        <HeaderActivities
          currentUser={props.currentUser}
          handleLogout={props.handleLogout}
        />
        <main>{props.children}</main>
      </>
    );
  }
}
