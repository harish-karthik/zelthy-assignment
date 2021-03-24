import React, { useContext } from "react";
import LoadingAnimation from "../LoadingAnimation/LoadingAnimation";
import ProfileCard from "../ProfileCard/ProfileCard";
import EditDetailModal from "../EditDetailsModal/EditDetailModal";
import DeleteUserModal from "../DeleteUserModal/DeleteUserModal";
import { UserStateContext } from "../../context/UserData.context";
import "./ProfileList.css";

function ProfileList() {
  const UserState = useContext(UserStateContext);
  let userMarkup;
  if (UserState.appIsLoading) {
    userMarkup = <LoadingAnimation />;
  } else {
    userMarkup = UserState.users.map((userInfo) => (
      <ProfileCard
        key={userInfo.id}
        id={userInfo.id}
        username={userInfo.username}
        name={userInfo.name}
        phone={userInfo.phone}
        email={userInfo.email}
        website={userInfo.website}
        liked={userInfo.liked}
      />
    ));
  }
  return (
    <div className='profile__container'>
      {userMarkup}
      <EditDetailModal />
      <DeleteUserModal />
    </div>
  );
}

export default ProfileList;
