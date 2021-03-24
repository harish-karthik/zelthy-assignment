import React from "react";

import { ReactComponent as PhoneIconComponent } from "../../assets/icons/phone-solid.svg";
import { ReactComponent as EnvelopeIconComponent } from "../../assets/icons/envelope.svg";
import { ReactComponent as GlobeIconComponent } from "../../assets/icons/globe-solid.svg";

import ProfileImage from "../ProfileImage/ProfileImage";
import CardActionFooter from "../CardActionFooter/CardActionFooter";

import "./ProfileCard.css";

function ProfileCard(props) {
  const { id, username, name, phone, email, website, liked } = props;
  return (
    <article className='card'>
      <div className='card__content'>
        <ProfileImage username={username} />
        <div className='card__textcontainer'>
          <h1 className='card__title'>{name}</h1>
          <p className='card__text'>
            <span className='card__icon'>
              <EnvelopeIconComponent />
            </span>
            {email}
          </p>
          <p className='card__text'>
            <span className='card__icon'>
              <PhoneIconComponent />
            </span>
            {phone}
          </p>
          <p className='card__text'>
            <span className='card__icon'>
              <GlobeIconComponent />
            </span>
            {website}
          </p>
        </div>
        <CardActionFooter liked={liked} id={id} />
      </div>
    </article>
  );
}

export default ProfileCard;

// Leanne Graham
// 1-770-736-8031 x56442
// Sincere@april.biz
// hildegard.org
