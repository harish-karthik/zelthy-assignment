import React, { useState, useEffect } from "react";
import LoadingAnimation from "./components/LoadingAnimation/LoadingAnimation";
import ProfileCard from "./components/ProfileCard/ProfileCard";
import "./App.css";

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [userData, setUserData] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => {
        setUserData(data);
        setIsLoading(false);
      });
  }, []);
  let userMarkup;
  if (isLoading) {
    userMarkup = <LoadingAnimation />;
  } else {
    userMarkup = userData.map((userInfo) => (
      <ProfileCard
        key={userInfo.id}
        id={userInfo.id}
        userName={userInfo.username}
        name={userInfo.name}
        phone={userInfo.phone}
        email={userInfo.email}
        website={userInfo.website}
      />
    ));
  }
  return <div className='profile__container'>{userMarkup}</div>;
}
