import styled from "styled-components";

export const MetaWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 24px;
`;

export const Author = styled.div`
  display: flex;
  align-items: center;
`;

export const Avatar = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin-right: 12px;
`;

export const Username = styled.div`
  font-weight: 600;
  font-size: 14px;
`;

export const Date = styled.div`
  font-size: 12px;
  color: #888;
`;

export const FavoriteButton = styled.button<{ disabled?: boolean }>`
  font-size: 14px;
  color: ${({ disabled }) => (disabled ? "#aaa" : "#f45")};
  background: none;
  border: none;
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
  padding: 0;
  user-select: none;

  &:hover {
    text-decoration: ${({ disabled }) => (disabled ? "none" : "underline")};
  }
`;
