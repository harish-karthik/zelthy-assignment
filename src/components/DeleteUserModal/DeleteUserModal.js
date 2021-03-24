import React, { useContext } from "react";
import AnimatedModal from "../AnimatedModal/AnimatedModal";
import {
  UtilityStateContext,
  UtilityStateDispatchContext,
} from "../../context/Utilities.context";
import { UserStateDispatchContext } from "../../context/UserData.context";
import "./DeleteUserModal.css";

function EditDetailModal() {
  const { isDeleteUserModalOpen, userIdToModify } = useContext(
    UtilityStateContext
  );
  const UtilityDispatch = useContext(UtilityStateDispatchContext);
  const UserStateDispatch = useContext(UserStateDispatchContext);
  function confirmModalAction() {
    UserStateDispatch({ type: "DELETE-USER", id: userIdToModify });
    UtilityDispatch({ type: "HIDE-DELETE-USER-MODAL" });
  }
  return (
    <AnimatedModal isModalOpen={isDeleteUserModalOpen}>
      <header className='modal__header'>
        <h1 className='modal__title'>Delete User?</h1>
        <button
          className='modal__button--header'
          onClick={() => {
            UtilityDispatch({ type: "HIDE-DELETE-USER-MODAL" });
          }}
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
          onClick={() => {
            UtilityDispatch({ type: "HIDE-DELETE-USER-MODAL" });
          }}
        >
          Cancel
        </button>
        <button className='modal__button--confirm' onClick={confirmModalAction}>
          OK
        </button>
      </footer>
    </AnimatedModal>
  );
}

export default EditDetailModal;
