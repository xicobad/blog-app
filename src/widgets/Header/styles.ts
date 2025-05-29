import styled from "styled-components";
import { Link as RouterLink } from "react-router-dom";

export const Wrapper = styled.header`
  background-color: white;
  border-bottom: 1px solid #e5e5e5;
  padding: 16px 32px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Logo = styled(RouterLink)`
  font-weight: 600;
  font-size: 18px;
  color: #333;
  text-decoration: none;
`;

export const Nav = styled.nav`
  display: flex;
  gap: 16px;
  align-items: center;
`;

export const Link = styled(RouterLink)<{ $active?: boolean }>`
  font-size: 14px;
  color: ${({ $active }) => ($active ? "#000" : "#555")};
  text-decoration: none;
  font-weight: 500;

  &:hover {
    text-decoration: underline;
  }
`;

export const SignUpButton = styled(RouterLink)`
  font-size: 14px;
  color: #20c997;
  border: 1px solid #20c997;
  padding: 4px 10px;
  border-radius: 4px;
  text-decoration: none;
  font-weight: 500;

  &:hover {
    background-color: #f3fdf9;
  }
`;

export const LogoutButton = styled.button`
  background: transparent;
  border: none;
  color: #999;
  font-size: 14px;
  cursor: pointer;

  &:hover {
    color: #333;
    text-decoration: underline;
  }
`;

export const Avatar = styled.img`
  width: 26px;
  height: 26px;
  border-radius: 50%;
  object-fit: cover;
`;

export const Username = styled(RouterLink)`
  font-size: 14px;
  color: #333;
  text-decoration: none;
  font-weight: 500;

  &:hover {
    text-decoration: underline;
  }
`;

export const CreateButton = styled(Link)`
  padding: 6px 14px;
  background-color: white;
  border: 1px solid #52c41a;
  color: #52c41a;
  border-radius: 6px;
  font-weight: 500;
  text-decoration: none;
  margin-right: 16px;

  &:hover {
    background-color: #52c41a;
    color: white;
  }
`;
