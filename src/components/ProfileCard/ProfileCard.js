import React from "react";
import "./ProfileCard.css";

function ProfileCard(props) {
  const { id, userName, name, phone, email, website } = props;
  return (
    <article className='card'>
      <h1 className='card__title'>{name}</h1>
      <h5 className='card__phone'>{phone}</h5>
      <h5 className='card__email'>{email}</h5>
      <h5 className='card__website'>{website}</h5>
    </article>
  );
}

export default ProfileCard;

// Leanne Graham
// 1-770-736-8031 x56442
// Sincere@april.biz
// hildegard.org
