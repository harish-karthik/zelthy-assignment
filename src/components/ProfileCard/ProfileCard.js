import React from "react";
import ProfileImage from "../ProfileImage/ProfileImage";
import "./ProfileCard.css";

function ProfileCard(props) {
  const { id, username, name, phone, email, website } = props;
  return (
    <article className='card'>
      <div className='card__content'>
        <ProfileImage username={username} />
        <div className='card__textcontainer'>
          <h1 className='card__title'>{name}</h1>
          <p className='card__text'>{phone}</p>
          <p className='card__text'>{email}</p>
          <p className='card__text'>{website}</p>
        </div>
      </div>
    </article>
  );
}

export default ProfileCard;

// Leanne Graham
// 1-770-736-8031 x56442
// Sincere@april.biz
// hildegard.org
