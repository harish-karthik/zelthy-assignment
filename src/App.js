import React from "react";
import LoadingAnimation from "./components/LoadingAnimation/LoadingAnimation";
import ProfileCard from "./components/ProfileCard/ProfileCard";
import useFetch from "./hooks/useFetch";
import "./App.css";

export default function App() {
  const { isLoading, userData } = useFetch();
  let userMarkup;
  if (isLoading) {
    userMarkup = <LoadingAnimation />;
  } else {
    userMarkup = userData.map((userInfo) => (
      <ProfileCard
        key={userInfo.id}
        id={userInfo.id}
        username={userInfo.username}
        name={userInfo.name}
        phone={userInfo.phone}
        email={userInfo.email}
        website={userInfo.website}
      />
    ));
  }
  return <div className='profile__container'>{userMarkup}</div>;
}
