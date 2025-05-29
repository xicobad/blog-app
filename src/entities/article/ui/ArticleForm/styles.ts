import styled from "styled-components";

export const Form = styled.form`
  max-width: 900px;
  width: 100%;
  margin: 40px auto;
  padding: 40px;
  background-color: #fff;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
  border-radius: 6px;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const Title = styled.h2`
  font-size: 22px;
  font-weight: 600;
  text-align: center;
  margin-bottom: 10px;
`;

export const Label = styled.label`
  font-weight: 500;
`;

export const Textarea = styled.textarea`
  width: 100%;
  padding: 12px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
  resize: vertical;
  min-height: 160px;
`;

export const Error = styled.div`
  color: red;
  font-size: 13px;
  margin-top: -10px;
`;

export const Tags = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const TagItem = styled.div`
  width: 300px;
  height: 40px;
  display: flex;
  gap: 8px;
`;

export const TagInput = styled.input`
  width: 300px;
  height: 40px;
  flex: 1;
  padding: 8px;
  font-size: 14px;
`;

export const AddButton = styled.button`
  padding: 8px 14px;
  background: #1890ff;
  color: white;
  border: none;
  font-size: 14px;
  border-radius: 4px;
  cursor: pointer;
`;

export const DeleteButton = styled.button`
  padding: 8px 14px;
  background: #ff4d4f;
  color: white;
  border: none;
  font-size: 14px;
  border-radius: 4px;
  cursor: pointer;
`;

export const SubmitButton = styled.button`
  padding: 12px;
  background-color: #1890ff;
  color: white;
  border: none;
  font-weight: 600;
  font-size: 16px;
  border-radius: 6px;
  margin-top: 20px;

  &:disabled {
    background-color: #91d5ff;
  }
`;
