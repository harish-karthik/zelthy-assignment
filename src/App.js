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
        let interpolatedUserInfo = data.map((userData) => ({
          username: userData.username,
          id: userData.id,
          name: userData.name,
          phone: userData.phone,
          website: userData.website,
          email: userData.email,
          liked: false,
        }));
        setUserData(interpolatedUserInfo);
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
