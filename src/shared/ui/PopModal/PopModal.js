import React, { useState } from 'react';
import './PopModal.css';

export default function PopModal({ toggleModal }) {
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
            <input placeholder="* First Name" className="modal-name" />
            <input placeholder="* Last Name" className="modal-lastName" />
          </div>

          <div className="modal-email-container">
            <img className="modal-name-img" src="images/email.svg" />
            <input className="modal-email" />
          </div>

          <div className="modal-role">
            <img />
            <input />
          </div>

          <button className="modal-invitation">Send Invitation</button>
        </div>
      </div>
    </>
  );
}
