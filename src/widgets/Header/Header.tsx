import { useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import * as S from "./styles";
import { RootState } from "@app/store";
import { clearUser } from "@features/auth/model/authSlice";
import { useNavigate } from "react-router-dom";

export const Header = () => {
  const { pathname } = useLocation();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const user = useSelector((state: RootState) => state.auth.user);
  const isAuth = useSelector((state: RootState) => state.auth.isAuth);

  const handleLogout = () => {
    dispatch(clearUser());
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    navigate("/sign-in");
  };

  return (
    <S.Wrapper>
      <S.Logo to="/articles">Realworld Blog</S.Logo>

      <S.Nav>
        {isAuth ? (
          <>
            <S.CreateButton to="/new-article">Create article</S.CreateButton>

            <S.Username to="/profile">{user?.username}</S.Username>
            {user?.image && <S.Avatar src={user.image} alt="avatar" />}
            <S.LogoutButton onClick={handleLogout}>Log out</S.LogoutButton>
          </>
        ) : (
          <>
            <S.Link $active={pathname === "/sign-in"} to="/sign-in">
              Sign In
            </S.Link>
            <S.SignUpButton to="/sign-up">Sign Up</S.SignUpButton>
          </>
        )}
      </S.Nav>
    </S.Wrapper>
  );
};
