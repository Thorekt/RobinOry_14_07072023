import React from 'react';
import '../styles/components/modal.css';
import close from '../assets/images/close-icon.svg';

export default function Modal() {
  return (
    <div className="modal-container">
      <div className="modal-content">
        <header className="modal-header">
          <h3 className="modal-title">Modal Title</h3>
          <button type="button" className="modal-close">
            <img src={close} alt="close modal button" />
          </button>
        </header>
        <div className="modal-body">
          <p>Modal Body</p>
        </div>
        <footer className="modal-footer">
          <button type="button" className="modal-end">close</button>
        </footer>
      </div>
    </div>
  );
}
