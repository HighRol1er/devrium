import { deleteImage } from '@/utils/uploadImage';
import { useCallback, useState } from 'react';

export const useShowModal = (imageUrl: string) => {
  const [showModal, setShowModal] = useState<boolean>(false);

  const onClickContinue = useCallback(() => {
    if (showModal) {
      deleteImage(imageUrl);
      setShowModal(false);
      window.history.back();
    }
  }, [imageUrl, showModal]);

  return { showModal, onClickContinue, setShowModal };
};
