import React from "react";
import AnimatedModal from "../AnimatedModal/AnimatedModal";
import "./DeleteUserModal.css";

function EditDetailModal(props) {
  const { isDeleteUserModalOpen, closeDeleteUserModal } = props;
  return (
    <AnimatedModal isModalOpen={isDeleteUserModalOpen}>
      <header className='modal__header'>
        <h1 className='modal__title'>Delete User?</h1>
        <button
          className='modal__button--header'
          onClick={closeDeleteUserModal}
        >
          X
        </button>
      </header>
      <div className='deleteModal__content'>
        <p>
          Deleting the user information will remove it from the database and
          cannot be added again. Are you sure to delete the user?
        </p>
      </div>
      <footer className='modal__footer'>
        <button
          className='modal__button--cancel'
          onClick={closeDeleteUserModal}
        >
          Cancel
        </button>
        <button className='modal__button--confirm'>OK</button>
      </footer>
    </AnimatedModal>
  );
}

export default EditDetailModal;
