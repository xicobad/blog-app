import styled from "styled-components";

export const Label = styled.label`
  display: block;
  font-size: 14px;
  margin-bottom: 6px;
`;

export const Input = styled.input<{ hasError?: boolean }>`
  width: 100%;
  padding: 10px 12px;
  border: 1px solid ${({ hasError }) => (hasError ? "#f44336" : "#ccc")};
  border-radius: 4px;
  font-size: 14px;
  margin-bottom: 4px;
`;

export const ErrorText = styled.div`
  color: #f44336;
  font-size: 12px;
  margin-bottom: 12px;
`;
