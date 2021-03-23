import React, { useState } from "react";
import LoadingAnimation from "../LoadingAnimation/LoadingAnimation";
import "./ProfileCard.css";

function ProfileCard(props) {
  const { id, userName, name, phone, email, website } = props;
  const [imageIsLoading, setImageIsLoading] = useState(true);
  const [imageLoadingError, setImageLoadingError] = useState(false);
  return (
    <article className='card'>
      <div className='card__content'>
        <div className='card__imagecontainer'>
          {imageIsLoading && <LoadingAnimation />}
          <img
            src={`https://avatars.dicebear.com/v2/avataaars/${userName}.svg?mood[]=happy`}
            className={imageIsLoading ? "card__image hide" : "card__image show"}
            alt={`user `}
            onLoad={() => setImageIsLoading(false)}
            onError={() => setImageLoadingError(true)}
          />
          {imageLoadingError && <p>Something went wrong</p>}
        </div>
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
