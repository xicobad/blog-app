import styled from "styled-components";

export const Title = styled.h1`
  text-align: center;
  font-size: 22px;
  margin-bottom: 24px;
`;

export const Button = styled.button`
  width: 100%;
  background: #007bff;
  color: white;
  font-weight: 500;
  font-size: 14px;
  padding: 10px 0;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin-top: 12px;
`;

export const BottomText = styled.p`
  text-align: center;
  font-size: 14px;
  margin-top: 16px;
`;

export const Link = styled.a`
  color: #007bff;
  cursor: pointer;
  margin-left: 4px;
`;

export const SubmitButton = styled.button`
  width: 100%;
  padding: 12px;
  font-weight: bold;
  background-color: #3f8cff;
  color: white;
  border-radius: 6px;
  border: none;
  cursor: pointer;

  &:hover {
    background-color: #367de4;
  }
`;

export const Label = styled.div`
  font-weight: 500;
  margin-bottom: 4px;
`;

export const Textarea = styled.textarea`
  width: 100%;
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 6px;
  resize: vertical;
  min-height: 200px;
`;

export const Error = styled.div`
  color: red;
  font-size: 13px;
  margin-top: 4px;
`;
