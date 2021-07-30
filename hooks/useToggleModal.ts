import { useState } from 'react';

const useToggleModal = () => {
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const toggleModal = () => {
    modalOpen ? setModalOpen(false) : setModalOpen(true);
  };
  return { modalOpen, toggleModal };
};

export default useToggleModal;
