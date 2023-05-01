import { useState } from 'react';
import './PopModal.css';

export default function PopModal({ toggleModal, addHandler, users }) {
  const [name, setName] = useState('');
  const [lastname, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [role, setRole] = useState('');

  const patternNames = /[^a-zA-Z]/;
  const patternEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const validateForm = name && lastname && email && role;
  const isRegisteredEmail = !users.some((el) => el.email === email);
  const isValidEmail = patternEmail.test(email) && email.length > 5;
  const isNameValid = !patternNames.test(name) && name.length > 2;
  const isLastnameValid = !patternNames.test(lastname) && lastname.length > 2;

  const groupValidation =
    validateForm &&
    isRegisteredEmail &&
    isValidEmail &&
    isNameValid &&
    isLastnameValid;

  const inviteHandler = () => {
    if (groupValidation) {
      addHandler(name, lastname, email, role);
      toggleModal();
    }
  };

  return (
    <>
      <div className="modal">
        <div onClick={toggleModal} className="overlay"></div>
        <div className="modal-content">
          <button className="close-modal" onClick={toggleModal}>
            X
          </button>
          <div className="modal-header-text">Invite New User</div>

          <div className="modal-name-container">
            <img className="modal-name-img" src="images/name.svg" />
            {name && <label className="modal-label-name">* First Name</label>}
            <input
              placeholder="* First Name"
              className="modal-name"
              onChange={(e) => setName(e.target.value)}
            />
            {lastname && (
              <label className="modal-label-lastname">* Last Name</label>
            )}
            <input
              placeholder="* Last Name"
              className="modal-lastName"
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>
          <div className="modal-email-container">
            <img className="modal-name-img" src="images/email.svg" />
            {email && <label className="modal-label-email">* Email</label>}
            <input
              placeholder="* Email"
              className="modal-email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="modal-role-container">
            <div className="modal-dropdown">
              <img className="modal-name-img" src="images/key-black.svg" />
              {role && <label className="modal-label-role">* Role</label>}
              <input
                defaultValue={role && '* ' + role}
                placeholder="* Role"
                className="modal-role-name"
              />
              <img src="images/triangle.svg"></img>
              <div className="dropdown-content">
                <div onClick={() => setRole('User')}>User</div>
                <div onClick={() => setRole('Admin')}>Admin</div>
              </div>
            </div>
          </div>
          <div className="modal-footer">
            <button
              className={
                groupValidation ? 'modal-invitation-ready' : 'modal-invitation'
              }
              onClick={inviteHandler}
            >
              Send Invitation
            </button>
            <div
              className={
                groupValidation
                  ? 'modal-footer-text-ready'
                  : 'modal-footer-text'
              }
            >
              Fill in all the fields
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
