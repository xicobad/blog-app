import styled from "styled-components";
import { Link } from "react-router-dom";

export const Wrapper = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 32px 16px;
  background: #fff;
  overflow-wrap: break-word;
  word-break: break-word;
  box-sizing: border-box;
`;

export const Title = styled.h1`
  font-size: 26px;
  font-weight: 600;
  margin-bottom: 8px;
  color: #333;
`;

export const Meta = styled.div`
  font-size: 14px;
  color: #777;
  margin-bottom: 16px;
`;

export const Body = styled.div`
  line-height: 1.7;
  font-size: 16px;
  color: #444;
  margin-top: 24px;

  p {
    margin-bottom: 16px;
  }

  pre {
    background: #f3f3f3;
    padding: 12px;
    border-radius: 4px;
    overflow-x: auto;
  }

  ul,
  ol {
    margin-left: 20px;
    margin-bottom: 16px;
  }

  li {
    margin-bottom: 8px;
  }
`;

export const Actions = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 10px;
  margin-top: 16px;
`;

export const EditButton = styled(Link)`
  padding: 6px 14px;
  background: transparent;
  border: 1px solid #52c41a;
  color: #52c41a;
  border-radius: 4px;
  font-size: 14px;
  text-decoration: none;

  &:hover {
    background: #52c41a;
    color: white;
  }
`;

export const DeleteButton = styled.button`
  padding: 6px 14px;
  background: transparent;
  border: 1px solid #ff4d4f;
  color: #ff4d4f;
  border-radius: 4px;
  font-size: 14px;
  cursor: pointer;

  &:hover {
    background: #ff4d4f;
    color: white;
  }
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 20px;
`;

export const LeftSide = styled.div`
  flex: 1;
`;

export const RightSide = styled.div``;

export const MetaBlock = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;

export const Description = styled.p`
  font-size: 16px;
  color: #555;
  margin: 8px 0 16px;
  line-height: 1.5;
`;

export const ModalWrapper = styled.div`
  position: relative;
  display: inline-block;
`;

export const Modal = styled.div`
  position: absolute;
  top: 100%;
  right: 0;
  z-index: 10;
  background: #fff;
  padding: 16px;
  border: 1px solid #d9d9d9;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  border-radius: 6px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  min-width: 260px;
`;

export const DeleteWrapper = styled.div`
  position: relative;
  display: inline-block;
`;
