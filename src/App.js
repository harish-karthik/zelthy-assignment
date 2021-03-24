import React from "react";
import { UserStateProvider } from "./context/UserData.context";
import { UtilityStateProvider } from "./context/Utilities.context";
import ProfileList from "./components/ProfileList/ProfileList";
import "./App.css";

export default function App() {
  return (
    <UserStateProvider>
      <UtilityStateProvider>
        <ProfileList />
      </UtilityStateProvider>
    </UserStateProvider>
  );
}
