import React from 'react';
import PropTypes from 'prop-types';
import '../styles/components/modal.css';
import close from '../assets/images/close-icon.svg';

export default function Modal({
  title, children, onClickClose, isModalOpen,
}) {
  return (
    <div className={`modal-container ${isModalOpen ? 'active' : ''}`}>
      <div className="modal-content">
        <header className="modal-header">
          <h3 className="modal-title">{title}</h3>
          <button type="button" className="modal-close" onClick={onClickClose}>
            <img src={close} alt="close modal button" />
          </button>
        </header>
        <div className="modal-body">
          {children}
        </div>
      </div>
    </div>
  );
}

Modal.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  onClickClose: PropTypes.func.isRequired,
  isModalOpen: PropTypes.bool.isRequired,
};
