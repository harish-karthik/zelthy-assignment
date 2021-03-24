import React, { useState } from "react";
import LoadingAnimation from "../LoadingAnimation/LoadingAnimation";
import "./ProfileImage.css";

function ProfileImage(props) {
  const { username } = props;
  const [imageIsLoading, setImageIsLoading] = useState(true);
  const [imageLoadingError, setImageLoadingError] = useState(false);
  return (
    <div className='card__imagecontainer'>
      {imageIsLoading && <LoadingAnimation />}
      <img
        src={`https://avatars.dicebear.com/v2/avataaars/${username}.svg?mood[]=happy`}
        className={imageIsLoading ? "card__image hide" : "card__image show"}
        alt={`user `}
        onLoad={() => setImageIsLoading(false)}
        onError={() => setImageLoadingError(true)}
      />
      {imageLoadingError && <p>Something went wrong</p>}
    </div>
  );
}

export default ProfileImage;
