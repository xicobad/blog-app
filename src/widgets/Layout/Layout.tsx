import { Outlet } from "react-router-dom";
import Header from "@widgets/Header";
import * as S from "./styles";

export const Layout = () => {
  return (
    <>
      <Header />
      <S.Container>
        <Outlet />
      </S.Container>
    </>
  );
};
