import React, { useEffect } from 'react';
import cls from './fullScreenModal.module.scss';
import Close from "./Close"

type PropTypes = {
  modalId: string;
  show: boolean;
  resetShow: () => void;
  title?: string;
  customTitle?: JSX.Element;
  children: React.ReactNode;
};

function FullScreenModal({
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
      if (modal && e.target === modal) {
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
        <div className={cls.modalContainer}>
          <div className={cls.modalHeader}>
          <p className={cls.modalTitle}>{title && title}</p>
          <Close size={"24px"} clickHandler={closeModal}/>
          </div>
          {children}
        </div>
    </div>
  );
}

export { FullScreenModal };
