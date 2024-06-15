import { useState } from 'react';
import Modal from '@/components/commons/parts/modal/modal';
import { useRouter } from 'next/router';

export const useCustomModal = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleModal = () => {
    setIsOpen(!isOpen);
  };

  return { handleModal, Modal, isOpen };
};
