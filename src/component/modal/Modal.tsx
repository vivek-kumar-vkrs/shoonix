import React, { useEffect } from 'react';
import cls from './modal.module.scss';

type PropTypes = {
  modalId: string;
  show: boolean;
  resetShow: () => void;
  title?: string;
  customTitle?: JSX.Element;
  children: React.ReactNode;
};

function Modal({
  modalId,
  show,
  resetShow,
  title,
  customTitle,
  children,
}: PropTypes) {
  console.log('modalId', modalId);

  useEffect(() => {
    function openModal() {
      console.log('openModal');
      const modal = document.getElementById(`${modalId}`);
      if (modal) {
        modal.style.display = 'block';
      }
      window.addEventListener('click', outClickCloseModal);
    }

    function outClickCloseModal(e: any) {
      const modal = document.getElementById(`${modalId}`);
      if (e.target === modal && modal) {
        modal.style.display = 'none';
        window.removeEventListener('click', outClickCloseModal);
        resetShow();
      }
    }

    if (show) openModal();
    if (!show) closeModal();
  }, [show, closeModal, modalId, resetShow]);

  function closeModal() {
    const modal = document.getElementById(`${modalId}`);
    if (modal) {
      modal.style.display = 'none';
    }
    resetShow();
  }

  return (
    <div className={cls.modal} id={`${modalId}`}>
      <div>
        <div className={cls.modalContainer}>
          <div className={cls.modalHeader}>
            {customTitle ? (
              customTitle
            ) : (
              <p className={cls.modalTitle}>{title}</p>
            )}
            <Close clickHandler={closeModal} />
          </div>
          {children}
        </div>
      </div>
    </div>
  );
}

export { Modal };

type ClosePropTypes = { clickHandler: () => void; size?: string };
function Close({ clickHandler, size }: ClosePropTypes) {
  return (
    <svg
      // className={cls.modalClose}
      onClick={clickHandler}
      width={size ? size : '2rem'}
      height={size ? size : '2rem'}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        xmlns="http://www.w3.org/2000/svg"
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5.29289 5.29289C5.68342 4.90237 6.31658 4.90237 6.70711 5.29289L12 10.5858L17.2929 5.29289C17.6834 4.90237 18.3166 4.90237 18.7071 5.29289C19.0976 5.68342 19.0976 6.31658 18.7071 6.70711L13.4142 12L18.7071 17.2929C19.0976 17.6834 19.0976 18.3166 18.7071 18.7071C18.3166 19.0976 17.6834 19.0976 17.2929 18.7071L12 13.4142L6.70711 18.7071C6.31658 19.0976 5.68342 19.0976 5.29289 18.7071C4.90237 18.3166 4.90237 17.6834 5.29289 17.2929L10.5858 12L5.29289 6.70711C4.90237 6.31658 4.90237 5.68342 5.29289 5.29289Z"
        fill="#1a1a1a"
      ></path>
    </svg>
  );
}
