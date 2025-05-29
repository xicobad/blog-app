import React from "react";
import * as S from "./styles";

interface ConfirmModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  message: string;
}

const ConfirmModal: React.FC<ConfirmModalProps> = ({
  isOpen,
  onClose,
  onConfirm,
  message,
}) => {
  if (!isOpen) return null;

  return (
    <S.PopoverWrapper>
      <S.Modal>
        <S.Message>{message}</S.Message>
        <S.ButtonGroup>
          <S.CancelButton onClick={onClose}>No</S.CancelButton>
          <S.ConfirmButton onClick={onConfirm}>Yes</S.ConfirmButton>
        </S.ButtonGroup>
      </S.Modal>
    </S.PopoverWrapper>
  );
};

export default ConfirmModal;
