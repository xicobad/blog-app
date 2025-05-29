import styled from "styled-components";

export const PopoverWrapper = styled.div`
  position: absolute;
  top: -100%;
  right: -250px;
  margin-top: 8px;
  background: white;
  border: 1px solid #d9d9d9;
  border-radius: 6px;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);
  padding: 16px;
  z-index: 20;
  min-width: 240px;
`;

export const Modal = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const Message = styled.div`
  font-size: 14px;
  color: #333;
`;

export const ButtonGroup = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 8px;
`;

export const CancelButton = styled.button`
  padding: 4px 12px;
  font-size: 14px;
  background: white;
  border: 1px solid #d9d9d9;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background: #f5f5f5;
  }
`;

export const ConfirmButton = styled.button`
  padding: 4px 12px;
  font-size: 14px;
  background: #1677ff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background: #0958d9;
  }
`;
