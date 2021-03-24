import React, { useContext, useState, useEffect } from "react";
import AnimatedModal from "../AnimatedModal/AnimatedModal";
import {
  UtilityStateContext,
  UtilityStateDispatchContext,
} from "../../context/Utilities.context";
import {
  UserStateContext,
  UserStateDispatchContext,
} from "../../context/UserData.context";
import "./EditDetailModal.css";

function EditDetailModal() {
  const { isEditDetailModalOpen, userIdToModify } = useContext(
    UtilityStateContext
  );
  const { users } = useContext(UserStateContext);
  const UserStateDispatch = useContext(UserStateDispatchContext);
  const [userToEdit, setUserToEdit] = useState({});
  const UtilityDispatch = useContext(UtilityStateDispatchContext);
  useEffect(() => {
    const findUser = users.filter((user) => user.id === userIdToModify);
    setUserToEdit({ ...findUser[0] });
    // eslint-disable-next-line
  }, [userIdToModify]);
  function handleInputChange(event) {
    const editedUser = {
      ...userToEdit,
      [event.target.name]: event.target.value,
    };
    setUserToEdit(editedUser);
  }
  function confirmModalAction(event) {
    event.preventDefault();
    UserStateDispatch({ type: "EDIT-USER", user: userToEdit });
    UtilityDispatch({ type: "HIDE-EDIT-DETAIL-MODAL" });
  }
  return (
    <AnimatedModal isModalOpen={isEditDetailModalOpen}>
      <form className='editModal__form' onSubmit={confirmModalAction}>
        <header className='modal__header'>
          <h1 className='modal__title'>Edit Detials</h1>
          <button
            className='modal__button--header'
            onClick={(event) => {
              event.preventDefault();
              UtilityDispatch({ type: "HIDE-EDIT-DETAIL-MODAL" });
            }}
          >
            X
          </button>
        </header>
        <div className='editModal__formGroup'>
          <label htmlFor='fullName' className='editModal__controlLabel'>
            <span className='editModal__required'>*</span>
            Name :
          </label>
          <input
            type='text'
            value={userToEdit.name || ""}
            id='fullName'
            name='name'
            className='editModal__formControl'
            required
            onChange={handleInputChange}
          />
        </div>
        <div className='editModal__formGroup'>
          <label htmlFor='email' className='editModal__controlLabel'>
            <span className='editModal__required'>*</span>
            Email :
          </label>
          <input
            type='email'
            value={userToEdit.email || ""}
            id='email'
            name='email'
            className='editModal__formControl'
            required
            onChange={handleInputChange}
          />
        </div>
        <div className='editModal__formGroup'>
          <label htmlFor='phone' className='editModal__controlLabel'>
            <span className='editModal__required'>*</span>
            Phone :
          </label>
          <input
            type='text'
            value={userToEdit.phone || ""}
            id='phone'
            name='phone'
            className='editModal__formControl'
            required
            onChange={handleInputChange}
          />
        </div>
        <div className='editModal__formGroup'>
          <label htmlFor='website' className='editModal__controlLabel'>
            <span className='editModal__required'>*</span>
            Website :
          </label>
          <input
            type='text'
            value={userToEdit.website || ""}
            id='website'
            name='website'
            className='editModal__formControl'
            required
            onChange={handleInputChange}
          />
        </div>
        <footer className='modal__footer'>
          <button
            className='modal__button--cancel'
            onClick={(event) => {
              event.preventDefault();
              UtilityDispatch({ type: "HIDE-EDIT-DETAIL-MODAL" });
            }}
          >
            Cancel
          </button>
          <button className='modal__button--confirm' formAction='submit'>
            OK
          </button>
        </footer>
      </form>
    </AnimatedModal>
  );
}

export default EditDetailModal;
