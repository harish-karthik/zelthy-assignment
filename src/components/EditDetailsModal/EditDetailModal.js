import React from "react";
import AnimatedModal from "../AnimatedModal/AnimatedModal";
import "./EditDetailModal.css";

function EditDetailModal(props) {
  const {
    isEditDetailModalOpen,
    closeEditDetailModal,
    name,
    email,
    phone,
    website,
  } = props;
  return (
    <AnimatedModal isModalOpen={isEditDetailModalOpen}>
      <header className='modal__header'>
        <h1 className='modal__title'>Edit Detials</h1>
        <button
          className='modal__button--header'
          onClick={closeEditDetailModal}
        >
          X
        </button>
      </header>
      <form className='editModal__form'>
        <div className='editModal__formGroup'>
          <label htmlFor='fullName' className='editModal__controlLabel'>
            <span className='editModal__required'>*</span>
            Name :
          </label>
          <input
            type='text'
            value={name}
            id='fullName'
            name='name'
            className='editModal__formControl'
            required
          />
        </div>
        <div className='editModal__formGroup'>
          <label htmlFor='email' className='editModal__controlLabel'>
            <span className='editModal__required'>*</span>
            Email :
          </label>
          <input
            type='email'
            value={email}
            id='email'
            name='email'
            className='editModal__formControl'
            required
          />
        </div>
        <div className='editModal__formGroup'>
          <label htmlFor='phone' className='editModal__controlLabel'>
            <span className='editModal__required'>*</span>
            Phone :
          </label>
          <input
            type='number'
            value={phone}
            id='phone'
            name='phone'
            className='editModal__formControl'
            required
          />
        </div>
        <div className='editModal__formGroup'>
          <label htmlFor='website' className='editModal__controlLabel'>
            <span className='editModal__required'>*</span>
            Website :
          </label>
          <input
            type='text'
            value={website}
            id='website'
            name='website'
            className='editModal__formControl'
            required
          />
        </div>
      </form>
      <footer className='modal__footer'>
        <button
          className='modal__button--cancel'
          onClick={closeEditDetailModal}
        >
          Cancel
        </button>
        <button className='modal__button--confirm'>OK</button>
      </footer>
    </AnimatedModal>
  );
}

export default EditDetailModal;
