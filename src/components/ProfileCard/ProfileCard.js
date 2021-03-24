import React, { useState } from "react";
import ProfileImage from "../ProfileImage/ProfileImage";
import { ReactComponent as PhoneIconComponent } from "../../assets/icons/phone-solid.svg";
import { ReactComponent as EnvelopeIconComponent } from "../../assets/icons/envelope.svg";
import { ReactComponent as GlobeIconComponent } from "../../assets/icons/globe-solid.svg";
import CardActionFooter from "../CardActionFooter/CardActionFooter";
import EditDetailModal from "../EditDetailsModal/EditDetailModal";
import DeleteUserModal from "../DeleteUserModal/DeleteUserModal";
import "./ProfileCard.css";

function ProfileCard(props) {
  const { id, username, name, phone, email, website } = props;
  const [isEditDetialModalOpen, setIsEditDetailModalOpen] = useState(false);
  const [isDeleteUserModalOpen, setIsDeleteUserModalOpen] = useState(false);
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
        <CardActionFooter
          showEditDetailModal={() => setIsEditDetailModalOpen(true)}
          showDeleteUserModal={() => setIsDeleteUserModalOpen(true)}
        />
      </div>
      <EditDetailModal
        isEditDetailModalOpen={isEditDetialModalOpen}
        closeEditDetailModal={() => setIsEditDetailModalOpen(false)}
      />
      <DeleteUserModal
        isDeleteUserModalOpen={isDeleteUserModalOpen}
        closeDeleteUserModal={() => setIsDeleteUserModalOpen(false)}
      />
    </article>
  );
}

export default ProfileCard;

// Leanne Graham
// 1-770-736-8031 x56442
// Sincere@april.biz
// hildegard.org
