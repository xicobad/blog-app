import styled from "styled-components";
import { Link } from "react-router-dom";

export const CardWrapper = styled.div`
  background: #fff;
  border-radius: 6px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.06);
  padding: 16px 20px;
  margin-bottom: 16px;
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const TopRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 12px;
`;

export const Title = styled(Link)`
  font-size: 18px;
  color: #007bff;
  font-weight: 600;
  text-decoration: none;
  max-width: 80%;

  &:hover {
    text-decoration: underline;
  }
`;

export const FavCount = styled.div`
  font-size: 14px;
  color: #b0b0b0;
  white-space: nowrap;
  display: flex;
  align-items: center;
`;

export const Description = styled.p`
  font-size: 12px;
  color: #000000;
`;

export const Footer = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: auto;
`;

export const AuthorBlock = styled.div`
  display: flex;
  align-items: center;
`;

export const AuthorImage = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin-right: 12px;
`;

export const AuthorName = styled.div`
  font-size: 14px;
  font-weight: 500;
`;

export const CreatedAt = styled.div`
  font-size: 12px;
  color: #888;
`;

export const HeaderRow = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const MetaRight = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;

export const Left = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;
