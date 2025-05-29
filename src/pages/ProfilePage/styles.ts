import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 40px 16px;
`;

export const Card = styled.div`
  background-color: white;
  padding: 32px;
  border-radius: 6px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 400px;
`;

export const Title = styled.h2`
  font-size: 20px;
  font-weight: 600;
  text-align: center;
  margin-bottom: 24px;
`;

export const Button = styled.button`
  background-color: #1890ff;
  color: white;
  width: 100%;
  padding: 10px 0;
  font-size: 14px;
  font-weight: 500;
  border: none;
  border-radius: 4px;
  margin-top: 16px;
  cursor: pointer;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: #40a9ff;
  }
`;
