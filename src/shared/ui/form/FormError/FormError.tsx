import * as S from "./styles";

interface Props {
  message: string;
}

export const FormError = ({ message }: Props) => {
  if (!message) return null;
  return <S.Wrapper>{message}</S.Wrapper>;
};
