import React from 'react';
import PropTypes from 'prop-types';
import '../styles/components/modal.css';
import close from '../assets/images/close-icon.svg';

export default function Modal({
  title, children, onClickClose, isModalOpen, classNames,
}) {
  const containerClassNames = `modal-container ${isModalOpen ? 'active' : ''} ${classNames.container}`;
  const contentClassNames = `modal-content ${classNames.content}`;
  const headerClassNames = `modal-header ${classNames.header}`;
  const titleClassNames = `modal-title ${classNames.title}`;
  const closeClassNames = `modal-close ${classNames.close}`;
  const bodyClassNames = `modal-body ${classNames.body}`;
  return (
    <div className={containerClassNames}>
      <div className={contentClassNames}>
        <header className={headerClassNames}>
          <h3 className={titleClassNames}>{title}</h3>
          <button type="button" className={closeClassNames} onClick={onClickClose}>
            <img src={close} alt="close modal button" />
          </button>
        </header>
        <div className={bodyClassNames}>
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
  classNames: PropTypes.shape({
    container: PropTypes.string,
    content: PropTypes.string,
    header: PropTypes.string,
    title: PropTypes.string,
    close: PropTypes.string,
    body: PropTypes.string,
  }),
};

Modal.defaultProps = {
  classNames: {
    container: '',
    content: '',
    header: '',
    title: '',
    close: '',
    body: '',
  },
};
